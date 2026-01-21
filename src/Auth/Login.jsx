import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import axios from "axios"
import { toast } from "react-toastify"
import { BASE_URL } from "@/Apiconfig"

const Login = () => {
    const navigate = useNavigate()
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#._-])[A-Za-z\d@$!%*?&#._-]{8,}$/
    const [showPassword, setShowPassword] = useState(false)
    const [accessToken,setAccessToken] = useState("")
    const initialValues = {
        email: "",
        password: "",
    }
    
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .matches(passwordRegex, "Invalid password format")
            .required("password is required")
    })

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post(
                `${BASE_URL}account/login`,
                values
            )
            console.log(response)
            // setAccessToken(response.data.data.accessToken)
            localStorage.setItem("token",response.data.data.accessToken)
            setAccessToken(response.data.data.accessToken)
            toast.success("Login sucessful")
            navigate("/admin")
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
     

    return (
        <div className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative px-4 sm:px-6">
            <div
                className="
                    absolute inset-0 
                    bg-[url('assets/imagebackground.jpg')]
                    bg-cover bg-center
                "
            ></div>
            <div
                className="
                    absolute inset-0 
                    bg-gradient-to-br 
                    from-indigo-900/70 
                    via-indigo-800/40 
                    to-purple-600/20
                    mix-blend-multiply
                "
            ></div>
            
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="bg-white/70 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl w-full sm:w-[85%] md:w-[70%] lg:w-[40%] max-w-xl relative z-10">
                    <div className="mb-4">
                        <label className="block text-sm lg:text-lg pl-2 font-medium text-black">
                            Email
                        </label>
                        <Field
                            className="w-full border border-black rounded-md p-2 mt-1"
                            name="email"
                            type="email"
                        />
                        <ErrorMessage
                            className="text-red-500 ml-3 text-xs sm:text-sm"
                            name="email"
                            component="div"
                        />
                    </div>
                    
                    <div className="mb-4 relative">
                        <label className="block text-sm lg:text-lg pl-2 font-medium text-black">
                            Password
                        </label>
                        <div className="relative">
                            <Field
                                className="w-full border border-black rounded-md p-2 mt-1 pr-10"
                                name="password"
                                type={showPassword ? "text" : "password"}
                            />
                            <span
                                className="absolute right-3 top-1/2 -translate-y-1/2 mt-0.5 cursor-pointer text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </span>
                        </div>
                        <ErrorMessage
                            className="text-red-500 ml-3 text-xs sm:text-sm"
                            name="password"
                            component="div"
                        />
                    </div>
                    
                    <div className="flex justify-end mt-4 mb-3">
                        <Link
                            className="text-xs sm:text-sm text-black hover:underline"
                            to={"/emailforotp"}
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    
                    <div className="flex justify-center">
                        <button
                            className="bg-blue-800 text-white px-8 sm:px-10 lg:px-15 py-2 rounded-md shadow hover:bg-blue-700 text-sm sm:text-base"
                            type="submit"
                        >
                            Sign in
                        </button>
                    </div>
                    
                    <div className="mt-6 text-center text-xs sm:text-sm text-gray-700">
                        Don't have an account?{" "}
                        <Link className="text-blue-700 hover:underline" to={"/signup"}>
                            Register here
                        </Link>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default Login