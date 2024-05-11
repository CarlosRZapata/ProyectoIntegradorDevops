import React, { useEffect, useState } from "react";
import { getCliente } from "../services/clients";
import { Button, Drawer, Form, Input, Table, DatePicker, Space, InputNumber } from 'antd';
import { Client } from "../models/clients";
import DrawerFooter from "./DrawerFooter";
import type { DatePickerProps } from 'antd';

const TablaCliente: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log("Date selected:", date, dateString);
  };

  const onNumberChange = (value: number | null) => {
    console.log("Number input changed:", value);
  };

  const [cliente, setCliente] = useState<Client[]>([]);

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
      <Button type="primary" onClick={showDrawer}>
        Añadir
      </Button>
      <Table columns={columns} dataSource={cliente}/>
      <Drawer title="Agregar cliente" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item label="Nombre"  name="Nombre">
              <Input/>
          </Form.Item>
          <Form.Item label="Apellido"  name="Apellido">
              <Input/>
          </Form.Item>
          <Form.Item label="Fecha de nacimiento"  name="FechaNac">
          <Space direction="vertical">
              <DatePicker onChange={onDateChange} /> 
            </Space>
          </Form.Item>
          <Form.Item label="ID Genero" name="ID_Genero">
            <InputNumber min={0} max={999} defaultValue={0} onChange={onNumberChange} />
          </Form.Item>
          <Form.Item label="Telefono" name="Telefono">
            <InputNumber min={0} max={9999999999} defaultValue={0} onChange={onNumberChange} />
          </Form.Item>
          <Form.Item label="Correo"  name="Corrreo">
              <Input/>
          </Form.Item>
          <Form.Item label="ID Direccion" name="ID_Direccion">
            <InputNumber min={0} max={999} defaultValue={0} onChange={onNumberChange} />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default TablaCliente;