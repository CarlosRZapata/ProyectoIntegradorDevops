import React, { useEffect, useState } from "react";
import { getDireccion } from "../services/direction";
import { Table } from "antd";
import { Direction } from "../models/direction";

const TablaDireccion: React.FC = () => {
  const [direction, setDirection] = useState<Direction[]>([]);

  useEffect(() => {
    const fetchDirection = async () => {
      try {
        const direction = await getDireccion();
        setDirection(direction);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchDirection();
  }, []);

  const columns = [
    {
        title: 'ID_Direccion',
        dataIndex: 'id_direccion',
        key: 'id_direccion',
        
      },

      {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
      },

      {
        title: 'Codigo_Postal',
        dataIndex: 'codigo_postal',
        key: 'codigo_postal',
      },
  
      {
        title: 'Calle',
        dataIndex: 'calle',
        key: 'calle',
      },
  
      {
        title: 'Colonia',
        dataIndex: 'colonia',
        key: 'colonia',
      },

      {
        title: 'Numero_Exterior',
        dataIndex: 'numero_exterior',
        key: 'numero_exterior',
      },
  
      {
        title: 'Numero_Interior',
        dataIndex: 'numero_interior',
        key: 'numero_interior',
      },
  
      {
        title: 'Ciudad',
        dataIndex: 'ciudad',
        key: 'ciudad',
      },
  
      {
        title: 'Fecha_Creacion',
        dataIndex: 'fecha_creacion',
        key: 'fecha_creacion',
      },
  
      {
        title: 'Fecha_Actualizacion',
        dataIndex: 'fecha_actualizacion',
        key: 'fecha_actualizacion',
      },
  
      {
        title: 'FechaEliminado',
        dataIndex: 'fecha_eliminacion',
        key: 'fecha_eliminacion',
      },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={direction}
      />

    </>
  );
}

export default TablaDireccion;