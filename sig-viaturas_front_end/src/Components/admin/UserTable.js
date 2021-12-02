import React from 'react';
import MaterialTable from 'material-table';
import { Avatar, Grid } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Button } from '@material-ui/core';

const UserTable = () => {

    const { dbData: usuarios, error } = useFetch('http://localhost:8000/getusuario');

    const editFunction = () => {

        console.log('edit function chamada')

    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
    </Button>


    const columns = [
          
        {
            title: 'Nome', field: 'cardTitle',
            render: (row) =>
                <Grid container alignItems="center">
                    <Grid item sm={2} ><Avatar style={{ backgroundColor: 'green', fontSize: 'small', size: 'xm' }}>{row.cardTitle[0]}</Avatar></Grid>
                    <Grid item sm={6} >{row.cardTitle}</Grid>
                </Grid>
        },
        { title: 'Text', field: 'cardText' },
        { title: 'Localizacao', field: 'localizacao' },
        { title: 'Horario de funcionamento', field: 'horarioFuncionamento' },
        { title: 'Image src', field: 'src' },
        { title: 'Details', field: 'details' }

    ]

    return (
        <div style={{ marginTop: '80px' }}>

            {
                usuarios &&
                <MaterialTable
                    title="Usuarios"
                    data={usuarios}
                    columns={columns}
                    options={{ exportButton: true }}
                    editable={{
                        onRowAdd: () => {},
                        onRowDelete: () => {},
                        onRowUpdate: () => {}
                    }}

                />
            }



            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>


        </div>

    )
}

export default UserTable