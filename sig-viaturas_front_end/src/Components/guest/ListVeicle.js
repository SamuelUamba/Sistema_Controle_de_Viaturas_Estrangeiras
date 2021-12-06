import React from 'react'
import GetAppIcon from '@material-ui/icons/GetApp';
import PrintIcon from '@material-ui/icons/Print';
import UpdateIcon from '@material-ui/icons/Update';
import { Form, Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const ListVeicle = () => {
    // Dados das viaturas
    const [viaturas, lista] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/getviatura', {
            method: 'Get',
            headers: {
                "Content-type": "application/json",
            }
        }).then(resp => resp.json())
            .then(resp => lista(resp))
    }, [])

    
    return (
        <div>
            <h3>Lista de viaturas que deram entrada/List of vehicles that have been checked in</h3>
            
            <Form className="col-md-10 offset-md-1" >

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID de Entrada/Etery</th>
                            <th>Matrícula/Registration</th>
                            <th>Tipo/type</th>
                            <th>Modelo/Model</th>
                            <th>Data de entrada/Entry date</th>
                            <th>Acrualizar/Update</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            viaturas.map((item) =>
                                <tr>
                                    <td>{item.controleEntrada_id}</td>
                                    <td>{item.nrMatricula}</td>
                                    <td>{item.tipo}</td>
                                    <td>{item.modelo}</td>
                                    <td>{item.created_at}</td>

                                    <td>
                                      
                                        <Link to={"update/" + item.controleEntrada_id}>
                                            <span className="update"><UpdateIcon /></span>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Form>
            <Form>
                <Row className="col-md-3 offset-md-8">
                    <Form.Group as={Col} controlId="accoes">
                        <Button variant="primary"><GetAppIcon /></Button>{' '}
                        <Button variant="secondary"><PrintIcon /></Button>{' '}
                    </Form.Group>
                </Row>
            </Form>
        </div>


    )
}

export default ListVeicle
