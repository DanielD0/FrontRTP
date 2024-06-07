import React,{useState} from "react";

function Radiobox({label, onChange, groupName}){
    const [isChecked, setIsCheked] = useState(false);

    const detectaCambioenCheckbox = (event) =>{
        const newValue = event.target.checked;
        setIsCheked(newValue);
        console.log(newValue);
        onChange(newValue);
    }

    return(
        <div class="form-check form-check-inline">
            <input 
                className="form-check-input" 
                type="radio" 
                id={`checkbox_${label}`}
                name={groupName}
                value={label}
                checked={isChecked}
                onChange={detectaCambioenCheckbox}
            />
        <label className="form-check-label" htmlFor={`checkbox_${label}`}>{label}</label>
      </div>
    )
}

export default Radiobox;