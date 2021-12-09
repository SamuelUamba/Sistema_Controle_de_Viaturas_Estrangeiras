import React, { Component } from 'react'
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import UpdateIcon from '@material-ui/icons/Update';

import { Link } from 'react-router-dom'
import { Form, Row, Col, Card, Button } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import { useState, useEffect, useRef } from 'react';
import VehicleTable from './VehicleTable';
import useFetch from '../useFetch';

import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from 'react-bootstrap/Spinner';
import MaterialTable from 'material-table';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },

}));

const Prorogacao = () => {



    //Entrada
    const [dataEntrada, setDataEntrada] = useState("");
    const [dataSaidaPrevista, setDataSaidaPrevista] = useState("");
    const [dataProrogacao, setDataProrogacao] = useState("");
    const [dataFimProrogacao, setDataFimProrogacao] = useState("");
    const [status, setStatus] = useState("Não Prorogado");




    //Proprietario
    const [nomeproprietario, SetNomeprop] = useState("");
    const [tempoPermanencia, setTempoPermanencia] = useState("");
    const [objectivo, setObjectivo] = useState("Turismo");
    const [email, setEmail] = useState("");
    const [contacto, setContacto] = useState("");

    const [nrCarta, setNrCarta] = useState();
    const [local_emissao_carta_id, setlocal_emissao_carta_id] = useState("");
    const [nacionalidade_proprietario_id, setnacionalidade_proprietario_id] = useState("");
    const [regiao_id, setRegiao_id] = useState(20);
    const [viatura_id, setviatura_id] = useState("");

    const [counter, setCounter] = useState(1)

    const [selecioado, setSelecioado] = useState(false);
    const [selecioado_id, setSelecioado_id] = useState("");

    // Dados de enetrada
    const [viaturas, lista] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8000/api/getcontrole/${selecioado_id}`, {
            method: 'Get',
            headers: {
                "Content-type": "application/json",
            }
        }).then(resp => resp.json())
            .then(resp => lista(resp))
    }, [selecioado_id])
    

    // Dados de Proprietario
    const [dadosproprietario, setDadosproprietario] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8000/api/getproprietariovviatura/${selecioado_id}`, {
            method: 'Get',
            headers: {
                "Content-type": "application/json",
            }
        }).then(resp => resp.json())
            .then(resp => setDadosproprietario(resp))
    }, [selecioado_id])
    console.log('Dados', setDadosproprietario)

    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Controle de Entrada
        const entrada = {
            dataEntrada: lista.dataEntrada,
            dataSaidaPrevista:lista.dataSaidaPrevista,
            dataProrogacao,
            dataFimProrogacao,
            status,
            controleEntrada_id: selecioado_id,
            id:lista.id
        };
        fetch(`http://127.0.0.1:8000/api/editcontroleentrada/${selecioado_id}`, {
            method: 'PUT',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(entrada)
        }).then(() => {
            console.log('Dados Actualizados!')

        })

        // Proprietario
        const Proprietario = {
            nome: nomeproprietario,
            tempoPermanencia,
            objectivo: objectivo,
            email: email,
            contacto: contacto,
            nrCarta,
            viatura_id,
            local_emissao_carta_id,
            nacionalidade_proprietario_id,
            regiao_id: regiao_id
        };
        fetch('http://127.0.0.1:8000/api/saveproprietario2', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(Proprietario)
        }).then(() => {
            console.log('Proprietario adicionado!')

        })

        console.log('data', dataSaidaPrevista - dataEntrada)

    }


    const classes = useStyles();

    const { dbData: usersList, error: error1, loading: loading1 } = useFetch('http://127.0.0.1:8000/api/getviatura');


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



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
                        size="small"
                        className={classes.button}
                        startIcon={<VisibilityIcon />}
                        onClick={(e) => setSelecioado_id(rowItem?.controleEntrada_id)}
                    >
                        Selecionar
                    </Button>

                }

                </div>

        }
    ];
    if (error1) {
        return <span>ERROR: {error1.message}</span>
    }
    if (loading1) {
        return (
            <div style={{ paddingTop: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }



    return (
        <div>

            <div >
                <Form onSubmit={handleSubmit}>
                    <Card>
                        <Card.Body>
                            <div>

                                {
                                    usersList &&
                                    <MaterialTable
                                        title="Lista de Viatúras"
                                        data={usersList}
                                        columns={columns}
                                    />
                                }

                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                           
                   
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="data">
                                    <Form.Label>Data de Prorogação</Form.Label>
                                    <input type="date"
                                        className="form-control"
                                        required
                                        value={dataProrogacao}
                                        onChange={(e) => setDataProrogacao(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="data">
                                    <Form.Label>Data Prevista para Saida</Form.Label>
                                    <input type="date"
                                        className="form-control"
                                        required
                                        value={dataFimProrogacao}
                                        onChange={(e) => setDataFimProrogacao(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="Status">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select
                                        required
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option >--Selecione--</option>
                                        <option >Prorogado</option>
                                        <option >Não Prorogado</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <button className="btn btn-secondary " ><UpdateIcon /> Prorogar</button>{'  '}
                </Form>


            </div>
        </div >
    )
}

export default Prorogacao
