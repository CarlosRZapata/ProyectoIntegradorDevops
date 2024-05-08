import React, { useEffect, useState } from "react";
import { getUsuarios } from "../services/user";
import { Table } from "antd";
import { User } from "../models/user";

const TablaUsuarios: React.FC = () => {
  const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUsuarios();
        setUser(user);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchUser();
  }, []);

  const columns = [
    {
        title: 'ID_Usuario',
        dataIndex: 'id_usuario',
        key: 'id_usuario',
        
      },
      {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
      },
      
      {
        title: 'Creado por',
        dataIndex: 'creado_por',
        key: 'creado_por',
      },
      
      {
        title: 'Actualizado por',
        dataIndex: 'actualizado_por',
        key: 'actualizado_por',
      },

      {
        title: 'Fecha_Eliminacion',
        dataIndex: 'fecha_elimincacion',
        key: 'fecha_elimincacion',
      },
      
      {
        title: 'Eliminado por',
        dataIndex: 'eliminado_por',
        key: 'eliminado_por',
      },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={users}
      />

    </>
  );
}

export default TablaUsuarios;