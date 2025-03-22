import { InputField, ButtonField } from "../Common";
import { useForm } from "react-hook-form";
import { useState, useEffect} from "react";
import EmailSentImage from "../../assets/EmailSent.jpg"
import MobFrgt from "../Mobile/MobFrgt";

function ForgotPwd (){

    const {register, handleSubmit, formState:{errors}} = useForm();
    const [submitted, setSubmitted] = useState(false);

    const submit = (data) => {
        console.log("Form submitted", data)
        setSubmitted(true);
    };
    
    const [isMobile, setIsMobile] = useState(window.innerWidth<768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        }
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize); //clearing the eventListener
    },[]);

 //return staments should place after all hook initialization
 if(isMobile){
    return <MobFrgt/> ;
}
    return (
        <div className="h-screen w-screen flex">
            <div className="banner1">
                <h1 className="text-6xl font-bold">A.S.A.P</h1>
                <p className="mt-6 text-2xl">AI Powered Smart Action Planner</p>
            </div>
            <div className="banner2">
                {!submitted ?(
                <>
                        <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
                        <form className="flex flex-col" onSubmit={handleSubmit(submit)}>
                            <InputField type="email" placeholder="Enter your Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid Email format"
                                    }
                                })}
                            />

                            {errors.email && <p className="text-red-600 mb-2">{errors.email.message}</p>}

                            <ButtonField label="Reset My Password"></ButtonField>
                        </form>

                </>
                ) : (
                        <div className="text-center">
                            <img
                                src={EmailSentImage}
                                alt="Email Sent"
                                className="w-48 mx-auto"
                            />
                            <h2 className="text-2xl font-semibold mt-4">Check Your Email!</h2>
                            <p className="text-gray-600">We have sent you temporary credentials. Please check your inbox. </p>
                            <p className="text-gray-700 mt-3">Back to {" "}
                                <a href="/" className="text-blue-600 hover:underline">
                                    Login
                                </a>
                            </p>
                        </div>
                )
                }
            </div>
        </div>
    );
}

export default ForgotPwd