import React, { useEffect, useState } from "react";
import { getUsuarios } from "../services/user";
import { Form, Input, Table, Button, Drawer } from "antd";
import { User } from "../models/user";
import DrawerFooter from "./DrawerFooter";

const TablaUsuarios: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
  ];

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Añadir
      </Button>
      <Table columns={columns} dataSource={users}/>
      <Drawer title="Agregar usuario" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item label="Nombre"  name="Nombre">
              <Input/>
          </Form.Item>
          <Form.Item label="Apellido"  name="Apellido">
              <Input/>
          </Form.Item>
        </Form>
      </Drawer>

    </>
  );
}

export default TablaUsuarios;