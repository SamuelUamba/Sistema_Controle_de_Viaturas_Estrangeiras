import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import useFetch from '../../Components/useFetch';
import { Avatar, Grid } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Spinner from 'react-bootstrap/Spinner';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));





const UserList2 = () => {

    const classes = useStyles();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { dbData: usuarios, error, loading } = useFetch('http://127.0.0.1:8000/api/getusuario');


    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },

        { field: 'nome', headerName: 'Nome', width: 150, editable: true },

        { field: 'apelido', headerName: 'Apelido', width: 180, editable: true },

        { field: 'dataNascimento', headerName: 'Data de nascimento', width: 200, editable: true },

        { field: 'email', headerName: 'Email', width: 200, editable: true },

        { field: 'contacto', headerName: 'Contacto', width: 200, editable: true },

        // { field: 'tipo', headerName: 'Tipo de usuário', width: 200, editable: true },


        {
            field: 'action',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => {
                return (
                    <div>
                        <Link to={"/admin/details/" + params.row.id} style={{ textDecoration: 'none' }}>
                            <Button
                                variant="outlined"
                                size="small"
                                className={classes.button}
                                startIcon={<VisibilityIcon />}
                            >
                                Detalhes
                            </Button>
                        </Link>
                    </div>

                )
            }
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
        <div style={{ height: 400, width: '100%' }}>

            {
                usuarios &&
                <DataGrid
                    rows={usuarios}
                    columns={columns}
                    pageSize={5}
                    options={{
                        search: true,
                        exportButton: true
                    }}
                    filterModel={{
                        items: [{ columnField: 'commodity', operatorValue: 'contains', value: 'rice' }],
                    }}

                />
            }

        </div>
    );
}

export default UserList2








