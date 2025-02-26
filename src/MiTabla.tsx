import { useEffect, useState } from "react";
import supabase from "./utils/supabase";

type AirQuality = {
  id: number;
  [key: string]: any;
};

const MiTabla = () => {
  const [data, setData] = useState<AirQuality[]>([]);

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

  return (
    <div style={{ color: "black" }}>
      <h1>Villahermosa Quality</h1>
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