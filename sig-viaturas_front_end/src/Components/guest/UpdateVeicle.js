import React from 'react'
import { Form, Row, Col, Card } from 'react-bootstrap';
import { Grid } from '@material-ui/core';


const AddVeicle = () => {
    return (
        <div>
            <h2>Update</h2>
            <h2>Formulário de entrada de veículos/Vehicle entry form </h2>
            <div >
                <Form>
                    <Card>
                        <Card.Header>Região de Entrada/Entry region</Card.Header>
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
                                    <Form.Label>Estância/Instance</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Sul</option>
                                        <option>Centro</option>
                                        <option>Norte</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="data_entrada">
                                    <Form.Label>Data de Entrada/Entery date</Form.Label>
                                    <input type="date" className="form-control"  />
                                </Form.Group>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card>
                        <Card.Header>Detalhes do proprietário/Pessoa Autorizada(Datails of owner/autorised Person)</Card.Header>
                        <Card.Body>
                             <Row className="mb-3">
                                <Form.Group as={Col} controlId="Nome">
                                    <Form.Label>Nome/Name</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="endereco">
                                    <Form.Label>Endereço em Moçamique/Adress in Mozambique</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="Carta">
                                    <Form.Label>Nº da carta/driving license number</Form.Label>
                                    <input className="form-control" type="number" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="local_Emissao">
                                    <Form.Label>local de Emissão/place of issue</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Nacionalidade/Nationality</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>
                            </Row>
                            <Row className="  mb-3" >

                                <Form.Group as={Col} controlId="duracao">
                                    <Form.Label>Duração da visita(Meses)/duration of visit(months)</Form.Label>
                                    <input className="form-control" type="number" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="Email">
                                    <Form.Label>Endereço Eletrónico/E-mail</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="cell">
                                    <Form.Label>Contacto Telefonico/Telephone contact</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3 " >
                                <Form.Group as={Col} controlId="objectivo" >
                                    <Form.Label>Objectivo da visita/Purpose of visit</Form.Label>

                                    <Grid container style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>

                                        {["Turismo/Tourism", "Negocio/Business", "Transporte Internacional  de passageiros ou carga/International Transport of passengers or goods",
                                            "Ambulancia ou carro Funerário /Ambulance or Funerary vehicle", "Viatura para projecto de Estado/ vehicle for use in state works projects",
                                            "Contrato de trabalho/Employment on contract", "outros fins"].map((item) => (
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
                        <Card.Header>Caracteristicas da viatura/Datails of Vehicle</Card.Header>
                        <Card.Body>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="marca">
                                    <Form.Label>Marca/Make</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Lista</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="modelo">
                                    <Form.Label>Modelo/Model</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Lista</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="tipo">
                                    <Form.Label>Tipo/Type</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>lista</option>
                                        
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="Motor">
                                    <Form.Label>Nº do Motor/Engine Nº</Form.Label>
                                    <input className="form-control" type="number" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="quadro">
                                    <Form.Label>Nº do quadro/ Chassi Nº </Form.Label>
                                    <input className="form-control" type="number" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="valor">
                                    <Form.Label>Valor em Mt/ Value in Mt</Form.Label>
                                    <input className="form-control" type="number" />
                                </Form.Group>

                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="cor">
                                    <Form.Label>Cor/Color</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="lugares">
                                    <Form.Label>Nº do Lugares/Seating</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="matricula">
                                    <Form.Label>Nº de Matricula/Registration Nº</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                            </Row>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card>
                        <Card.Header>Equipamento auxiliar,por exemplo reboque
                            ,barco/Auxiliary equipament(ex. trailer, boat,..)</Card.Header>
                        <Card.Body>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="descricao">
                                    <Form.Label>Decrição/Description</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="marca">
                                    <Form.Label>Marca e Numero/ Make and Nº</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="modelo">
                                    <Form.Label>Modelo/Model</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="id">
                                    <Form.Label>Nº de id/id Nº </Form.Label>
                                    <input className="form-control" type="number" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="valor">
                                    <Form.Label>Valor em Mt/Value in Mt</Form.Label>
                                    <input className="form-control" type="text" />
                                </Form.Group>

                            </Row>

                        </Card.Body>
                    </Card>
                    <button className="btn btn-primary ">Salvar</button>
                </Form>
            </div>
        </div>
    )
}

export default AddVeicle
