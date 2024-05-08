import { Space, Typography } from 'antd'
import React from 'react'
import UsersTable from '../../../tabla/tablaDireccion'

const DireccionCollection:React.FC = () => {
  return (
    <Space size={'large'} align={'start'} direction={'vertical'}>
        <Typography.Title>Direccion</Typography.Title>
        
            <UsersTable />
        
    </Space>
  )
}

export default DireccionCollection