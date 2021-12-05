import React, { Component } from 'react'
import { Form, Row, Col, Card, Button } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import { useState, useEffect, useRef } from 'react';


const AddVeicle = () => {


    //Região 
    const [nomeRegiao, setRegiao] = useState("");

    //Nacionalidade
    const [nomePaisNacionalidade, setNomePaisNacionalidade] = useState("");

    //Carta de Conducao

    const [dataEmissao, setDataEmissao] = useState("");
    const [paisEmissao, setPais] = useState("");
    const [cidadeEmissao, setCidadeEmissao] = useState("");



    //Entrada
    const [dataEntrada, setDataEntrada] = useState("");
    const [dataSaidaPrevista, setDataSaidaPrevista] = useState("");
    const [dataProrogacao, setDataProrogacao] = useState("");
    const [dataFimProrogacao, setDataFimProrogacao] = useState("");
    const [status, setStatus] = useState("");


    //Viatura


    const [nrMatricula, setNrMatricula] = useState("");
    const [marcaViatura, setMarcaviatura] = useState("");
    const [modeloviatura, setModeloviatura] = useState("");
    const [tipo, setTipo] = useState("");
    const [nrMotor, setNrMotor] = useState("");
    const [nrChassi, setNrChassi] = useState("");
    const [cor, setCor] = useState("");
    const [nrLugares, setNrLugares] = useState("");
    const [custoEstimadoViatura, setCustoEstimadoViatura] = useState("");

    // instancia
    const [nInstancia, setNomeInstancia] = useState("");
    const [Instancia_id, setInstancia_id] = useState("");


    //Proprietario
    const [nomeproprietario, SetNomeprop] = useState("");
    const [tempoPermanencia, setTempoPermanencia] = useState("");
    const [objectivo, setObjectivo] = useState("Turismo");
    const [nrCarta, setNrCarta] = useState();
    const [local_emissao_carta_id, setlocal_emissao_carta_id] = useState("");
    const [nacionalidade_proprietario_id, setnacionalidade_proprietario_id] = useState("");
    const [regiao_id, setRegiao_id] = useState(20);
    const [viatura_id, setviatura_id] = useState("");

    //Endereco
    const [nomepaisEndereco, setNomePaisEndereco] = useState("Mozambique");
    const [cidadeEndereco, setcidadeEndereco] = useState("");
    const [Bairro, setBairro] = useState("");
    const [Avenida, setAvenida] = useState("");

    //Equipameto Auxiliar
    const [descricao, setDescricao] = useState("");
    const [marcaAuxiliar, SetMarcaAuxiliar] = useState("");
    const [modeloAuxiliar, setmodeloAuxiliar] = useState("");
    const [nrIdentificacao, setNrIdentificacao] = useState("");
    const [custoEstimadoAuxiliar, setCustoEstimadoAuxiliar] = useState("");


    const [counter, setCounter] = useState(1)
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/counter', {
            method: 'Get',
            headers: {
                "Content-type": "application/json",
            }
        }).then(resp => resp.json())
            .then(resp => setCounter(resp))
    }, [])

    console.log(counter + 1)



    //  COMBOBOX REGIOES
    const [regioes, listaregioes] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/getregiao', {
            method: 'Get',
            headers: {
                "Content-type": "application/json",
            }
        }).then(resp => resp.json())
            .then(resp => listaregioes(resp))
    }, [])

    //  COMBOBOX FRONTEIRAS
    const [fronteiras, listafronteiras] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/getinstancia/regiao/' + regiao_id, {
            method: 'Get',
            headers: {
                "Content-type": "application/json",
            }
        }).then(resp => resp.json())
            .then(resp => listafronteiras(resp))
    }, [regiao_id])



    const handleSubmit = (e) => {
        e.preventDefault();
        setCounter(counter + 1)

        //Nacionalidade
        const nacionalidade = {
            nomePais: nomePaisNacionalidade,
            proprietario_id: counter
        };
        fetch('http://127.0.0.1:8000/api/savenacionalidade', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(nacionalidade)
        }).then(() => {
            console.log('nacionalidade adicionada!')
            setNomePaisNacionalidade("")

        })


        //Local de Emissao da Carta de Conducao
        const carta = {
            dataEmissao,
            pais: paisEmissao,
            cidade: cidadeEmissao,
            proprietario_id: counter
        };
        fetch('http://127.0.0.1:8000/api/savelocalemissaocarta', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(carta)
        }).then(() => {
            console.log('carta adicionada!')
            setDataEmissao("")
            setPais("")
            setCidadeEmissao("")

        })

        // Controle de Entrada
        const entrada = {
            dataEntrada,
            dataSaidaPrevista,
            dataProrogacao,
            dataFimProrogacao,
            status,
            controleEntrada_id: counter

        };
        fetch('http://127.0.0.1:8000/api/savecontroleentrada', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(entrada)
        }).then(() => {
            console.log('entrada adicionada!')
            setDataEntrada("")
            setDataSaidaPrevista("")
            setDataProrogacao("")
            setDataFimProrogacao("")
            setStatus("")

        })



        // Viatura
        const Viatura = {
            nrMatricula,
            marca: marcaViatura,
            modelo: modeloviatura,
            tipo,
            nrMotor,
            nrChassi,
            cor,
            nrLugares,
            custoEstimadoViatura,
            controleEntrada_id: counter
        };
        fetch('http://127.0.0.1:8000/api/saveviatura2', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(Viatura)
        }).then(() => {
            console.log('Viatura adicionada!')
            setNrMatricula("")
            setMarcaviatura("")
            setModeloviatura("")
            setTipo("")
            setNrMotor("")
            setNrChassi("")
            setCor("")
            setNrLugares("")
            setCustoEstimadoViatura("")
        })


        // Proprietario
        const Proprietario = {
            nome: nomeproprietario,
            tempoPermanencia,
            objectivo,
            nrCarta,
            viatura_id: counter,
            local_emissao_carta_id: counter,
            nacionalidade_proprietario_id: counter,
            regiao_id: regiao_id
        };
        fetch('http://127.0.0.1:8000/api/saveproprietario2', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(Proprietario)
        }).then(() => {
            console.log('Proprietario adicionado!')
            SetNomeprop("")
            setTempoPermanencia("")
            setObjectivo("")
            setNrCarta("")
        })

        // Endereco
        const Endereco = {
            pais: nomepaisEndereco,
            cidade: cidadeEndereco,
            Bairro,
            Avenida,
            proprietario_id: counter
        };
        fetch('http://127.0.0.1:8000/api/saveendereco2', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(Endereco)
        }).then(() => {
            console.log('Endereco adicionado!')
            setNomePaisEndereco("")
            setcidadeEndereco("")
            setBairro("")
            setAvenida("")
        })

        // Equipamento
        const Equipamento = {
            id: counter,
            descricao,
            marca: marcaAuxiliar,
            modelo: modeloAuxiliar,
            nrIdentificacao,
            custoEstimadoViatura: custoEstimadoAuxiliar,
            viatura_id: counter
        };
        fetch('http://127.0.0.1:8000/api/saveequipamentoauxiliar', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(Equipamento)
        }).then(() => {
            console.log('Equipamento adicionado!')
            setDescricao("")
            SetMarcaAuxiliar("")
            setmodeloAuxiliar("")
            setNrIdentificacao("")
            setCustoEstimadoAuxiliar("")
        })


    }

    console.log(objectivo);

    return (
        <div>
            <h2>Formulário de entrada de veículos/Vehicle entry form </h2>
            <div >
                <Form onSubmit={handleSubmit}>

                    <Card>

                        <Card.Header>Região de Entrada/Entry region</Card.Header>
                        <Card.Body>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="regiao">
                                    <Form.Label>Região/Region</Form.Label>
                                    <Form.Select
                                        required
                                        onChange={(e) => setRegiao_id(e.target.value)}
                                    >
                                        <option desabled selected>--Select--</option>
                                        {
                                            regioes.map(regiao => {
                                                return (
                                                    < option value={regiao.id}>{regiao.nome}</option>

                                                )
                                            })


                                        }

                                    </Form.Select>

                                </Form.Group>

                                <Form.Group as={Col} controlId="estancia">
                                    <Form.Label>Estância/Instance</Form.Label>
                                    <Form.Select
                                        required
                                        onChange={(e) => setInstancia_id(e.target.value)}
                                    >
                                        <option desabled selected>--Select--</option>
                                        {
                                            fronteiras.map(front => {
                                                return (
                                                    < option value={front.id}>{front.nomeInstancia}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Form.Group>


                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="data_entrada">
                                    <Form.Label>Data de Entrada/Entery date</Form.Label>
                                    <input type="date"
                                        className="form-control"
                                        required
                                        value={dataEntrada}
                                        onChange={(e) => setDataEntrada(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="data_Saida">
                                    <Form.Label>Data de Saida/ Exit Date</Form.Label>
                                    <input type="date"
                                        className="form-control"
                                        required
                                        value={dataSaidaPrevista}
                                        onChange={(e) => setDataSaidaPrevista(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="data_Prorogacao">
                                    <Form.Label>Prorogacao/ Extension </Form.Label>
                                    <input type="date"
                                        className="form-control"
                                        required
                                        value={dataProrogacao}
                                        onChange={(e) => setDataProrogacao(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="data_Fim Prorogacao">
                                    <Form.Label> Fim Prorogacao/ Extension End </Form.Label>
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
                                        <option >--Select--</option>
                                        <option >On</option>
                                        <option >OFF</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card>
                        <Card.Header>Detalhes do proprietário/Pessoa Autorizada(Datails of owner/autorised Person)</Card.Header>
                        <Card.Body>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="nome">
                                    <Form.Label>Nome completo/full name</Form.Label>
                                    <input className="form-control"
                                        type="text"
                                        required
                                        value={nomeproprietario}
                                        onChange={(e) => SetNomeprop(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="Nacionalidade">
                                    <Form.Label>Nacionalidade/Nationality</Form.Label>
                                    <input className="form-control"
                                        type="text"
                                        required
                                        value={nomePaisNacionalidade}
                                        onChange={(e) => setNomePaisNacionalidade(e.target.value)}

                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="Carta">
                                    <Form.Label>Nº da carta/driving license number</Form.Label>
                                    <input className="form-control"
                                        type="number"
                                        min="1"
                                        type="number"
                                        required
                                        value={nrCarta}
                                        onChange={(e) => setNrCarta(e.target.value)}

                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="local_Emissao">
                                    <Form.Label>Local de Emissão/place of issue</Form.Label>
                                    <input className="form-control"
                                        type="text"
                                        required
                                        value={cidadeEmissao}
                                        onChange={(e) => setCidadeEmissao(e.target.value)}

                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="data_emissao">
                                    <Form.Label>Data de emissão/issue date</Form.Label>
                                    <input type="date"
                                        className="form-control"
                                        required
                                        value={dataEmissao}
                                        onChange={(e) => setDataEmissao(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="PaisEmissao">
                                    <Form.Label>Pais de emissão/issue country</Form.Label>
                                    <input type="text"
                                        className="form-control"
                                        required
                                        value={paisEmissao}
                                        onChange={(e) => setPais(e.target.value)}
                                    />
                                </Form.Group>

                            </Row>
                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="endereco">
                                    <Form.Label>Endereço em Moçamique/Adress in Mozambique</Form.Label>
                                    <input className="form-control"
                                        type="text"
                                        required
                                        value={cidadeEndereco}
                                        onChange={(e) => setcidadeEndereco(e.target.value)}

                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="Bairro">
                                    <Form.Label>Bairro em Moçamique</Form.Label>
                                    <input className="form-control"
                                        type="text"
                                        required
                                        value={Bairro}
                                        onChange={(e) => setBairro(e.target.value)}

                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="Avenida">
                                    <Form.Label>Avenida em Moçamique</Form.Label>
                                    <input className="form-control"
                                        type="text"
                                        required
                                        value={Avenida}
                                        onChange={(e) => setAvenida(e.target.value)}

                                    />
                                </Form.Group>
                            </Row>
                            <Row className="  mb-3" >

                                <Form.Group as={Col} controlId="duracao">
                                    <Form.Label>Duração da visita(Meses)/duration of visit(months)</Form.Label>
                                    <input className="form-control"
                                        type="number"
                                        required
                                        min="1"
                                        onChange={(e) => setTempoPermanencia(e.target.value)}

                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="Email">
                                    <Form.Label>Endereço Eletrónico/E-mail</Form.Label>
                                    <input className="form-control"
                                        type="text"
                                        required
                                    //onChange={(e) => SetDP_Email(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="cell">
                                    <Form.Label>Contacto Telefonico/Telephone contact</Form.Label>
                                    <input className="form-control"
                                        type="text"
                                        required

                                    // onChange={(e) => SetDP_Cell(e.target.value)}

                                    />
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
                                                        value={item}
                                                        onChange={(e) => setObjectivo(e.target.value)}
                                                        required
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
                                    <input className="form-control"
                                        type="text"
                                        required
                                        value={marcaViatura}
                                        onChange={(e) => setMarcaviatura(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="modelo">
                                    <Form.Label>Modelo/Model</Form.Label>
                                    <input className="form-control"
                                        type="text"
                                        required
                                        value={modeloviatura}
                                        onChange={(e) => setModeloviatura(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="tipo">
                                    <Form.Label>Tipo/typel</Form.Label>
                                    <input className="form-control"
                                        type="text"
                                        required
                                        value={tipo}
                                        onChange={(e) => setTipo(e.target.value)}
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="Motor">
                                    <Form.Label>Nº do Motor/Engine Nº</Form.Label>
                                    <input className="form-control"
                                        type="number"
                                        min="1"
                                        required
                                        value={nrMotor}
                                        onChange={(e) => setNrMotor(e.target.value)}

                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="quadro">
                                    <Form.Label>Nº do quadro/ Chassi Nº </Form.Label>
                                    <input className="form-control"
                                        type="number"
                                        required
                                        value={nrChassi}
                                        onChange={(e) => setNrChassi(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="valor">
                                    <Form.Label>Valor em Mt/ Value in Mt</Form.Label>
                                    <input className="form-control"
                                        type="number"
                                        min="0"
                                        required
                                        value={custoEstimadoViatura}
                                        onChange={(e) => setCustoEstimadoViatura(e.target.value)}
                                    />
                                </Form.Group>

                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="cor">
                                    <Form.Label>Cor/Color</Form.Label>
                                    <input className="form-control"
                                        type="text"
                                        required
                                        value={cor}
                                        onChange={(e) => setCor(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="lugares">
                                    <Form.Label>Nº do Lugares/Seating</Form.Label>
                                    <input className="form-control"
                                        type="text"
                                        min="1"
                                        required
                                        value={nrLugares}
                                        onChange={(e) => setNrLugares(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="matricula">
                                    <Form.Label>Nº de Matricula/Registration Nº</Form.Label>
                                    <input className="form-control"
                                        type="text"
                                        required
                                        value={nrMatricula}
                                        onChange={(e) => setNrMatricula(e.target.value)}
                                    />
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
                                    <input className="form-control"
                                        type="text"
                                        required
                                        value={descricao}
                                        onChange={(e) => setDescricao(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="marca">
                                    <Form.Label>Marca e Numero/ Make and Nº</Form.Label>
                                    <input className="form-control"

                                        type="text"
                                        required
                                        value={marcaAuxiliar}
                                        onChange={(e) => SetMarcaAuxiliar(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="modelo">
                                    <Form.Label>Modelo/Model</Form.Label>
                                    <input className="form-control" type="text"
                                        required
                                        value={modeloAuxiliar}
                                        onChange={(e) => setmodeloAuxiliar(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="id">
                                    <Form.Label>Nº de id/id Nº </Form.Label>
                                    <input className="form-control" type="number"
                                        min="1"
                                        required
                                        value={nrIdentificacao}
                                        onChange={(e) => setNrIdentificacao(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="valor">
                                    <Form.Label>Valor em Mt/Value in Mt</Form.Label>
                                    <input className="form-control" type="text"
                                        min="0"
                                        required
                                        value={custoEstimadoAuxiliar}
                                        onChange={(e) => setCustoEstimadoAuxiliar(e.target.value)}
                                    />
                                </Form.Group>

                            </Row>

                        </Card.Body>
                    </Card>
                    <br></br>
                    <button className="btn btn-primary " >Salvar</button>{'  '}
                    <button className="btn btn-primary " >Imprimir</button>
                </Form>


            </div>
        </div >
    )
}

export default AddVeicle
