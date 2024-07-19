
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Appointment from './Components/Appointment/Appointment'
import Doctor from './Components/Doctor/Doctor'
import Patients from './Components/Patients/Patients'

// import Patients from './components/Patients/Patients'

function App() {


  return (
    <>

      <div className="container contt">

        <h1>GFG-Hospital Management App</h1>

        <div className='nav'>

          <NavLink className="Home" to="/reactapp" >Appointment</NavLink>

          <NavLink className="Home" to="/reactapp/doctor" >Doctor</NavLink>

          <NavLink className="Home" to="/reactapp/patients" >Patients</NavLink>
        </div>
      </div>


      <Routes>

        <Route path="/reactapp" element={<Appointment />} />

        <Route path="/reactapp/doctor" element={<Doctor />} />
        <Route path="/reactapp/patients" element={<Patients />} />
      </Routes>
    </>
  )
}

export default App
