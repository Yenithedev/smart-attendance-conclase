import { axios } from "axios"
import { toast } from "react-toastify"
import { useEffect } from "react"


const usePost = () =>{
    // const [data, useData] = useState("")
    // const [error, useError] = useState("")
    const postApi = async () =>{
        try{
            const response = axios.post(`https://smart-attendance-api-75yd.onrender.com/api/v1/account/${url}`,data)
            toast("Successful")
            


        }catch(error){
            toast("error detected")
        }
        



    }
    useEffect(()=>{
        postApi()
        
    },[])
    
}
export default usePost