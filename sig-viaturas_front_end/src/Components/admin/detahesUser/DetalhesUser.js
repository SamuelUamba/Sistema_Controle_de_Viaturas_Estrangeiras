import React, { useState } from 'react'
import { Button, InputLabel, MenuItem, Select, TextField }
    from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


const DetalhesUser = (props) => {
    const classes = useStyles();
    const [readOnlyState, setreadOnlyState] = useState(true);


    return (


        <div>
            <div className='div-detalhes-user'>
                <div>
                    <AccountCircleIcon
                        color="primary"
                        style={{ fontSize: 150, margin: '0px 50px' }}
                    />
                </div>
                <div>
                    <Row className="mt-4">
                        <Col sm={4} className="">

                            <TextField
                                id="standard-basic"
                                label="Nome"
                                style={{ width: "100%" }}
                                type="text"
                                name="landNumber"
                                value={props.detalhes?.nome}
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
                                value={props.detalhes?.apelido}
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
                                value={props.detalhes?.dataNascimento}
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
                                value={props.detalhes?.email}
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
                                value={props.detalhes?.contacto}
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
            </div>
            <div>
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
                >
                    Edit
                </Button>
            </div>
        </div>
    )
}
export default DetalhesUser
