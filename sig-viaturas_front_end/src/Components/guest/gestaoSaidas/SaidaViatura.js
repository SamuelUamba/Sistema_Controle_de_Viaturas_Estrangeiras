import React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import UpdateIcon from '@material-ui/icons/Update';
import FilterListIcon from "@material-ui/icons/FilterList";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { Form, Row, Col, Card, Collapse } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import { useState, useEffect, useRef } from 'react';
import useFetch from '../../useFetch';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from 'react-bootstrap/Spinner';
import MaterialTable from 'material-table';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import DoneIcon from '@material-ui/icons/Done';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },

}));


const SaidaViatura = () => {

    const classes = useStyles();
    const [selecioado, setSelecioado] = useState(false);
    const [selecioado_id, setSelecioado_id] = useState("");
    const { dbData: viaturas, error: error1, loading: loading1 } = useFetch('http://127.0.0.1:8000/api/getviatura');
    const [filter, setFilter] = useState(false);


    const columns = [
        { field: 'controleEntrada_id', title: ' Nº DE ENTRADA ', width: 100 },

        { field: 'nrMatricula', title: 'Matrícula', width: 150, editable: true },

        { field: 'marca', title: 'Marca', width: 180, editable: true },

        { field: 'modelo', title: 'Modelo', width: 200, editable: true },


        {
            field: 'action',
            title: 'Actions',
            render: (rowItem) =>

                <div> {
                    rowItem?.id &&
                    <Button
                        variant="outlined"
                        color="primary"
                        size="sm"
                        startIcon={
                            <DoneIcon />
                        }
                        onClick={
                            (e) => {
                                setSelecioado_id(rowItem?.controleEntrada_id)
                                handleSubmit()
                            }

                        }

                    >
                        Retirada
                    </Button>

                }

                </div>

        }
    ];

    // Dados de enetrada
    const [contoleList, lista] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8000/api/getcontrole/${selecioado_id}`, {
            method: 'Get',
            headers: {
                "Content-type": "application/json",
            }
        }).then(resp => resp.json())
            .then(resp => lista(resp))
    }, [selecioado_id]);



    const handleSubmit = () => {


        // Controle de Entrada
        const entrada = {
            dataEntrada: contoleList.dataEntrada,
            dataSaidaPrevista: contoleList.dataSaidaPrevista,
            dataProrogacao: contoleList.dataProrogacao,
            dataFimProrogacao: contoleList.dataFimProrogacao,
            status: "Retirado",
            controleEntrada_id: selecioado_id,
            id: contoleList.id
        };

        fetch(`http://127.0.0.1:8000/api/editcontroleentrada/${selecioado_id}`, {
            method: 'PUT',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(entrada)
        }).then(() => {
            console.log('Dados Actualizados!')

        })

    }


    return (
        <div>

            <div className='div-flexEnd-style'>

                <div className="filter-style">
                    <Button
                        name="Basic button"
                        value="default"
                        size="medium"
                        onClick={() => {

                            setFilter(!filter)
                        }}
                        aria-expanded={filter}
                        aria-controls="collapse-filter"
                        title="Filtrar"
                    >

                        {/* <VisibilityIcon color="primary" style={{ fontSize: 30 }} /> */}
                        {filter ? (
                            <VisibilityOffIcon color="primary" style={{ fontSize: 30 }} />

                        ) : (
                            <VisibilityIcon color="primary" style={{ fontSize: 30 }} />
                        )}
                    </Button>
                </div>
            </div>
            <Collapse in={filter}>
                <div id="example-collapse-text">
                    <div>

                        {
                            viaturas &&
                            <MaterialTable
                                title="Lista de Viatúras"
                                data={viaturas}
                                columns={columns}
                            />
                        }
                        {loading1 &&
                            <div style={{ paddingTop: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Spinner animation="border" variant="primary" />
                            </div>
                        }

                    </div>
                </div>
            </Collapse>

            <Form onSubmit={handleSubmit}>
                <Card>
                    <Card.Header>
                        Dados do veículo
                    </Card.Header>
                    <Card.Body>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="descricao">
                                <Form.Label>Matricula da viatura</Form.Label>
                                <input className="form-control"
                                    type="text"

                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="modelo">
                                <Form.Label>Marca</Form.Label>
                                <input className="form-control" type="text"

                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="marca">
                                <Form.Label>Nome do proprietário</Form.Label>
                                <input className="form-control"

                                    type="text"

                                />
                            </Form.Group>


                            <Form.Group as={Col} controlId="data_entrada">
                                <Form.Label>Data de Saída</Form.Label>
                                <input type="date"
                                    className="form-control"

                                />
                            </Form.Group>

                        </Row>

                    </Card.Body>
                    <div className='div-flexEnd-style'>

                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={
                                <DoneIcon />
                            }
                        >
                            Retirada
                        </Button>
                    </div>
                </Card>

            </ Form>
        </div>
    )
}

export default SaidaViatura
