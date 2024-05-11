import React, { useEffect, useState } from "react";
import { getSesionProductos } from "../services/sessionsProduct";
import { Button, Drawer, Form, Table, InputNumber } from "antd";
import { SessionProduct } from "../models/sessionsProduct";
import DrawerFooter from "./DrawerFooter";
import type { InputNumberProps } from 'antd';

const TablaSesionesProductos: React.FC = () => {
  const onChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
      <Button type="primary" onClick={showDrawer}>
        Añadir
      </Button>
      <Table
        columns={columns}
        dataSource={session_product}
      />
      <Drawer title="Sesion de producto" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item label="ID Producto" name="ID_Producto">
            <InputNumber min={0} max={99999} defaultValue={0} onChange={onChange} />
          </Form.Item>
          <Form.Item label="Cantidad" name="Cantidad">
            <InputNumber min={0} max={99999} defaultValue={0} onChange={onChange} />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default TablaSesionesProductos;