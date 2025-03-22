import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputField, ButtonField } from "../Common";
import Google from '../../assets/Google.png';
import MobLog from "../Mobile/MobLog";
import { useEffect, useState } from "react";

function Login() {

    const [isMobile, setIsMobile] = useState(window.innerWidth<768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        }
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize); //clearing the eventListener
        
    },[]);

    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();
    const submit = (data) => {
        console.log("Form Submitter",data)
        navigate("/Dashboard");
    };

    //return staments should place after all hook initialization
    if(isMobile){
        return <MobLog/> ;
    }

    return (
        <div className="h-screen w-screen flex">
            <div className="banner1">
                <h1 className="text-6xl font-bold">A.S.A.P</h1>
                <p className="mt-6 text-2xl">AI Powered Smart Action Planner</p>
            </div>

            <div className="banner2">
                    <>
                        <h1 className="text-3xl font-bold mb-6">LOGIN</h1>
                        <form className="flex flex-col items-center w-80" onSubmit={handleSubmit(submit)}>
                            <InputField {...register("username", {required:"UserName is required"})}
                                type="text"
                                placeholder="Enter Username"
                            />
                            
                            {errors.username && <p className="text-red-600 mb-2">{errors.username.message}</p>}

                            <InputField {...register("pwd",{required:"Password is required",
                                minLength:{
                                    value:6,
                                    message:"Password must be atleast 6 characters"
                                }
                            })}
                                type="password"
                                placeholder="Enter Password"
                            />
                            
                            {errors.pwd && <p className="text-red-600 mb-2">{errors.pwd.message}</p>}

                            <ButtonField type="submit" label="Log In" />
                            <hr className="w-80 border-gray-400 my-4" />
                        </form>

                        <div className="flex flex-col items-center gap-4">
                             <Link to ="/forgot-password">Forgot password?</Link>
                            <ButtonField className="flex items-center justify-center">
                                <img src={Google} alt="" className="w-10 h-10  pt-[3px] inline-block" />
                                <span>Continue with Google</span>
                            </ButtonField>
                            <p className="text-gray-700">
                                Don't have an account?{" "}
                                <Link to = "/sign-up" className="text-blue-600 hover:underline">Sign Up</Link>
                            </p>
                        </div>
                    </>
            </div>
        </div>
    );
}

export default Login;
