import { axios } from "axios"
import { toast } from "react-toastify"
import { useEffect } from "react"


const useFetch = () =>{
    // const [data, useData] = useState("")
    // const [error, useError] = useState("")
    const fetchApi = async () =>{
        try{
            const response = axios.post(`https://smart-attendance-api-75yd.onrender.com/api/v1/account/${url}`)
            toast("Successful")
            


        }catch(error){
            toast("error detected")
        }
        



    }
    useEffect(()=>{
        fetchApi()
        
    },[])
    
}
export default useFetch