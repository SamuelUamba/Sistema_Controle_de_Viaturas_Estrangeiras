import React from 'react'
import UserTable from './UserTable';
import Typography from "@material-ui/core/Typography";


const ListUsers = () => {
    return (
        <div>
            <Typography color="primary" gutterBottom>
                <h4 style={{ marginTop: '30px' }}>Formulário de Registo de usuário</h4>
            </Typography>

            <UserTable />
        </div>
    )
}

export default ListUsers
