import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom"

const Emailforotp = () => {
    const navigate = useNavigate()
    
    const initialValues = {
        email: ""
    }
    
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required")
    })

    const handleSubmit = (values) => {
        navigate("/inputotp")
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
                        <h1 className="block text-center text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black mb-5 sm:mb-6">
                            Enter your Email to get OTP
                        </h1>
                        <Field
                            className="w-full border border-black rounded-md p-2 sm:p-2.5 mt-1 mb-3"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                        />
                        <ErrorMessage
                            className="text-red-500 ml-3 text-xs sm:text-sm"
                            name="email"
                            component="div"
                        />
                    </div>
                    
                    <div className="flex justify-center mt-5">
                        <button
                            className="bg-blue-800 text-white px-8 sm:px-10 lg:px-15 py-2 rounded-md shadow hover:bg-blue-700 text-sm sm:text-base"
                            type="submit"
                        >
                            Get OTP
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default Emailforotp