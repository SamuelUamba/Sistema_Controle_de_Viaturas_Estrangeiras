import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"; import { Grid } from '@material-ui/core';
import { InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import SaveIcon from '@material-ui/icons/Save';
import Button from "@material-ui/core/Button";
import { Redirect } from 'react-router';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Alert from '@material-ui/lab/Alert';

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




const RegistUser = () => {

    const classes = useStyles();
    const [nomeUser, setNomeUser] = useState("");
    const [apelidoUser, setApelidoUser] = useState("");

    const [dataNascimento, setDataNascimento] = useState("");
    const [senhaUser, setSenhaUser] = useState("");
    const [contacto, setContacto] = useState("");
    const [tipoUser, setTipoUser] = useState("");
    const [emailUser, setEmailUser] = useState("");

    // validação de form ststes
    const [nomeUserInvalida, setNomeUserInvalida] = useState({ status: false, message: "" });
    const [apelidoUserInvalida, setApelidoUserInvalida] = useState({ status: false, message: "" });
    const [dataNascimentoInvalida, setDataNascimentoInvalida] = useState({ status: false, message: "" });
    const [senhaUserInvalida, setSenhaUserInvalida] = useState({ status: false, message: "" });
    const [contactoInvalida, setContactoInvalida] = useState({ status: false, message: "" });
    const [tipoUserInvalida, setTipoUserInvalida] = useState({ status: false, message: "" });
    const [emailUserInvalida, setEmailUserInvalida] = useState({ status: false, message: "" });



    const calculate_age = (dateOfConstrution) => {
        var today = new Date();
        var dateOfConst = new Date(dateOfConstrution);
        var age_now = today.getFullYear() - dateOfConst.getFullYear();
        var m = today.getMonth() - dateOfConst.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dateOfConst.getDate())) {
            age_now--;
        }

        if (age_now < 0) {
            setDataNascimentoInvalida({ status: true, message: "A data de construção é inválida" });
        }
        else {
            setDataNascimentoInvalida({ status: false, message: "" });
        }
    }

    const validateForm = () => {

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


        var condicao = nomeUserInvalida.status || dataNascimentoInvalida.status ||
            senhaUserInvalida.status || contactoInvalida.status ||
            tipoUserInvalida.status || emailUserInvalida.status || apelidoUserInvalida.status;


        var condicao2 = nomeUser != "" & dataNascimento != "" &
            senhaUser != "" & emailUser != "" &
            contacto != "" & tipoUser != "" & apelidoUser != "";

        if (condicao == false & condicao2 == true) {

            // setLoadingStatus(false)

        }

    }

    const calculate_age = (dateOfConstrution) => {
        var today = new Date();
        var dateOfConst = new Date(dateOfConstrution);
        var age_now = today.getFullYear() - dateOfConst.getFullYear();
        var m = today.getMonth() - dateOfConst.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dateOfConst.getDate())) {
            age_now--;
        }
        console.log("idade", age_now);
        setPropertyAge(age_now);
        if (age_now < 0) {
            setDataInvalida({ status: true, message: "A data de construção é inválida" });
            setPropertyAge(0);
        }
        else {
            setDataInvalida({ status: false, message: "" });
        }
    }

    return (
        <div>
            <Typography color="primary" gutterBottom>
                <h4 style={{ marginTop: '30px' }}>Formulário de Registo de usuário</h4>
            </Typography>

            <form className="" autoComplete="off">

                <Card style={{ margin: "5px 5px 5px 5px" }}>
                    <Card.Header as="h6">Dados do usuário</Card.Header>
                    <Card.Body>
                        <Row className="mt-4">
                            <Col sm={4} className="">
                                <TextField
                                    id="standard-basic"
                                    label="Nome do usuário "
                                    style={{ width: "98%" }}
                                    type="text"
                                    error={nomeUserInvalida.status}
                                    helperText={nomeUserInvalida.message}
                                    onChange={e => {
                                        setNomeUser(e.target.value)

                                    }}
                                />
                            </Col>
                            <Col sm={4} className="">
                                <TextField
                                    id="standard-basic"
                                    label="Apelido  "
                                    style={{ width: "98%" }}
                                    type="number"
                                    error={apelidoUserInvalida.status}
                                    helperText={apelidoUserInvalida.message}

                                    onChange={e => {
                                        setApelidoUser(e.target.value)
                                    }}
                                />
                            </Col>
                            <Col sm={4} className="">
                                <TextField
                                    id="standard-basic"
                                    label="Email  "
                                    style={{ width: "98%" }}
                                    type="text"
                                    error={emailUserInvalida.status}
                                    helperText={emailUserInvalida.message}

                                    onChange={e => {
                                        setEmailUser(e.target.value)
                                    }}
                                />
                            </Col>

                        </Row>


                    </Card.Body>
                </Card>
            </form>
        </div>
    )
}

export default RegistUser

