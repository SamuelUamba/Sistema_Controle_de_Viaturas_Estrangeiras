import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import Button from "@material-ui/core/Button";
import { Redirect } from 'react-router';
import Spinner from 'react-bootstrap/Spinner';
import { Form, Row, Col, Card, InputGroup, Container, FormControl, Label } from 'react-bootstrap';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import cssGeral from '../../css/cssGeral.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}







const RegistUser = () => {

    const classes = useStyles();
    const [nomeUser, setNomeUser] = useState("");
    const [apelidoUser, setApelidoUser] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [senhaUser, setSenhaUser] = useState("");
    const [senhaUserConfrim, setSenhaUserConfrim] = useState("");
    const [contacto, setContacto] = useState("");
    const [tipoUser, setTipoUser] = useState("Normal");
    const [emailUser, setEmailUser] = useState("");

    // validação de form ststes
    const [nomeUserInvalida, setNomeUserInvalida] = useState({ status: false, message: "" });
    const [apelidoUserInvalida, setApelidoUserInvalida] = useState({ status: false, message: "" });
    const [dataNascimentoInvalida, setDataNascimentoInvalida] = useState({ status: false, message: "" });
    const [senhaUserInvalida, setSenhaUserInvalida] = useState({ status: false, message: "" });
    const [contactoInvalida, setContactoInvalida] = useState({ status: false, message: "" });
    const [tipoUserInvalida, setTipoUserInvalida] = useState({ status: false, message: "" });
    const [emailUserInvalida, setEmailUserInvalida] = useState({ status: false, message: "" });

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen2(false);
    };



    const calculate_age = (dateOfConstrution) => {
        var today = new Date();
        var dateOfConst = new Date(dateOfConstrution);
        var age_now = today.getFullYear() - dateOfConst.getFullYear();
        var m = today.getMonth() - dateOfConst.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dateOfConst.getDate())) {
            age_now--;
        }

        if (age_now < 0) {
            setOpen2(true);
            setDataNascimentoInvalida({ status: true, message: "A data de construção é inválida" });
        }
        else {
            setDataNascimentoInvalida({ status: false, message: "" });
        }
    }

    const validateForm = (e) => {

        e.preventDefault();
        console.log("submit")

        if (apelidoUser == "" || apelidoUser == null) {
            setApelidoUserInvalida({ status: true, message: "Nome de user é inválido" });
        }
        else {
            setApelidoUserInvalida({ status: false, message: "" });
        }

        if (nomeUser == "" || nomeUser == null) {
            setNomeUserInvalida({ status: true, message: "Nome de user é inválido" });
        }
        else {
            setNomeUserInvalida({ status: false, message: "" });
        }

        if (senhaUser == "" || senhaUser == null) {
            setSenhaUserInvalida({ status: true, message: "senha de user é inválido" });
        }
        else {
            setSenhaUserInvalida({ status: false, message: "" });
        }

        if (contacto == "" || contacto == null) {
            setContactoInvalida({ status: true, message: "Numero de casa é inválido" });
        }
        else {
            setContactoInvalida({ status: false, message: "" });
        }


        if (tipoUser == "" || tipoUser == null) {
            setTipoUserInvalida({ status: true, message: "Numero de casa é inválido" });
        }
        else {
            setTipoUserInvalida({ status: false, message: "" });
        }

        if (emailUser == "" || emailUser == null) {
            setEmailUserInvalida({ status: true, message: "Numero de casa é inválido" });
        }
        else {
            setEmailUserInvalida({ status: false, message: "" });
        }

        if (senhaUserConfrim != senhaUser) {
            setOpen(true);
        }


        var condicao = nomeUserInvalida.status || dataNascimentoInvalida.status ||
            senhaUserInvalida.status || contactoInvalida.status ||
            tipoUserInvalida.status || emailUserInvalida.status || apelidoUserInvalida.status;


        var condicao2 = nomeUser != "" & dataNascimento != "" &
            senhaUser != "" & emailUser != "" &
            contacto != "" & tipoUser != "" & apelidoUser != "";


        if (condicao == false & condicao2 == true & senhaUserConfrim == senhaUser) {

            const user = {
                nome: nomeUser,
                apelido: apelidoUser,
                dataNascimento: dataNascimento,
                contacto: contacto,
                email: emailUser,
                password: senhaUser,
                tipo: tipoUser
            }

            fetch('http://localhost:8000/api/saveusuario', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            }).then(() => {
                console.log("dados guardados com sucesso")
                setNomeUser("");
                setApelidoUser("");
                setDataNascimento("");
                setSenhaUser("");
                setSenhaUserConfrim("");
                setContacto("");
                setTipoUser("Normal");
                setEmailUser("")
            })
        }

    }





    // console.log(tipoUser)
    // console.log(nomeUser)
    // console.log(apelidoUser)
    // console.log(dataNascimento)
    // console.log(senhaUser)
    // console.log(senhaUserConfrim)
    // console.log(contacto)
    // console.log(tipoUser)
    // console.log(emailUser)


    return (
        <div>
            <Typography color="primary" gutterBottom>
                <h4 style={{ marginTop: '30px' }}>Formulário de Registo de usuário</h4>
            </Typography>

            <form className="" autoComplete="off" onSubmit={validateForm} >

                <Card style={{ margin: "5px 5px 5px 5px" }}>
                    <Card.Header as="h6">Dados do usuário</Card.Header>
                    <Card.Body>
                        <div className='div-flexEnd-style'>
                            <PersonAddIcon
                                color="primary"
                                style={{ fontSize: 80, margin: '20px 20px 20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'right' }}
                            />
                        </div>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Carta">
                                <Form.Label>Nome </Form.Label>
                                <input
                                    className="form-control"
                                    type="text"
                                    required
                                    value={nomeUser}
                                    onChange={(e) => { setNomeUser(e.target.value) }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="local_Emissao">
                                <Form.Label>Apelido </Form.Label>
                                <input
                                    className="form-control"
                                    type="text"
                                    required
                                    value={apelidoUser}
                                    onChange={(e) => { setApelidoUser(e.target.value) }}

                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="data_nacimento">
                                <Form.Label>Data de Nascimento</Form.Label>
                                <input
                                    id="date"
                                    className="form-control"
                                    type="date"
                                    onChange={(e) => {
                                        setDataNascimento(e.target.value)
                                        calculate_age(e.target.value)
                                    }}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Carta">
                                <Form.Label>Email </Form.Label>
                                <input
                                    className="form-control"
                                    type="email"
                                    required
                                    value={emailUser}
                                    onChange={(e) => { setEmailUser(e.target.value) }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="local_Emissao">
                                <Form.Label>Contacto </Form.Label>
                                <input
                                    className="form-control"
                                    type="number" required
                                    value={contacto}

                                    onChange={(e) => { setContacto(e.target.value) }}

                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="tipo">
                                <Form.Label>Tipo de user</Form.Label>
                                <Form.Select defaultValue="Choose..."
                                    onChange={(e) => { setTipoUser(e.target.value) }}
                                >
                                    <option>Administrador</option>
                                    <option>Normal</option>
                                </Form.Select>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={senhaUser}

                                    onChange={(e) => { setSenhaUser(e.target.value) }}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGroupPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password "
                                    value={senhaUserConfrim}

                                    onChange={(e) => { setSenhaUserConfrim(e.target.value) }}
                                />
                            </Form.Group>
                        </Row>
                        <div className='div-flexEnd-style'>

                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                type='submit'


                                startIcon={
                                    <SaveIcon />
                                }
                            >
                                Salvar
                            </Button>
                        </div>

                        <div>
                            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity='error'>
                                    Password e confirm password deve ser igual
                                </Alert>
                            </Snackbar>

                        </div>

                        <div>
                            <Snackbar open={open2} autoHideDuration={4000} onClose={handleClose2}>
                                <Alert onClose={handleClose2} severity='error'>
                                    Data  de nascimento invalida
                                </Alert>
                            </Snackbar>
                        </div>



                    </Card.Body>
                </Card>
            </form>


        </div>
    )
}

export default RegistUser

