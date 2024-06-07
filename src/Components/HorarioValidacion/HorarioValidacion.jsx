import React,{useState} from 'react'
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

function HorarioValidacion() {
    const [startHour, setStartHour] = useState('');
    const [endHour,setEndHour] = useState('');

    const handleStartHourChange = (moment) => {
        setStartHour(moment.format('HH:mm')); // Formato de hora: HH:mm
      };
    
      const handleEndHourChange = (moment) => {
        setEndHour(moment.format('HH:mm')); // Formato de hora: HH:mm
      };
  return (
    <>
    <div className='container'>
        <div className="row">
            <div className="col-6">
            <label htmlFor="startHour">Inicio:</label>
            <Datetime
                id="startHour"
                inputProps={{ className: 'form-control' }}
                dateFormat={false}
                onChange={handleStartHourChange}
                value={startHour}
            />
            </div>
            
            <div className="col-6">
            <label htmlFor="endHour">Fin:</label>
            <Datetime
                id="endHour"
                inputProps={{ className: 'form-control' }}
                dateFormat={false}
                onChange={handleEndHourChange}
                value={endHour}
            />
            </div>
        </div>
    </div>
    </>
  )
}

export default HorarioValidacion