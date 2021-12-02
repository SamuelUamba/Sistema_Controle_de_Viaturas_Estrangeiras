import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import GetAppIcon from '@material-ui/icons/GetApp';
import PrintIcon from '@material-ui/icons/Print';
import { Form, Row, Col, Table,Button } from 'react-bootstrap';


const listVeicle = () => {
    return (
        <div>
            <h3>Lista de viaturas que deram entrada/List of vehicles that have been checked in</h3>
            <Form>
                <Row className="col-md-3 offset-md-8">
                    <Form.Group as={Col} controlId="data_entrada">
                        <input type="text" className="form-control" placeholder="Pesquisar..." />
                    </Form.Group>
                </Row>
            </Form>
            <Form className="col-md-10 offset-md-1" >

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Matrícula/Registration</th>
                            <th>Proprietário/Owner</th>
                            <th>Data de entrada/Entry date</th>
                            <th>Região/Region</th>
                            <th>Tempo de permanência/Lenght of stay</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>

                    </tbody>
                </Table>
            </Form>
            <Form>
                <Row className="col-md-3 offset-md-8">
                    <Form.Group as={Col} controlId="accoes">
                        <Button variant="primary"><GetAppIcon/></Button>{' '}
                        <Button variant="secondary"><PrintIcon/></Button>{' '}
                    </Form.Group>
                </Row>
            </Form>
        </div>


    )
}

export default listVeicle
