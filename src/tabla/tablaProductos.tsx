import React, { useEffect, useState } from "react";
import { getProducts } from "../services/product";
import { Button, Drawer, Form, Input, Table, InputNumber } from "antd";
import { Product } from "../models/product";
import DrawerFooter from "./DrawerFooter";
import type { InputNumberProps } from 'antd';

const TablaProductos: React.FC = () => {
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
  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const columns = [
    {
      title: 'ID_Producto',
      dataIndex: 'id_productos',
      key: 'id_Producto',

    },

    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },

    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
    },

    {
      title: 'ID_Categoria',
      dataIndex: 'fk_categoria',
      key: 'fk_categoria',
    },

    {
      title: 'FechaCreacion',
      dataIndex: 'fecha_creacion',
      key: 'fecha_creacion',
    },

    {
      title: 'FechaActu',
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
      <Button type="primary" onClick={showDrawer}>
        Añadir
      </Button>
      <Table
        columns={columns}
        dataSource={products}
      />
      <Drawer title="Agregar producto" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item label="Nombre"  name="Nombre">
              <Input/>
          </Form.Item>
          <Form.Item label="Precio" name="Precio">
            <InputNumber min={0} max={99999} defaultValue={0} onChange={onChange} />
          </Form.Item>
          <Form.Item label="ID Categoria" name="ID_Categoria">
            <InputNumber min={0} max={99} defaultValue={0} onChange={onChange} />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default TablaProductos;