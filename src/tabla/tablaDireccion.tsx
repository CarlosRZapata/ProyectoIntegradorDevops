import React, { useEffect, useState } from "react";
import { getDireccion } from "../services/direction";
import { Button, Drawer, Form, Input, Table, InputNumber } from "antd";
import { Direction } from "../models/direction";
import DrawerFooter from "./DrawerFooter";
import type { InputNumberProps } from 'antd';

const TablaDireccion: React.FC = () => {
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

  const [direction, setDirection] = useState<Direction[]>([]);

  useEffect(() => {
    const fetchDirection = async () => {
      try {
        const direction = await getDireccion();
        setDirection(direction);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchDirection();
  }, []);

  const columns = [
    {
        title: 'ID_Direccion',
        dataIndex: 'id_direccion',
        key: 'id_direccion',
        
      },

      {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
      },

      {
        title: 'Codigo_Postal',
        dataIndex: 'codigo_postal',
        key: 'codigo_postal',
      },
  
      {
        title: 'Calle',
        dataIndex: 'calle',
        key: 'calle',
      },
  
      {
        title: 'Colonia',
        dataIndex: 'colonia',
        key: 'colonia',
      },

      {
        title: 'Numero_Exterior',
        dataIndex: 'numero_exterior',
        key: 'numero_exterior',
      },
  
      {
        title: 'Numero_Interior',
        dataIndex: 'numero_interior',
        key: 'numero_interior',
      },
  
      {
        title: 'Ciudad',
        dataIndex: 'ciudad',
        key: 'ciudad',
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
      <Table
        columns={columns}
        dataSource={direction}
      />
      <Drawer title="Agregar direccion" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item label="Nombre"  name="Nombre">
              <Input/>
          </Form.Item>
          <Form.Item label="Código Postal" name="CodigoPostal">
            <InputNumber min={0} max={99999} defaultValue={0} onChange={onChange} />
          </Form.Item>
          <Form.Item label="Calle"  name="Calle">
              <Input/>
          </Form.Item>
          <Form.Item label="Colonia"  name="Colonia">
              <Input/>
          </Form.Item>
          <Form.Item label="Numero exterior" name="Num_ext">
            <InputNumber min={0} max={999} defaultValue={0} onChange={onChange} />
          </Form.Item>
          <Form.Item label="Numero interior" name="Num_int">
            <InputNumber min={0} max={999} defaultValue={0} onChange={onChange} />
          </Form.Item>
          <Form.Item label="Ciudad"  name="Ciudad">
              <Input/>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default TablaDireccion;