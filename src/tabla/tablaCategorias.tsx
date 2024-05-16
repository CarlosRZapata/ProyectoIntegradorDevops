import React, { useEffect, useState } from "react";
import { getCategory, createCategory } from "../services/category";
import { Button, Drawer, Form, Input, Table } from 'antd';
import { Category } from "../models/category";
import DrawerFooter from "./DrawerFooter";


const TablaCategorias: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<Category[]>([]);
  const [nombre, setNombre] = useState<string>(''); 

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categories = await getCategory();
        setCategory(categories);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, []);

  const handleSubmit = async () => {
    try {
      const nextId = category.reduce((maxId, category) => Math.max(maxId, category.id_categoria), 5) + 1;
      const nuevaCategoria: Category = {
        id_categoria: nextId,
        nombre,
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
      };
      await createCategory(nuevaCategoria);
      const updatedCategory = await getCategory();
      setCategory(updatedCategory);
      onClose();  
    } catch (error) {
      console.error("Error creating :", error);
    }
  };

  const columns = [
    {
        title: 'ID_Categoria',
        dataIndex: 'id_categoria',
        key: 'id_categoria',
        
      },
      {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
      },
      
      {
        title: 'FechaCreacion',
        dataIndex: 'fecha_creacion',
        key: 'fecha_creacion',
      },
      
      {
        title: 'Fecha_Actualizacion',
        dataIndex: 'fecha_actualizacion',
        key: 'fecha_actualizacion',
      },

      {
        title: 'Creado_Por',
        dataIndex: 'fk_creado_por',
        key: 'fk_creado_por',
      },
      
      {
        title: 'Actualizado_Por',
        dataIndex: 'fk_actualizado_por',
        key: 'fk_actualizado_por',
      },
      
      {
        title: 'Fecha_Eliminacion',
        dataIndex: 'fecha_eliminacion',
        key: 'fecha_eliminacion',
      },
      {
        title: 'Eliminado_Por',
        dataIndex: 'fk_eliminado_por',
        key: 'fk_eliminado_por',
      }
  ];

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Añadir Categoria
      </Button>
      <Table columns={columns} dataSource={category} />
      <Drawer
        title="Agregar Categoria"
        onClose={onClose}
        open={open}
        footer={<DrawerFooter />}
      >
        <Form onFinish={handleSubmit}>
          <Form.Item
            label="Categoria"
            name="Categoria"
            rules={[{ required: true, message: 'Por favor ingrese el nombre de la categoria' }]}
          >
            <Input value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Crear Categoria
          </Button>
        </Form>
      </Drawer>
    </>
  );
}

export default TablaCategorias;