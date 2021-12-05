
import React from 'react';
import MaterialTable from 'material-table';
import useFetch from '../useFetch';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from 'react-bootstrap/Spinner';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


const UserTable = () => {

    const classes = useStyles();

    const { dbData: usersList, error, loading } = useFetch('http://127.0.0.1:8000/api/getusuario');


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const columns = [
        { field: 'id', title: 'ID', width: 100 },

        { field: 'nome', title: 'Nome', width: 150, editable: true },

        { field: 'apelido', title: 'Apelido', width: 180, editable: true },

        { field: 'dataNascimento', title: 'Data de nascimento', width: 200, editable: true },

        { field: 'email', title: 'Email', width: 200, editable: true },

        { field: 'contacto', title: 'Contacto', width: 200, editable: true },

        {
            field: 'action',
            title: 'Actions',
            render: (rowItem) =>

                <div> {
                    rowItem?.id &&
                    <Link to={"/admin/details/" + rowItem?.id} style={{ textDecoration: 'none' }}>
                        <Button
                            variant="outlined"
                            size="small"
                            className={classes.button}
                            startIcon={<VisibilityIcon />}
                        >
                            Detalhes
                        </Button>
                    </Link>
                }

                </div>

        }
    ];

    if (error) {
        return <span>ERROR: {error.message}</span>
    }
    if (loading) {
        return (
            <div style={{ paddingTop: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    return (
        <div>

            {
                usersList &&
                <MaterialTable
                    title="Lista de usuários"
                    data={usersList}
                    columns={columns}
                    options={{ exportButton: true }}

                />
            }

        </div>

    )
}

export default UserTable
