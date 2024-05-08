import { Space, Typography } from 'antd'
import React from 'react'
import UsersTable from '../../../tabla/tablaGenero'

const GeneroCollection:React.FC = () => {
  return (
    <Space size={'large'} align={'start'} direction={'vertical'}>
        <Typography.Title>Genero</Typography.Title>
        
            <UsersTable />
        
    </Space>
  )
}

export default GeneroCollection