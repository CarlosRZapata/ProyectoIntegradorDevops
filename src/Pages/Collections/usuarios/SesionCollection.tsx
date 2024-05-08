import { Space, Typography } from 'antd'
import React from 'react'
import UsersTable from '../../../tabla/tablaSesiones'

const SesionCollections:React.FC = () => {
  return (
    <Space size={'large'} align={'start'} direction={'vertical'}>
        <Typography.Title>Sesiones</Typography.Title>
        
            <UsersTable />
        
    </Space>
  )
}

export default SesionCollections