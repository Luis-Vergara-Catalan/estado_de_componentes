import React, { useState } from 'react'
import Formulario from './Formulario'
import Alert from './Alert'


const Registro =({alert, setAlert})=> {
    
  return (
    <>
    <Formulario setAlert={setAlert}/>
    {alert.msg !=='' && <Alert msg={alert.msg} color={alert.color}/>}
    </>
  )
}
export default Registro