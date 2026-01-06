  
  
import Navbar from "@/components/ui/Navbar"
import Sidebar from "@/components/ui/Sidebar"
import { Outlet } from "react-router-dom"
import { useState } from "react"



const AdminLayout = () =>{
    const [collapsed, setCollapsed] = useState(false);
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