import React, { useState } from 'react'
import DetailsCard from './DetailsCard';
import '../../../css/cssGeral.css';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CommuteIcon from '@material-ui/icons/Commute';
import GraficoVeiculos from './GraficoVeiculos';
import GraficoRegios from './GraficoRegios';


import useFetch from '../../useFetch';
import Card from 'react-bootstrap/Card';
import Typography from "@material-ui/core/Typography";
import VehicleTable from '../VehicleTable';

const GuestDashboard = () => {

    const [value, onChange] = useState(new Date());
    var qntJan = 0;
    var qntFev = 0;
    var qntMar = 0;
    var qntAbr = 0;
    var qntMai = 0;
    var qntJun = 0;
    var qntJul = 0;
    var qntAgo = 0;
    var qntSet = 0;
    var qntOut = 0;
    var qntNov = 0;
    var qntDez = 0;

    var qntSaidaJan = 0;
    var qntSaidaFev = 0;
    var qntSaidaMar = 0;
    var qntSaidaAbr = 0;
    var qntSaidaMai = 0;
    var qntSaidaJun = 0;
    var qntSaidaJul = 0;
    var qntSaidaAgo = 0;
    var qntSaidaSet = 0;
    var qntSaidaOut = 0;
    var qntSaidaNov = 0;
    var qntSaidaDez = 0;

    const { dbData: entradas, error, loading } = useFetch('http://127.0.0.1:8000/api/getcontroleentrada');
    const { dbData: proprietariosSul, error1, loading1 } = useFetch('http://127.0.0.1:8000/api/getProprietario/regiao/20');
    const { dbData: proprietariosCentro, error2, loading2 } = useFetch('http://127.0.0.1:8000/api/getProprietario/regiao/21');
    const { dbData: proprietariosNorte, error3, loading3 } = useFetch('http://127.0.0.1:8000/api/getProprietario/regiao/22');
    const { dbData: usuarios, error4, loading4 } = useFetch('http://127.0.0.1:8000/api/getusuario');


    entradas?.map(item => {
        // console.log(" mes pretendido", item.dataEntrada.substring(5, 7))

        if (item.dataEntrada.substring(5, 7) == '01') {
            qntJan = qntJan + 1;
        }
        if (item.dataEntrada.substring(5, 7) == '02') {
            qntFev = qntFev + 1;
        }
        if (item.dataEntrada.substring(5, 7) == '03') {
            qntMar = qntMar + 1;
        }
        if (item.dataEntrada.substring(5, 7) == '04') {
            qntAbr = qntAbr + 1;
        }
        if (item.dataEntrada.substring(5, 7) == '05') {
            qntMai = qntMai + 1;
        }
        if (item.dataEntrada.substring(5, 7) == '06') {
            qntJun = qntJun + 1;
        }
        if (item.dataEntrada.substring(5, 7) == '07') {
            qntJul = qntJul + 1;
        }

        if (item.dataEntrada.substring(5, 7) == '08') {
            qntAgo = qntAgo + 1;
        }
        if (item.dataEntrada.substring(5, 7) == '09') {
            qntSet = qntSet + 1;
        }
        if (item.dataEntrada.substring(5, 7) == '10') {
            qntOut = qntOut + 1;
        }
        if (item.dataEntrada.substring(5, 7) == '11') {
            qntNov = qntNov + 1;
        }
        if (item.dataEntrada.substring(5, 7) == '12') {
            qntDez = qntDez + 1;
        }

        //  quantidade de saidas........

        if (item.dataSaidaPrevista.substring(5, 7) == '01' && item.status.toUpperCase() == 'OK') {
            qntSaidaJan = qntSaidaJan + 1;
        }
        if (item.dataSaidaPrevista.substring(5, 7) == '02' && item.status.toUpperCase() == 'OK') {
            qntSaidaFev = qntSaidaFev + 1;
        }
        if (item.dataSaidaPrevista.substring(5, 7) == '03' && item.status.toUpperCase() == 'OK') {
            qntSaidaMar = qntSaidaMar + 1;
        }
        if (item.dataSaidaPrevista.substring(5, 7) == '04' && item.status.toUpperCase() == 'OK') {
            qntSaidaAbr = qntSaidaAbr + 1;
        }
        if (item.dataSaidaPrevista.substring(5, 7) == '05' && item.status.toUpperCase() == 'OK') {
            qntSaidaMai = qntSaidaMai + 1;
        }
        if (item.dataSaidaPrevista.substring(5, 7) == '06' && item.status.toUpperCase() == 'OK') {
            qntSaidaJun = qntSaidaJun + 1;
        }
        if (item.dataSaidaPrevista.substring(5, 7) == '07' && item.status.toUpperCase() == 'OK') {
            qntSaidaJul = qntSaidaJul + 1;
        }

        if (item.dataSaidaPrevista.substring(5, 7) == '08' && item.status.toUpperCase() == 'OK') {
            qntSaidaAgo = qntSaidaAgo + 1;
        }
        if (item.dataSaidaPrevista.substring(5, 7) == '09' && item.status.toUpperCase() == 'OK') {
            qntSaidaSet = qntSaidaSet + 1;
        }
        if (item.dataSaidaPrevista.substring(5, 7) == '10' && item.status.toUpperCase() == 'OK') {
            qntSaidaOut = qntSaidaOut + 1;
        }
        if (item.dataSaidaPrevista.substring(5, 7) == '11' && item.status.toUpperCase() == 'OK') {
            qntSaidaNov = qntSaidaNov + 1;
        }
        if (item.dataSaidaPrevista.substring(5, 7) == '12' && item.status.toUpperCase() == 'OK') {
            qntSaidaDez = qntSaidaDez + 1;
        }

    }
    );





    const data = [
        {
            name: 'Jan',
            Entradas: qntJan,
            Saidas: qntSaidaJan
        },
        {
            name: 'Fev',
            Entradas: qntFev,
            Saidas: qntSaidaFev
        },
        {
            name: 'Mar',
            Entradas: qntMar,
            Saidas: qntSaidaMar

        },
        {
            name: 'Abr',
            Entradas: qntAbr,
            Saidas: qntSaidaAbr

        },
        {
            name: 'Mai',
            Entradas: qntMai,
            Saidas: qntSaidaMai

        },
        {
            name: 'Jun',
            Entradas: qntJun,
            Saidas: qntSaidaJun

        },
        {
            name: 'Jul',
            Entradas: qntJul,
            Saidas: qntSaidaJul


        },
        {
            name: 'Ago',
            Entradas: qntAgo,
            Saidas: qntSaidaAgo


        },
        {
            name: 'Set',
            Entradas: qntSet,
            Saidas: qntSaidaSet


        },
        {
            name: 'Out',
            Entradas: qntOut,
            Saidas: qntSaidaOut

        },
        {
            name: 'Nov',
            Entradas: qntNov,
            Saidas: qntSaidaNov

        },
        {
            name: 'Dez',
            Entradas: qntDez,
            Saidas: qntSaidaDez

        }
    ];

    const data2 = [
        { name: 'Sul', value: proprietariosSul?.length },
        { name: 'Cento', value: proprietariosCentro?.length },
        { name: 'Norte', value: proprietariosNorte?.length }
    ];

    return (
        <div className='container2'>

            <div id='quantitiesResume' >
              
                <DetailsCard
                    border={'primary'}

                    icon={<CommuteIcon
                        color="primary"
                        style={{ fontSize: 50, margin: '2px 2px 2px 2px', display: 'flex', alignItems: 'center', justifyContent: 'right' }}
                    />}
                    title={"Quantidade de veículos estrangeiros"}
                    value={proprietariosSul?.length
                        + proprietariosCentro?.length
                        + proprietariosNorte?.length}

                />

            </div>
            <div id='userLogin' >

                {/* <DetailsCard
                    border={'primary'}

                    icon={<CommuteIcon
                        color="primary"
                        style={{ fontSize: 50, margin: '2px 2px 2px 2px', display: 'flex', alignItems: 'center', justifyContent: 'right' }}
                    />}
                    title={"Usuário actual"}
                    value={"User"}

                /> */}
            </div>

            <div id='titulo'>
                <Typography color="primary" gutterBottom>
                    <h6 style={{ paddingTop: "10px" }} >Quantidade de veículos por mês</h6>
                </Typography>
            </div>
            <div id='titulo2'>
                <Typography color="primary" gutterBottom>
                    <h6 style={{ paddingTop: "10px" }} >Percentagem de veículos por região</h6>
                </Typography>
            </div>
            <div id='graphic'>

                <GraficoVeiculos
                    data={data}

                />

            </div>

            <div id='usersList'>

                <GraficoRegios
                    data2={data2}
                />

            </div>

           
        </div>
    )
}

export default GuestDashboard
