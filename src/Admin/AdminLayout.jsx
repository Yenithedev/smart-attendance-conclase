  
  
import Navbar from "@/components/ui/Navbar"
import Sidebar from "@/components/ui/Sidebar"
import { Outlet } from "react-router-dom"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ThermometerSnowflakeIcon } from "lucide-react"



const AdminLayout = () =>{

    const Navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"))
    
    
    useEffect(()=>{
       if (!token){
        Navigate("/login")

       }

    },[token])
    return(
        <div>
            
            <div>
                <Navbar/>
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>

                
            </div>
            <div className={` ${collapsed ? "pl-[100px]" :"pl-[280px]"} p-10`}>
            <Outlet/>
            </div>
            
            
            
            

        </div>
        
    )
}
export default AdminLayout