import React from 'react'
import { Form, Row, Col, Card, Button, InputGroup, Container, FormControl, Label } from 'react-bootstrap';
import { Grid } from '@material-ui/core';


const AddVeicle = () => {
    return (
        <div>
            <h2>Formulário de entrada de veículos/Vehicle entry form </h2>
            <div >
                <Form>
                    <Card>
                        <Card.Header>Entry region</Card.Header>
                        <Card.Body>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="regiao">
                                    <Form.Label>Região/Region</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Sul</option>
                                        <option>Centro</option>
                                        <option>Norte</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="estancia">
                                    <Form.Label>Estância</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Sul</option>
                                        <option>Centro</option>
                                        <option>Norte</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="data_entrada">
                                    <Form.Label>Data de Entrada</Form.Label>
                                    <input id="date" className="form-control" type="date" />
                                </Form.Group>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card>
                        <Card.Header>Datails of owner-autorised Person</Card.Header>
                        <Card.Body>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="Carta">
                                    <Form.Label>Numero da carta</Form.Label>
                                    <input className="form-control" type="number" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="local_Emissao">
                                    <Form.Label>local de Emissao</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Nacionalidade</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 " >

                                <Form.Group as={Col} controlId="duracao">
                                    <Form.Label>Duração da visita(Meses)</Form.Label>
                                    <input className="form-control" type="number" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3 " >


                                <Form.Group as={Col} controlId="objectivo" >
                                    <Form.Label>Objectivo da visita</Form.Label>

                                    <Grid container style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>

                                        {["Turismo", "Negocio", "Transporte Internacional",
                                            "Ambulancia", "Viatura para projecto de Estado",
                                            "Contrato de trabalho", "outros fins"].map((item) => (
                                                <Grid item lg={4} xs={4} md={4} >
                                                    <Form.Check
                                                        label={item}
                                                        name="group1"
                                                        type='radio'
                                                    />
                                                </Grid>
                                            ))}

                                    </Grid>



                                </Form.Group>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card>
                        <Card.Header>Datails of Vehicle</Card.Header>
                        <Card.Body>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="regiao">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Sul</option>
                                        <option>Centro</option>
                                        <option>Norte</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="estancia">
                                    <Form.Label>Modelo</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Sul</option>
                                        <option>Centro</option>
                                        <option>Norte</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="regiao">
                                    <Form.Label>Tipo</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Sul</option>
                                        <option>Centro</option>
                                        <option>Norte</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Nº do Motor</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Nº do quadro</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Valor em Mt</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Cor</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Nº do Lugares</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Nº de Matricula</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                            </Row>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card>
                        <Card.Header>Auxiliary equipament(ex. trailer, boat,..)</Card.Header>
                        <Card.Body>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Decricao</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Marca</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Modelo</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Nº de id</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Valor em Mt</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                            </Row>

                        </Card.Body>
                    </Card>
                </Form>
            </div>
        </div>
    )
}

export default AddVeicle
