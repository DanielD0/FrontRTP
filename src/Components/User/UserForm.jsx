import axios from "axios";
import { useState } from "react";
export const UserForm = () =>{

    const [user,setUser] = useState({
        name: '',
        surname:'',
        state:'',
        active:true
    })

    const agregarUsuario = (e) => {
        e.preventDefault();
        console.log(user.name,user.surname,user.email);
    }

    return(
        <div className="container position-absolute top-50 start-50 translate-middle">
        <h1>Formulario Usuario</h1>
        <form onSubmit={agregarUsuario}>
            <input
                type="text"
                placeholder="Ingrese nombre"
                className="form-control mb-2"
                value={user.name}
                onChange={(e) => setUser({...user,name: e.target.value})}
            />
            <input
                type="text"
                placeholder="Ingrese apellido"
                className="form-control mb-2"
                value={user.surname}
                onChange={(e) => setUser({...user,surname: e.target.value})}
            />
            <input
                type="text"
                placeholder="Ingrese mail"
                className="form-control mb-2"
                value={user.email}
                onChange={(e) => setUser({...user,email: e.target.value})}
            />
            <div>
            <input 
                type="checkbox"
                className="form-check-input"
                value={user.active}
            />
            <label>Activo</label>
            </div>
            
            <button 
            type="submit"
            className="btn btn-primary"
            >Agregar</button>
        </form>
        </div>
    )
};

export default UserForm;