import React, { useState } from 'react'
import { Button, InputLabel, MenuItem, Select, TextField }
    from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import Spinner from 'react-bootstrap/Spinner';
import { Form, Card, InputGroup, Container, FormControl, Label } from 'react-bootstrap';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const DetalhesUser = (props) => {

    const { id } = useParams();

    const classes = useStyles();
    const [readOnlyState, setreadOnlyState] = useState(true);
    const [readOnlyProperty, setReadOnlyPropety] = useState(false);
    const [showSave, setShowSave] = useState(false);
    const [loadingStatus, setLoadingStatus] = useState(true);

    const [nome, setNome] = useState(props.detalhes?.nome);
    const [apelido, setapelido] = useState(props.detalhes?.apelido);
    const [dataNascimento, setdataNascimento] = useState(props.detalhes?.dataNascimento);
    const [email, setemail] = useState(props.detalhes?.email);
    const [contacto, setcontacto] = useState(props.detalhes?.contacto);
    const [tipoUser, setTipoUser] = useState(props.detalhes?.tipo);
    const [senhaUser, setsenhaUser] = useState(props.detalhes?.password);
    const [open, setOpen] = useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };



    const validateForm = (e) => {

        e.preventDefault();
        setLoadingStatus(false);

        const user = {
            nome: nome,
            apelido: apelido,
            dataNascimento: dataNascimento,
            contacto: contacto,
            email: email,
            password: senhaUser,
            tipo: tipoUser
        }

        fetch(`http://localhost:8000/api/editusuario/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(() => {
            console.log("dados actualizados com sucesso");
            setOpen(true);
            setLoadingStatus(true)
            setShowSave(false)
        })

        console.log('user', user)

    }





    return (


        <div>
            <div className='div-detalhes-user'>
                <div>
                    <AccountCircleIcon
                        color="primary"
                        style={{ fontSize: 150, margin: '0px 50px' }}
                    />
                </div>
                {
                    !showSave &&
                    <div>
                        <Row className="mt-4">
                            <Col sm={4} className="">

                                <TextField
                                    id="standard-basic"
                                    label="Nome"
                                    style={{ width: "100%" }}
                                    type="text"
                                    name="landNumber"
                                    value={nome}
                                    InputLabelProps={{
                                        shrink: true,
                                        readOnly: true,

                                    }}

                                />

                            </Col>
                            <Col sm={4} className="">
                                <TextField
                                    id="standard-basic"
                                    label="Apelido"
                                    style={{ width: "100%" }}
                                    type="text"
                                    value={apelido}
                                    InputLabelProps={{
                                        shrink: true,
                                        readOnly: true,

                                    }}

                                />
                            </Col>
                            <Col sm={4} className="">
                                <TextField
                                    id="standard-basic"
                                    label="Data Nascimento"
                                    style={{ width: "100%" }}
                                    type="text"
                                    value={dataNascimento}
                                    InputLabelProps={{
                                        shrink: true,
                                        readOnly: true,

                                    }}
                                />
                            </Col>

                        </Row>
                        <Row className="mt-4">
                            <Col sm={4} className="">
                                <TextField
                                    id="standard-basic"
                                    label="Email"
                                    style={{ width: "100%" }}
                                    type="text"
                                    value={email}
                                    InputLabelProps={{
                                        shrink: true,
                                        readOnly: true,
                                    }}
                                />
                            </Col>
                            <Col sm={4} className="">

                                <TextField
                                    id="standard-basic"
                                    label="Contacto"
                                    style={{ width: "100%" }}
                                    type="text"
                                    name="landNumber"
                                    value={contacto}
                                    InputLabelProps={{
                                        shrink: true,
                                        readOnly: true,

                                    }}

                                />

                            </Col>
                            <Col sm={4} className="">
                                <TextField
                                    id="standard-basic"
                                    label="Tipo de user"
                                    style={{ width: "100%" }}
                                    type="text"
                                    value={props.detalhes?.tipo}
                                    InputLabelProps={{
                                        shrink: true,
                                        readOnly: true,

                                    }}

                                />
                            </Col>

                        </Row>
                    </div>
                }


                {
                    showSave &&
                    <form onSubmit={validateForm}>
                        <Row className="mt-4">
                            <Col sm={4} className="">
                                <TextField
                                    id="standard-basic"
                                    label="Nome"
                                    style={{ width: "100%" }}
                                    type="text"
                                    name="landNumber"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}

                                />

                            </Col>
                            <Col sm={4} className="">
                                <TextField
                                    id="standard-basic"
                                    label="Apelido"
                                    style={{ width: "100%" }}
                                    type="text"
                                    value={apelido}
                                    onChange={(e) => setapelido(e.target.value)}


                                />
                            </Col>
                            <Col sm={4} className="">
                                <TextField
                                    id="standard-basic"
                                    label="Data Nascimento"
                                    style={{ width: "100%" }}
                                    type="text"
                                    value={dataNascimento}
                                    onChange={(e) => setdataNascimento(e.target.value)}

                                />
                            </Col>

                        </Row>
                        <Row className="mt-4">
                            <Col sm={4} className="">
                                <TextField
                                    id="standard-basic"
                                    label="Email"
                                    style={{ width: "100%" }}
                                    type="text"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}

                                />
                            </Col>
                            <Col sm={4} className="">

                                <TextField
                                    id="standard-basic"
                                    label="Contacto"
                                    style={{ width: "100%" }}
                                    type="text"
                                    name="landNumber"
                                    value={contacto}
                                    onChange={(e) => setcontacto(e.target.value)}

                                />

                            </Col>
                            <Col sm={4} className="" style={{ paddingTop: '10px' }}>

                                <Form.Group as={Col} controlId="tipo">
                                    <Form.Select Value={tipoUser}
                                        onChange={(e) => { setTipoUser(e.target.value) }}
                                    >
                                        <option>Administrador</option>
                                        <option>Normal</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                        </Row>

                        {
                            showSave &&
                            <div className='div-flexEnd-style'>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    type='submit'
                                    disabled={!loadingStatus}
                                    startIcon={
                                        loadingStatus
                                            ? (<SaveIcon />)
                                            : (<Spinner animation="border" />)
                                    }
                                >
                                    Salvar
                                </Button>
                            </div>
                        }


                    </form>
                }

            </div>

            {
                !showSave &&
                <div className='div-flexEnd-style'>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<EditIcon />}
                        onClick={() => {
                            setReadOnlyPropety(false)
                            setShowSave(true)
                        }}
                    >
                        Edit
                    </Button>
                </div>
            }

            <div>
                <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                    <Alert onClose={handleClose} >
                        Dados actualizados com sucesso
                    </Alert>
                </Snackbar>

            </div>

        </div>
    )
}
export default DetalhesUser
