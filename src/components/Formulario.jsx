import React, {useState} from 'react'
import SocialButton from './SocialButton'
const Formulario= ({setAlert}) => {
    
    const [nombre, setNombre] = useState ('')
    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [password, setPassword] = useState('');
    
    const validate = (e) => {
        e.preventDefault();

            //eliminar espacios atras y adelante .trim()
        if (
            nombre.trim() === '' || 
            email.trim() === '' ||
            contrasena.trim() === '' || 
            password.trim() === ''
        ) {   
            setAlert({msg:'Completar todos los campos', color:'warning'})
            return;
        }
        if(contrasena !== password) {
            setAlert({msg:'Las contraseñas no son iguales', color:'danger'})
            return;
        } 
            setAlert({msg:'Guardado con exito', color:'success'})
            setNombre('')
            setEmail('')
            setContrasena('')
            setPassword('')
    };

return (
    <>
    <div className='container'>
      <h1>Crea una cuenta</h1>
      <div className='iconos'>
      <SocialButton icono="fa-brands fa-facebook fa-2xl"/>
      <SocialButton icono="fa-brands fa-github fa-2xl"/>
      <SocialButton icono="fa-brands fa-linkedin fa-2xl"/>
      </div>
      <p>O usa tu email para registrarte</p>
  <form  onSubmit={validate}>
  <div className="mb-3">
    <input 
        type="text" 
        className="form-control" 
        id="InputText" 
        aria-describedby="Text input with checkbox" 
        placeholder="Nombre"
        onChange={(e)=>setNombre(e.target.value)}
        value={nombre}
        /> 
  </div>
  <div className="mb-3">
    <input 
        type="email" 
        className="form-control" 
        id="InputEmail" 
        aria-describedby="emailHelp" 
        placeholder="tuemail@ejemplo.com" 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
    /> 
  </div>
  <div className="mb-3">
    <input 
        type="password" 
        className="form-control" 
        id="InputPass" 
        placeholder="Contraseña"
        onChange={(e)=>setContrasena(e.target.value)}
        value={contrasena}
    />
  </div>
  <div className="mb-3">
    <input 
        type="password" 
        className="form-control" 
        id="InputPassConf" 
        placeholder="Confirmar tu contraseña" 
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
    />
  </div>
  
  <button type="submit" className="btn btn-success">Registrarse</button>
  </form>
</div>
    </>
  )
}
export default Formulario