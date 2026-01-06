import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

const ChangePassword = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#._-])[A-Za-z\d@$!%*?&#._-]{8,}$/
    
    const initialValues = {
        password: "",
        confirmPassword: ""
    }
    
    const validationSchema = Yup.object({
        password: Yup.string()
            .matches(passwordRegex, "Invalid password format")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required("Confirm password is required")
    })

    const handleSubmit = (values) => {
        navigate("/login")
        console.log(values)
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
                    <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
                        Change Password
                    </h2>
                    
                    {/* New Password */}
                    <div className="mb-4 relative">
                        <label className="block text-sm lg:text-lg pl-2 font-medium text-black">
                            Enter New Password
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
                    
                    {/* Confirm Password */}
                    <div className="mb-4 relative">
                        <label className="block text-sm lg:text-lg pl-2 font-medium text-black">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <Field
                                className="w-full border border-black rounded-md p-2 mt-1 pr-10"
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                            />
                            <span
                                className="absolute right-3 top-1/2 -translate-y-1/2 mt-0.5 cursor-pointer text-gray-600"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </span>
                        </div>
                        <ErrorMessage
                            className="text-red-500 ml-3 text-xs sm:text-sm"
                            name="confirmPassword"
                            component="div"
                        />
                    </div>
                    
                    <div className="flex justify-center mt-5">
                        <button
                            className="bg-blue-800 text-white px-8 sm:px-10 lg:px-15 py-2 rounded-md shadow hover:bg-blue-700 text-sm sm:text-base"
                            type="submit"
                        >
                            Confirm
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ChangePassword