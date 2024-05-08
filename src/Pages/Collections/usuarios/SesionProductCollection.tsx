import { Space, Typography } from 'antd'
import React from 'react'
import UsersTable from '../../../tabla/tablaSesionesProductos'



const SesionProductCollections:React.FC = () => {
  return (
    <Space size={'large'} align={'start'} direction={'vertical'}>
        <Typography.Title>Sesiones Productos</Typography.Title>
        
            <UsersTable />
        
    </Space>
  )
}

export default SesionProductCollections