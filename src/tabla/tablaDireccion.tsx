import React, { useEffect, useState } from "react";
import { getDireccion, createDireccion} from "../services/direction";
import { Button, Drawer, Form, Input, Table, InputNumber } from "antd";
import { Direction } from "../models/direction";
import DrawerFooter from "./DrawerFooter";
import type { InputNumberProps } from 'antd';
import supabase from "../utils/supabase";


const TablaDireccion: React.FC = () => {
  const [direction, setDirection] = useState<Direction[]>([]);
  const [open, setOpen] = useState(false);
  const [codigo_postal, setCP] = useState<string>('');
  const [calle, setCalle] = useState<string>('');
  const [numero_exterior, setNumEXT] = useState<string>('');
  const [numero_interior, setNumINT] = useState<string>('');
  const [ciudad, setCiudad] = useState<string>('');
  const onChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchDirection = async () => {
      try {
        const direction = await getDireccion();
        setDirection(direction);
      } catch (error) {
        console.error("Error fetching directions:", error);
      }
    };

    fetchDirection();
  }, []);

  const onChangeCodigoPostal = (value: string | null | undefined) => {
    if (value !== null && value !== undefined) {
      setCP(value);
    } else {
      setCP('');
    }
  };

  const handleSubmit = async () => {
    const randomID =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    try {
      const currentDateTime = new Date();
      const maxIdResponse = await supabase
        .from("direccion")
        .select("id_direccion")
        .order("id_direccion", { ascending: false })
        .limit(1);

      const maxId = maxIdResponse.data?.[0]?.id_direccion || 0;
      const newId = maxId + 1;

      const direccionInput: Direction = {
        id_direccion: newId,
        codigo_postal,
        calle,
        numero_exterior,
        numero_interior,
        ciudad,
        fechacreacion: currentDateTime, 
        fk_creadopor: randomID
      };

      await createDireccion(direccionInput);
      const updatedDireccion = await getDireccion();
      setDirection(updatedDireccion);
      onClose();
    } catch (error) {
      console.error("Error creating direccion:", error);
    }
  };

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