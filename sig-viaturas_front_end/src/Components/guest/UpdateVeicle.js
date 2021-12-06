import Header from "./Header"
import { withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'

function UpdateVeicle(props) {
    const [data, setData] = useState([])
    
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
    const [email, setEmail] = useState("");
    const [contacto, setContacto] = useState("");
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

   
    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/getProprietario/nacionalidade/" + props.match.params.id)
        result = await result.json();
        setData(result)
        setName(result.nomePais)
        setDescription(result.description);
        setPrice(result.price)
        setImage(result.image);
    },[])
   async function editProduct(id){
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', image);
        let result = await fetch("http://localhost:8000/api/updateproduct/"+id+"?_method=PUT", {
            method: 'POST',
            body: formData,
        });
        alert("Producto Actualizado Com Sucesso!")
    }
    return (
        <div>
            <Header />

            <div className="col-sm-6 offset-sm-3">
                <br />
                <h1> Actualização dos Dados da Publicação</h1>
                <input type="text" className="form-control"
                 onChange={(e) => setName(e.target.value)}
                defaultValue={data.name} /><br />
                <input type="text" className="form-control" 
                 onChange={(e) => setPrice(e.target.value)}
                defaultValue={data.price} /><br />
                <input type="text" className="form-control" 
                 onChange={(e) => setDescription(e.target.value)}
                defaultValue={data.description} /><br />
                <input type="file" className="form-control" 
                onChange={(e) => setImage(e.target.files[0])}
                defaultValue={data.image} /><br />
                <img style={{ width: 200 }} src={"http://localhost:8000/products/" + data.image} />
              <br/> <br/>
                
                    <button onClick={()=>editProduct(data.id)}
                        className="btn btn-primary ">Actualizar a Publicação 
                    </button>
                
            </div>
            

        </div>



    )
}

export default UpdateVeicle