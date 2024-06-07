import React,{useState} from "react";

function Checkbox({label, onChange}){
    const [isChecked, setIsCheked] = useState(false);

    const detectaCambioenCheckbox = (event) =>{
        const newValue = event.target.checked;
        setIsCheked(newValue);
        console.log(newValue);
        onChange(newValue);
    }

    return(
        <div className="form-check form-check-inline">
            <input
                className="form-check-input"
                type="checkbox"
                id={`checkbox_${label}`}
                value={label}
                checked={isChecked}
                onChange={detectaCambioenCheckbox}
            />
             <label className="form-check-label" htmlFor={`checkbox_${label}`}>{label}</label>
        </div>
    )
}

export default Checkbox;