import React, { useEffect, useState } from "react";
import { getSesionProductos } from "../services/sessionsProduct";
import { Table } from "antd";
import { SessionProduct } from "../models/sessionsProduct";

const TablaSesionesProductos: React.FC = () => {
  const [session_product, setSessionProduct] = useState<SessionProduct[]>([]);

  useEffect(() => {
    const fetchSessionProduct = async () => {
      try {
        const session_product = await getSesionProductos();
        setSessionProduct(session_product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchSessionProduct();
  }, []);

  const columns = [
    {
      title: 'ID_Sesion',
      dataIndex: 'fk_sesion',
      key: 'fk_sesion',
      
    },
    {
      title: 'ID_Producto',
      dataIndex: 'fk_productos',
      key: 'fk_productos',
    },
    
    {
      title: 'Cantidad',
      dataIndex: 'cantidad',
      key: 'cantidad',
    }
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={session_product}
      />

    </>
  );
}

export default TablaSesionesProductos;