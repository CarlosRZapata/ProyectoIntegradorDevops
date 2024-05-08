import { Space, Typography } from 'antd'
import React from 'react'
import UsersTable from '../../../tabla/tablaCategorias'



const CategoriasCollections:React.FC = () => {
  return (
    <Space size={'large'} align={'start'} direction={'vertical'}>
        <Typography.Title>Categorias</Typography.Title>
        
            <UsersTable />
        
    </Space>
  )
}

export default CategoriasCollections