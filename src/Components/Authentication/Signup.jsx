import { useState } from "react"
import { InputField, ButtonField } from "../Common"
import { useForm } from "react-hook-form"

function Signup() {
    
    const{register, handleSubmit, watch, formState:{errors}, } = useForm();

    const submit = (data) => console.log("Form is submitted", data);

    return (
        <div className="h-screen w-screen flex">

            <div className="banner1">
                <h1 className="text-6xl font-bold">A.S.A.P</h1>
                <p className="mt-6 text-2xl">AI Powered Smart Action Planner</p>
            </div>
            <div className="banner2">
                <h1 className="text-3xl font-bold mb-6">SIGN UP</h1>
                <form className="flex flex-col items-center w-80" onSubmit={handleSubmit(submit)}>
                    <InputField type="text" placeholder="Enter Username" {...register("username",{required:"Username is required"})}/>
                    
                    {errors.username &&<p className="text-red-600 mb-2">{errors.username.message}</p>}

                    <InputField type="email" placeholder="Enter your Email" 
                    {...register("email",{required:"email is required",pattern:{
                        value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message:"Invalid Email format"
                    }})}
                    />

                    {errors.email &&<p className="text-red-600 mb-2">{errors.email.message}</p>}

                    <InputField type="password" placeholder="Enter your Password" 
                    {...register("pwd",{required:"Password is required",pattern:{
                        value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                        message:"Password should be alphanumeric with min of 6 Characters"
                    }})}
                    />
                    
                    {errors.pwd &&<p className="text-red-600 mb-2">{errors.pwd.message}</p>}

                    <InputField type="password" placeholder="Confirm your Password" 
                    {...register("cnfpwd",{required:"Retype the password again",
                        validate: (value) => value === watch("pwd") || "Password must match"
                    })}/>

                    {errors.cnfpwd && <p className="text-red-600 mb-2">{errors.cnfpwd.message}</p>}

                    <ButtonField label="SIGN UP" type="submit"></ButtonField>
                    <hr className="w-80 border-gray-400 my-4" />
                </form>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-gray-700">Already have an account? {" "}
                                <a href="/" className="text-blue-600 hover:underline">
                                    Login
                                </a>
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Signup