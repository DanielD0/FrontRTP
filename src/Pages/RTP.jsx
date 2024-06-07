import React from 'react';
import 'react-datetime/css/react-datetime.css';
import RtpForm from '../Components/RTP/RtpForm';

function RTP() {
  return (
    <> 
      <h1 className='text-center'>Generador RTP</h1>
      <p className='text-center'>Nombre Desarrollador</p>
      
      <select className="form-select form-select-sm mb-3" aria-label=".form-select-lg example">
        <option selected>Selecciona el Maker del RTP</option>
        <option value="1">Nombre 1</option>
        <option value="2">Nombre 2</option>
        <option value="3">Nombre 3</option>
      </select>
      <RtpForm/>
      <input placeholder='Nombre/Telefono'/>
    </>
  );
}

export default RTP;
