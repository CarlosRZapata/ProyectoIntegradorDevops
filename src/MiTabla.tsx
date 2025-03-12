import { useEffect, useState } from "react";
import supabase from "./utils/supabase";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

type AirQuality = {
  id: number;
  city: string;
  state: string;
  country: string;
  aqi_us: number;
  main_pollutant: string;
  temperature: number;
  humidity: number;
  wind_speed: number;
  timestamp: string;
};

const MiTabla = () => {
  const [data, setData] = useState<AirQuality[]>([]);
  const [metrics, setMetrics] = useState<{ avgTemp: number; maxAQI: number; minAQI: number; avgHumidity: number } | null>(null);
  const AQIGraph = ({ data }: { data: AirQuality[] }) => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="aqi_us" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("air_quality").select("*");

      if (error) {
        console.error("Error al obtener datos:", error);
      } else {
        setData(data as AirQuality[]);
      }
    };

    fetchData();
  }, []);

  //Calculo de metricas
  useEffect(() => {
    if (data.length > 0) {
      const avgTemp = data.reduce((acc, item) => acc + item.temperature, 0) / data.length;
      const maxAQI = Math.max(...data.map(item => item.aqi_us));
      const minAQI = Math.min(...data.map(item => item.aqi_us));
      const avgHumidity = data.reduce((acc, item) => acc + item.humidity, 0) / data.length;

      setMetrics({ avgTemp, maxAQI, minAQI, avgHumidity });
    }
  }, [data]);

  return (
    <div style={{ color: "black" }}>
      <h1>Villahermosa Quality</h1>

      {metrics && (
        <div style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
          <h2>Métricas</h2>
          <ul>
            <li><strong>Temperatura Promedio:</strong> {metrics.avgTemp.toFixed(2)}°C</li>
            <li><strong>AQI Máximo:</strong> {metrics.maxAQI}</li>
            <li><strong>AQI Mínimo:</strong> {metrics.minAQI}</li>
            <li><strong>Humedad Promedio:</strong> {metrics.avgHumidity.toFixed(2)}%</li>
          </ul>
        </div>
      )}
      {data.length > 0 && <AQIGraph data={data} />}

      {/* Tabla de datos */}
      <table className="mi-tabla">
        <thead>
          <tr>
            {Object.keys(data[0] || {}).map((key) =>
              key !== "id" ? <th key={key}>{key}</th> : null
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.entries(item).map(([key, value]) =>
                key !== "id" ? <td key={key}>{value}</td> : null
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MiTabla;
