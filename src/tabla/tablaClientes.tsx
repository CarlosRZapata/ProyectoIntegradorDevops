import React, { useEffect, useState } from "react";
import { getCliente } from "../services/clients";
import { Table } from "antd";
import { Client } from "../models/clients";

const TablaCliente: React.FC = () => {
  const [Cliente, setCliente] = useState<Client[]>([]);

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const clientes = await getCliente();
        setCliente(clientes);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCliente();
  }, []);

  const columns = [
    {
        title: 'ID_Cliente',
        dataIndex: 'id_cliente',
        key: 'id_cliente',
        
      },
      {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
      },
    
      {
        title: 'Apellido',
        dataIndex: 'apellido',
        key: 'apellido',
      },
      {
        title: 'Fecha_Nacimiento',
        dataIndex: 'fechadenacimiento',
        key: 'fechadenacimiento',
      },
    
      {
        title: 'ID_Genero',
        dataIndex: 'fk_genero',
        key: 'fk_genero',
      },
    
      {
        title: 'Telefono',
        dataIndex: 'telefono',
        key: 'telefono',
      },
    
      {
        title: 'Correo',
        dataIndex: 'correo',
        key: 'correo',
      },
    
      {
        title: 'ID_Direccion',
        dataIndex: 'fk_direccion',
        key: 'fk_direccion',
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
      title: 'Fecha_Eliminado',
      dataIndex: 'fecha_eliminacion',
      key: 'fecha_eliminacion',
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={Cliente}
      />

    </>
  );
}

export default TablaCliente;