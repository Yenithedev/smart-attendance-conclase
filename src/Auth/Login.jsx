import {  Form, Formik, Field, ErrorMessage  } from "formik"
import * as Yup from "yup"
import { Link, useNavigate} from "react-router-dom"
import { useState } from "react"
import { Eye,EyeOff } from "lucide-react"
import axios from "axios"
import { toast } from "react-toastify"



const Login =()=>{
    const navigate= useNavigate()
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#._-])[A-Za-z\d@$!%*?&#._-]{8,}$/
    const [showPassword,setShowPassword] = useState(false)
    const initialValues ={
        email:"",
        password:"",
    }
    const validationSchema = Yup.object({
        email:Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
        password:Yup.string()
        .matches(passwordRegex,"Invalid password format")
        .required("password is required")
    })
    


    const handleSubmit = async (values)=>{
        try{
            const response = await axios.post("https://smart-attendance-api-75yd.onrender.com/api/v1/account/login",values)
             toast.success("Login sucessful")
             navigate("/admin")

            }catch(error){
                toast.error(error?.response?.data?.message)
            }
        



    }


    return(
        <div className="h-screen w-full bg-cover bg-center flex items-center justify-center relative">
             <div
                className="
                absolute inset-0 
                bg-[url('assets/imagebackground.jpg')]
                bg-cover bg-center
                "></div>
            <div
                className="
                absolute inset-0 
                bg-gradient-to-br 
                from-indigo-900/70 
                via-indigo-800/40 
                to-purple-600/20
                mix-blend-multiply">
            </div> 
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                >
                <Form className="bg-white/70 backdrop-blur-md p-10 rounded-xl shadow-2xl w-[70%] md:w-[40%] max-w-x" >
                    <div>
                        <label className="block text-sm lg:text-lg pl-2  font-medium text-black">Email</label>
                        <Field className="w-full border border-black rounded-md p-2 mt-1 " name="email" type="email"/>
                        <ErrorMessage className="text-red-500 ml-3" name="email" component="div"/>
                    </div>
                    <div>
                        <label className="block text-sm lg:text-lg pl-2  font-medium text-black">Password</label>
                        <Field className="w-full border border-black rounded-md p-2 mt-1" name="password" type={showPassword ? "text" : "password"}/>
                        <span 
                        className="absolute right-12 top-[140px] lg:right-12 lg:top-[155px] cursor-pointer text-gray-600"
                        onClick={()=>setShowPassword(!showPassword)}
                        > {showPassword ? (<EyeOff/>) : (<Eye/>)}</span>
                        <ErrorMessage className="text-red-500 ml-3" name="password" component="div"/>
                    </div>
                    <div className="flex right justify-end mt-4 mb-3">
                        <Link className="text-sm text-black hover:underline" to={"/emailforotp"}>Forgot Password?</Link>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-800 text-white px-6 lg:px-15 py-2 rounded-md shadow hover:bg-blue-700" type="submit">Sign in</button>

                    </div>
                    <div className="mt-6 text-center text-sm text-gray-700">Don’t have an account?<Link className="text-blue-700 hover:underline" to={"/signup"}>Register here</Link></div>
                </Form>

            </Formik>
            
  

  
     
  
    
    

  </div>   

            

        
        
      
        
    
    )

}
export default Login