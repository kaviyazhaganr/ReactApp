
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

          <NavLink className="Home" to="/" >Appointment</NavLink>

          <NavLink className="Home" to="/doctor" >Doctor</NavLink>

          <NavLink className="Home" to="/patients" >Patients</NavLink>
        </div>
      </div>


      <Routes>

        <Route path="/" element={<Appointment />} />

        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patients" element={<Patients />} />
      </Routes>
    </>
  )
}

export default App
