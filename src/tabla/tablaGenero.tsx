import React, { useEffect, useState } from "react";
import { getGenero } from "../services/gender";
import { Gender } from "../models/gender";
import { Button, Drawer, Form, Input, Table } from 'antd';
import DrawerFooter from "./DrawerFooter";

const TablaGenero: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [gender, setGender] = useState<Gender[]>([]);

  useEffect(() => {
    const fetchGender = async () => {
      try {
        const gender = await getGenero();
        setGender(gender);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchGender();
  }, []);

  const columns = [
    {
        title: 'ID_Genero',
        dataIndex: 'id_genero',
        key: 'id_genero',
        
      },
      {
        title: 'Genero',
        dataIndex: 'genero',
        key: 'genero',
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
      <Button type="primary" onClick={showDrawer}>
        Añadir
      </Button>
      <Table columns={columns} dataSource={gender}/>
      <Drawer title="Agregar genero" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item label="Genero"  name="Genero">
              <Input/>
          </Form.Item>
        </Form>
      </Drawer>

    </>
  );
}

export default TablaGenero;