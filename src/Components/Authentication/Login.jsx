import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputField, ButtonField } from "../Common";

function Login() {

    const {register, handleSubmit, formState:{errors}} = useForm();

    const submit = (data) => console.log("Form Submitter",data);

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

                            <InputField {...register("pwd",{required:"Password is required"})}
                                type="password"
                                placeholder="Enter Password"
                            />
                            
                            {errors.pwd && <p className="text-red-600 mb-2">{errors.pwd.message}</p>}

                            <ButtonField type="submit" label="Log In" />
                            <hr className="w-80 border-gray-400 my-4" />
                        </form>

                        <div className="flex flex-col items-center gap-4">
                            <a href="/" className="text-gray-700 hover:underline">
                                <Link to ="/forgot-password">Forgot password?</Link>
                            </a>
                            <ButtonField label="Sign in with Google" />
                            <p className="text-gray-700">
                                Don't have an account?{" "}
                                <a href="/" className="text-blue-600 hover:underline">
                                    <Link to = "/sign-up">Sign Up</Link>
                                </a>
                            </p>
                        </div>
                    </>
            </div>
        </div>
    );
}

export default Login;
