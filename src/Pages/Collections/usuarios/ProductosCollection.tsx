import { Space, Typography } from 'antd'
import React from 'react'
import UsersTable from '../../../tabla/tablaProductos'



const ProductosCollection:React.FC = () => {
  return (
    <Space size={'large'} align={'start'} direction={'vertical'}>
        <Typography.Title>Productos</Typography.Title>
        
            <UsersTable />
        
    </Space>
  )
}

export default ProductosCollection