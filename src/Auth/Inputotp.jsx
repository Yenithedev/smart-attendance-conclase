import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useNavigate } from "react-router-dom"

const Inputotp = () => {
    const navigate = useNavigate()
    
    const handleSubmit = (values) => {
        navigate("/changepassword")
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
            
            <div className="bg-white/70 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl w-full sm:w-[85%] md:w-[70%] lg:w-[40%] max-w-xl relative z-10">
                
                
                <div className="flex justify-center mb-4">
                    <InputOTP className="flex justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-7" maxLength={4}>
                        <InputOTPGroup>
                            <InputOTPSlot 
                                className="border border-[#5058E8] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-lg sm:text-xl md:text-2xl" 
                                index={0} 
                            />
                        </InputOTPGroup>
                        <InputOTPGroup>
                            <InputOTPSlot  
                                className="border border-[#5058E8] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-lg sm:text-xl md:text-2xl" 
                                index={1} 
                            />
                        </InputOTPGroup>
                        <InputOTPGroup>
                            <InputOTPSlot 
                                className="border border-[#5058E8] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-lg sm:text-xl md:text-2xl"  
                                index={2} 
                            />
                        </InputOTPGroup>
                        <InputOTPGroup>
                            <InputOTPSlot 
                                className="border border-[#5058E8] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-lg sm:text-xl md:text-2xl" 
                                index={3} 
                            />
                        </InputOTPGroup>
                    </InputOTP>
                </div>

                <div className="flex justify-center mt-6">
                    <button 
                        className="bg-blue-800 text-white px-8 sm:px-10 lg:px-15 py-2 rounded-md shadow hover:bg-blue-700 text-sm sm:text-base" 
                        onClick={handleSubmit}
                    >
                        Confirm OTP
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Inputotp