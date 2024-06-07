import React,{useState} from 'react'
import Checkbox from '../Checkbox/Checkbox'
import Radiobox from '../Checkbox/Radiobox';
import TituloPreguntas from '../Titulos/TituloPreguntas';
import Horario from '../Horario/Horario';
import HorarioValidacion from '../HorarioValidacion/HorarioValidacion';

function RtpForm() {
    const [codigoFuenteAplicativo, setCodigoFuente] = useState(false);
    const [xml, setXml] = useState(false)
    const [configuracionesAuthentic,setAuthentic] = useState(false)
    
    const seleccionarOpcionCodigoFuente = (newValue) => {
        setCodigoFuente(newValue)
    }

    const seleccionarXML = (newValue) =>{
        setXml(newValue)
    }

    const seleccionarConfiguracionesAuthentic = (newValue) =>{
        setAuthentic(newValue)
    }
  
    return (
    <>  
        <div className="card text-center">
            <div className="card-header fw-bold">
                Formato RTP
            </div>
            <div class="card-body">
            <TituloPreguntas label="Selecciona el maker del RTP"/>
            <TituloPreguntas label="Selecciona que configuraciones aplica en tu RTP"/>
            <Checkbox label="Codigo Fuente Aplicativo" onChange={seleccionarOpcionCodigoFuente}/>
            <Checkbox label="XML" onChange={seleccionarXML}/>
            <Checkbox label="Configuraciones Authentic" onChange={seleccionarConfiguracionesAuthentic}/>
            <TituloPreguntas label="Indica que ambiente se ve afectado"/>
            <Radiobox label="POS" groupName="ambiente"/>
            <Radiobox label="ATM" groupName="ambiente"/>
            <Radiobox label="NF" groupName="ambiente"/>
            <TituloPreguntas label="Indica la version"/>
            <Radiobox label="3.4" groupName="version"/>
            <Radiobox label="4.5" groupName="version"/>
            <TituloPreguntas label="Silos Afectados"/>
            <Checkbox label="Silo 1" />
            <Checkbox label="Silo 2" />
            <Checkbox label="Silo 3" />
            <Checkbox label="Silo 4" />
            <Checkbox label="Silo 5" />
            <Checkbox label="Silo 6" />
            <TituloPreguntas label="Aplica con la BD"/>
            <Radiobox label="Si" groupName="aplicabd"/>
            <Radiobox label="No" groupName="aplicabd"/>
            <TituloPreguntas label="Indica tu Horario de Ciclado"/>
            <Horario/>
            <TituloPreguntas label="Horario de Validacion"/>
            <HorarioValidacion/>
            </div>
        </div>
    </>
  )
}

export default RtpForm;
