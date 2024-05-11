import { Space, Typography } from 'antd'
import React from 'react'
import UsersTable from '../../../tabla/tablaClientes'

const ClientesCollection:React.FC = () => {
  return (
    <Space size={'large'} align={'start'} direction={'vertical'}>
        <Typography.Title>Clientes</Typography.Title>
        
            <UsersTable />
        
    </Space>
  )
}

export default ClientesCollection