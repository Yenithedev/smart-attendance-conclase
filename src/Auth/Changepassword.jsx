import {  Form, Formik, Field, ErrorMessage  } from "formik"
import * as Yup from "yup"
import { useNavigate} from "react-router-dom"



const changepassword =()=>{
    const navigate= useNavigate()
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#._-])[A-Za-z\d@$!%*?&#._-]{8,}$/
    const initialValues ={
        password:"",
        confirmPassword:""
    }
    const validationSchema = Yup.object({
        password:Yup.string()
        .matches(passwordRegex,"Invalid password format")
        .required("password is required"),
        confirmPassword:Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required("Confirm password is required")
    })
    


    const handleSubmit =(values)=>{
        navigate("/login")
        console(values)
        



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
                        <label className="block text-sm lg:text-lg pl-2  font-medium text-black">Enter New Password</label>
                        <Field className="w-full border border-black rounded-md p-2 mt-1" name="password" type="password"/>
                        <ErrorMessage className="text-red-500 ml-3" name="password" component="div"/>
                    </div>
                    <div>
                        <label className="block text-sm lg:text-lg pl-2  font-medium text-black">Confirm Password</label>
                        <Field className="w-full border border-black rounded-md p-2 mt-1" name="confirmPassword" type="password"/>
                        <ErrorMessage className="text-red-500 ml-3" name="confirmPassword" component="div"/>
                    </div>
                    <div className="flex justify-center mt-5">
                        <button className="bg-blue-800 text-white px-6 lg:px-15 py-2 rounded-md shadow hover:bg-blue-700" type="submit">Confirm</button>

                    </div>
                </Form>

            </Formik>
            
  

  
     
  
    
    

  </div>   

            

        
        
      
        
    
    )

}
export default changepassword