import { Routes,Route } from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import Login from "./Auth/Login"
import Dashboard from "./Admin/Dashboard"
import Signup from "./Auth/Signup"
import Emailforotp from "./Auth/Emailforotp"
import Inputotp from "./Auth/Inputotp"
import Changepassword from "./Auth/Changepassword"
import Staff from "./Admin/Staff"
import AdminLayout from "./Admin/AdminLayout"
import SystemSettings from "./Admin/SystemSettings"
import Qrcode from "./Admin/Qrcode"
import Attendance from "./Admin/Attendance"
import Reports from "./Admin/Reports"
import Home from "./Home";
import Nopage from "./Nopage";


const App = () =>{
  return(
    <>
    <ToastContainer />
    

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/emailforotp" element={<Emailforotp/>}/>
      <Route path="/inputotp" element={<Inputotp/>}/>
      <Route path="*" element={<Nopage/>}/>
      <Route path="/changepassword" element={<Changepassword/>}/>
      <Route path="/staff" element={<Staff/>}/>

      {/* Admin outlet */}
      <Route path="admin" element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="attendance" element={<Attendance/>}/>
        <Route path="qrcode" element={<Qrcode/>}/>
        <Route path="reports" element={<Reports/>}/>
        <Route path="systemsettings" element={<SystemSettings/>}/>
        <Route path="staff" element={<Staff/>}/>
        

      </Route>
    </Routes>
    </>
    
  )
}
export default App