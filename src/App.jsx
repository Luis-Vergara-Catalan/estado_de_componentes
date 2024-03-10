import './App.css'
import React, { useState } from 'react'
import Registro from './components/Registro'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [alert, setAlert] = useState ({msg:'',color:''})
  return (
    <>
      <Registro alert={alert} setAlert={setAlert}/>
    </>
  )
}

export default App
