import React, { useEffect, useState } from "react";
import { getProducts,createProducts } from "../services/product";
import { Table, Drawer, Button, Form, Input, InputNumberProps, InputNumber } from "antd";
import { Product } from "../models/product";
import DrawerFooter from "./DrawerFooter";
import supabase from "../utils/supabase";

const TablaProductos: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [nombre, setNombre] = useState<string>('');
  const [precio, setPrecio] = useState<number>(0);
  const [fk_categoria, setIDCategoria] = useState<number>(0);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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

  const handleSubmit = async () => {
    try {
      const currentDateTime = new Date();
      const maxIdResponse = await supabase
        .from("productos")
        .select("id_producto")
        .order("id_producto", { ascending: false })
        .limit(1);

      const maxId = maxIdResponse.data?.[0]?.id_producto || 0;
      const newId = maxId + 1;

      const productosInput: Product = {
        id_producto: newId,
        nombre,
        precio,
        fk_categoria,
        fecha_creacion: currentDateTime, 
      };

      await createProducts(productosInput);

      const updatedProductos = await getProducts();
      setProducts(updatedProductos);
      onClose();
    } catch (error) {
      console.error("Error creating productos:", error);
    }
  };

  const onChangeP: InputNumberProps['onChange'] = (value) => {
    if (value !== null && typeof value === 'number') {
      setPrecio(value);
    } else {
      setPrecio(0);
    }
  };

  const onChangeC: InputNumberProps['onChange'] = (value) => {
    if (value !== null && typeof value === 'number') {
      setIDCategoria(value);
    } else {
      setIDCategoria(0);
    }
  };

  const columns = [
    {
      title: 'ID_Producto',
      dataIndex: 'id_productos',
      key: 'id_productos',

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
        Agregar producto
      </Button>
      <Table columns={columns} dataSource={products}/>
      <Drawer title="Agregar Productos" onClose={onClose} open={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
      <Form onFinish={handleSubmit}>
          <Form.Item
            label="Nombre"
            name="nombre"
            rules={[{ required: true, message: "Agrega el nombre del producto" }]}
          >
          <Input value={nombre} onChange={(e) => setNombre(e.target.value)} />          
          </Form.Item>

          <Form.Item
            label="Precio"
            name="precio"
            rules={[{ required: true, message: "Agrega el precio" }]}
          >
          <InputNumber defaultValue={precio} onChange={onChangeP} />          </Form.Item>

          <Form.Item
            label="ID_Categoria"
            name="idcategoria"
            rules={[{ required: true, message: "Agrega el ID de la categoria del producto" }]}
          >
          <InputNumber defaultValue={fk_categoria} onChange={onChangeC} />          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          </Form.Item>
        </Form>
      </Drawer>

    </>
  );
}

export default TablaProductos;