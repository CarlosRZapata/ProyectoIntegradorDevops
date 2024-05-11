import React, { useEffect, useState } from "react";
import { getSesiones } from "../services/sessions";
import { Button, Drawer, Form, DatePicker, Space, Table, InputNumber } from 'antd';
import { Session } from "../models/sessions";
import DrawerFooter from "./DrawerFooter";
import type { DatePickerProps } from 'antd';

const TablaSesiones: React.FC = () => {
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

  const [session, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSesiones();
        setSessions(session);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchSession();
  }, []);

  const columns = [
    {
        title: 'ID_Sesion',
        dataIndex: 'id_sesion',
        key: 'id_sesion',
        
      },
      {
        title: 'Fecha_Sesion',
        dataIndex: 'fecha_sesion',
        key: 'fecha_sesion',
      },
  
      {
        title: 'Hora_Sesion',
        dataIndex: 'hora_sesion',
        key: 'hora_sesion',
      },
  
      {
        title: 'ID_Cliente',
        dataIndex: 'fk_cliente',
        key: 'fk_cliente',
      },
  
      {
        title: 'Fecha_Venta',
        dataIndex: 'fecha_venta',
        key: 'fecha_venta',
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
        title: 'Fecha_Eliminacion',
        dataIndex: 'fecha_eliminacion',
        key: 'fecha_eliminacion',
      },
  ];

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Añadir
      </Button>
      <Table columns={columns} dataSource={session}/>
      <Drawer title="Agregar fecha_sesion" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
        <Form.Item label="Fecha de sesion"  name="FechaSesion">
            <Space direction="vertical">
              <DatePicker onChange={onDateChange} />
            </Space>
        </Form.Item>
        <Form.Item label="ID Producto" name="ID_Producto">
            <InputNumber min={0} max={99999} defaultValue={0} onChange={onNumberChange} />
          </Form.Item>
        </Form>
      </Drawer>

    </>
  );
}

export default TablaSesiones;