import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import { useState, useEffect } from "react"
import { Eye, EyeOff } from "lucide-react"
import { BASE_URL } from "@/Apiconfig"

const Signup = () => {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [departments, setDepartments] = useState([])
  const [loadingDepartments, setLoadingDepartments] = useState(true)

  const phoneRegex = /^\+\(?\d{1,4}\)?\d{7,15}$/
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#._-])[A-Za-z\d@$!%*?&#._-]{8,}$/

  const initialValues = {
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    comfirmPassword: "",
    departmentId: "",
  }

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(2, "Full Name must be at least 2 characters")
      .required("Full name is required"),

    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(phoneRegex, "This is not a valid number"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .matches(passwordRegex, "Invalid password format")
      .required("Password is required"),

    comfirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),

    departmentId: Yup.string()
      .required("Department is required"),
  })

  // Fetch departments on component mount
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}departments`
        )
        setDepartments(response.data.data)
        setLoadingDepartments(false)
      } catch (error) {
        toast.error("Failed to load departments")
        setLoadingDepartments(false)
        console.log(error)
      }
    }

    fetchDepartments()
  }, [])

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        `${BASE_URL}account/register`,
        values
      )

      toast.success("Signup successful")
      console.log(response.data)
      navigate("/login")
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed")
      console.log(error.response?.data?.message)
    }
  }

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative px-4 sm:px-6 py-8">
      <div className="absolute inset-0 bg-[url('assets/imagebackground.jpg')] bg-cover bg-center"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-indigo-800/40 to-purple-600/20 mix-blend-multiply"></div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white/70 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl w-full sm:w-[85%] md:w-[70%] lg:w-[40%] max-w-xl max-h-[90vh] overflow-y-auto relative z-10">
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm lg:text-lg pl-2 font-medium text-black">
              Full Name
            </label>
            <Field
              className="w-full border border-black rounded-md p-2 mt-1"
              name="fullName"
              type="text"
            />
            <ErrorMessage
              className="text-red-500 ml-3 text-xs sm:text-sm"
              name="fullName"
              component="div"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm lg:text-lg pl-2 font-medium text-black">
              Phone Number
            </label>
            <Field
              className="w-full border border-black rounded-md p-2 mt-1"
              name="phoneNumber"
              type="tel"
            />
            <ErrorMessage
              className="text-red-500 ml-3 text-xs sm:text-sm"
              name="phoneNumber"
              component="div"
            />
          </div>

          {/* Email */}
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

          {/* Department */}
          <div className="mb-4">
            <label className="block text-sm lg:text-lg pl-2 font-medium text-black">
              Department
            </label>
            <Field
              as="select"
              className="w-full border border-black rounded-md p-2 mt-1"
              name="departmentId"
              disabled={loadingDepartments}
            >
              <option value="">
                {loadingDepartments ? "Loading..." : "Select a department"}
              </option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </Field>
            <ErrorMessage
              className="text-red-500 ml-3 text-xs sm:text-sm"
              name="departmentId"
              component="div"
            />
          </div>

          {/* Password */}
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

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label className="block text-sm lg:text-lg pl-2 font-medium text-black">
              Confirm Password
            </label>
            <div className="relative">
              <Field
                className="w-full border border-black rounded-md p-2 mt-1 pr-10"
                name="comfirmPassword"
                type={showConfirmPassword ? "text" : "password"}
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 mt-0.5 cursor-pointer text-gray-600"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </span>
            </div>
            <ErrorMessage
              className="text-red-500 ml-3 text-xs sm:text-sm"
              name="comfirmPassword"
              component="div"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="bg-blue-800 text-white px-8 sm:px-10 lg:px-15 py-2 rounded-md shadow hover:bg-blue-700 text-sm sm:text-base"
            >
              Sign up
            </button>
          </div>

          <div className="mt-6 text-center text-xs sm:text-sm text-gray-700">
            Already have an account?
            <Link
              className="text-blue-700 hover:underline ml-1"
              to="/login"
            >
              Login here
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Signup