import React, { useEffect, useState } from "react";
import { getCliente, createClientes } from "../services/clients";
import { Table, Drawer, Button, Form, Input, DatePicker, DatePickerProps, InputNumber,InputNumberProps } from "antd";
import { Client } from "../models/clients";
import DrawerFooter from "./DrawerFooter";
import supabase from "../utils/supabase";

const TablaCliente: React.FC = () => {
  const [clients, setCliente] = useState<Client[]>([]);
  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [fechadenacimiento, setfechaNacimiento] = useState<Date>(new Date());
  const [fk_genero, setIDGenero] = useState<number>(0);
  const [fk_direccion, setIDDireccion] = useState<number>(0);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientes = await getCliente();
        setCliente(clientes);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchClients();
  }, []);

  const onChange: DatePickerProps['onChange'] = (date) => {
    const selectedDate = new Date(date.year(), date.month() + 1, date.date());
    setfechaNacimiento(selectedDate);
  };

  const handleSubmit = async () => {
    const randomID =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    try {
      const currentDateTime = new Date();
      // Consultar el ID máximo actual en la tabla direccion
      const maxIdResponse = await supabase
        .from("clientes")
        .select("id_cliente")
        .order("id_cliente", { ascending: false })
        .limit(1);

      const maxId = maxIdResponse.data?.[0]?.id_cliente || 0;
      const newId = maxId + 1;

      // Crear el objeto de dirección con el nuevo ID
      const clientesInput: Client = {
        id_cliente: newId,
        nombre,
        apellido,
        fechadenacimiento,
        fk_genero,
        telefono,
        correo,
        fk_direccion,
        fecha_creacion: currentDateTime, 
        fk_creadopor: randomID
      };

      // Insertar el nuevo registro en la base de datos
      await createClientes(clientesInput);

      // Actualizar la lista de direcciones después de la inserción
      const updatedCLientes = await getCliente();
      setCliente(updatedCLientes);
      onClose();
    } catch (error) {
      console.error("Error creating clientes:", error);
    }
  };

  const onChangeG: InputNumberProps['onChange'] = (value) => {
    if (value !== null && typeof value === 'number') {
      setIDGenero(value);
    } else {
      setIDGenero(0);
    }
  };

  const onChangeD: InputNumberProps['onChange'] = (value) => {
    if (value !== null && typeof value === 'number') {
      setIDDireccion(value);
    } else {
      setIDDireccion(0);
    }
  };
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
        dataIndex: 'fechanac',
        key: 'fechanac',
      },
    
      {
        title: 'ID_Genero',
        dataIndex: 'idgenero',
        key: 'idgenero',
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
        dataIndex: 'iddireccion',
        key: 'iddireccion',
      },
      {
        title: 'FechaCreacion',
        dataIndex: 'fechacreacion',
        key: 'fechacreacion',
      },
    
      {
        title: 'fk_CreadoPor',
        dataIndex: 'fk_creadopor',
        key: 'fk_creadopor',
      },
    
      {
        title: 'FechaActu',
        dataIndex: 'fechaactualizacion',
        key: 'fechaactualizacion',
      },
    
      {
        title: 'fk_ActualizadoPor',
        dataIndex: 'fk_actualizadopor',
        key: 'fk_actualizadopor',
      },
      {
      title: 'FechaEliminado',
      dataIndex: 'fechaeliminacion',
      key: 'fechaeliminacion',
    },
    {
      title: 'fk_EliminadoPor',
      dataIndex: 'fk_eliminadopor',
      key: 'fk_eliminadopor',
    }
  ];

  return (
    <>
    <Button type="primary" onClick={showDrawer}>
        Agregar cliente
      </Button>
      <Table columns={columns} dataSource={clients}
      />
   <Drawer title="Agregar Cliente" onClose={onClose} open={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
   <Form onFinish={handleSubmit}>
          <Form.Item<Client>
            label="Nombre"
            name="nombre"
            rules={[{ required: true, message: "Agrega el nombre" }]}
          >
          <Input value={nombre} onChange={(e) => setNombre(e.target.value)} />          
          </Form.Item>

          <Form.Item<Client>
            label="Apellido"
            name="apellido"
            rules={[{ required: true, message: "Agrega el apellido" }]}
          >
          <Input value={apellido} onChange={(e) => setApellido(e.target.value)} />          
          </Form.Item>

          <Form.Item
            label="Fecha_Nacimiento"
            name="fechanac"
            rules={[{ required: true, message: "Agrega fecha de nacimiento" }]}
          >
          <DatePicker onChange={onChange} />          </Form.Item>
          
          <Form.Item
            label="ID_Genero"
            name="idgenero"
            rules={[{ required: true, message: "Agrega ID de Genero" }]}
          >
          <InputNumber defaultValue={fk_genero} onChange={onChangeG} />          </Form.Item>

          <Form.Item<Client>
            label="Telefono"
            name="telefono"
            rules={[{ required: true, message: "Agrega número de telefono" }]}
          >
          <Input value={telefono} onChange={(e) => setTelefono(e.target.value)} />          
          </Form.Item>

          <Form.Item<Client>
            label="Correo"
            name="correo"
            rules={[{ required: true, message: "Agrega correo electrónico" }]}
          >
          <Input value={correo} onChange={(e) => setCorreo(e.target.value)} />          
          </Form.Item>

          <Form.Item
            label="ID_Direccion"
            name="iddireccion"
            rules={[{ required: true, message: "Agrega ID de la dirección" }]}
          >
          <InputNumber defaultValue={fk_direccion} onChange={onChangeD} />          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default TablaCliente;