import { Form, Row, Col, Card, Button,InputGroup, Container, FormControl, Label } from 'react-bootstrap';

function Add_vehicle() {
    return (
        <Container className="Container">
            <div className=" col-sm-10 offset-sm-1">
                <h2>Formulário de entrada de veículos/Vehicle entry form </h2>
                <>
                    <Button variant="outline-secondary" >Entry region</Button>{' '}
                    <Button variant="outline-secondary" >Datails of owner-autorised person</Button>{' '}
                    <Button variant="outline-secondary" >Datails of Vehicle </Button>{' '}
                    <Button variant="outline-secondary" >Auxiliary equipament(ex. trailer, boat,..)</Button>{' '}

                </>
            </div>
            <div className="col-sm-10 offset-sm-1">
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
                            <Row className="mb-3 " >

                                <Form.Group as={Col} controlId="duracao">
                                    <Form.Label>Duração da visita(Meses)</Form.Label>
                                    <input className="form-control" type="number" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="objectivo" >
                                    <Form.Label>Objectivo da visita</Form.Label>
                                   
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                               
                                                label="Turismo"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                
                                                label="Negocio"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                             <Form.Check
                                               
                                                label="Ambulancia"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                             <Form.Check
                                                inline
                                                label="Transporte Internacional"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                               <Form.Check
                                                inline
                                                label="Viatura para projecto de Estado"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                               <Form.Check
                                                inline
                                                label="Contrato de trabalho"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            </div>
                                        ))}
                                   
                                </Form.Group>
                            </Row>
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

        </Container>


    )

}
export default Add_vehicle