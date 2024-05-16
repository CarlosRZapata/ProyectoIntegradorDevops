import React, { useEffect, useState } from "react";
import { getUsuarios, createUsuarios } from "../services/user";
import { Form, Input, Table, Button, Drawer } from "antd";
import { User } from "../models/user";
import DrawerFooter from "./DrawerFooter";

const TablaUsuarios: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [nombre, setNombre] = useState<string>(''); 

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsuarios();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async () => {
    try {
      const nextId = users.reduce((maxId, user) => Math.max(maxId, user.id_usuario), 5) + 1;
      const nuevoUsuario: User = {
        id_usuario: nextId, 
        nombre,
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
      };
      await createUsuarios(nuevoUsuario);
      const updatedUsuarios = await getUsuarios();
      setUsers(updatedUsuarios);
      onClose(); 
    } catch (error) {
      console.error("Error creating usuario:", error);
    }
  };

  const columns = [
    {
      title: 'ID Usuario',
      dataIndex: 'id_usuario',
      key: 'id_usuario',
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Fecha Creación',
      dataIndex: 'fecha_creacion',
      key: 'fecha_creacion',
    },
    {
      title: 'Fecha Actualización',
      dataIndex: 'fecha_actualizacion',
      key: 'fecha_actualizacion',
    },
    {
      title: 'Actualizado por',
      dataIndex: 'actualizado_por',
      key: 'actualizado_por',
    },
    {
      title: 'Creado por',
      dataIndex: 'creado_por',
      key: 'creado_por',
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Añadir Usuario
      </Button>
      <Table columns={columns} dataSource={users} />
      <Drawer
        title="Agregar usuario"
        onClose={onClose}
        open={open}
        footer={<DrawerFooter />}
      >
        <Form onFinish={handleSubmit}>
          <Form.Item
            label="Nombre"
            name="Nombre"
            rules={[{ required: true, message: 'Por favor ingrese el nombre del usuario' }]}
          >
            <Input value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Crear Usuario
          </Button>
        </Form>
      </Drawer>
    </>
  );
}

export default TablaUsuarios;