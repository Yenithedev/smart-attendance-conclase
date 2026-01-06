import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useNavigate} from "react-router-dom"


const Inputotp = () =>{
    const navigate = useNavigate()
    const handleSubmit =(values)=>{
        navigate("/changepassword")
        



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
            <div className="bg-white/70  backdrop-blur-md p-10 rounded-xl shadow-2xl w-[70%] md:w-[40%] max-w-x">
                <InputOTP className={" content-between"} maxLength={4}>
                    <InputOTPGroup>
                        <InputOTPSlot className={"border border-[#5058E8] lg:w-[80px] lg:h-[80px] mr-3 lg:mr-7"} index={0} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                        <InputOTPSlot  className={"border border-[#5058E8] lg:w-[80px] lg:h-[80px] mr-3 lg:mr-7"} index={1} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                        <InputOTPSlot className={"border border-[#5058E8] lg:w-[80px] lg:h-[80px] mr-3 lg:mr-7"}  index={2} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                        <InputOTPSlot className={"border border-[#5058E8] lg:w-[80px] lg:h-[80px]"} index={3} />
                    </InputOTPGroup>
                </InputOTP>
                <div className="flex justify-center">
                    <button className="bg-blue-800 mt-7 text-white px-6 lg:px-15 py-2 rounded-md shadow hover:bg-blue-700" onClick={handleSubmit}>Confirm OTP</button>

                </div>

            </div> 
            
            
            
  

  
     
  
    
    

  </div>
  

    )
}
export default Inputotp