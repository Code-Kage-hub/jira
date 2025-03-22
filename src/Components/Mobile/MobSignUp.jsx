"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputField, ButtonField } from "../Common";
import Google from '../../assets/Google.png';
import { useNavigate } from "react-router-dom";

function MobSignUp() {

    const text = "ASAP";

    const [visibleText, setVisibleText] = useState("");
    const [showLogin, setShowLogin] = useState(false);
    const [animateUp, setAnimateUp] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();//handling form validation

    const submit = (data) => {
        console.log("Form submitted", data)
        navigate("/Dashboard");
    };

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setVisibleText(text.slice(0, index + 1)); // Typing effect
                index++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setAnimateUp(true); // CMS: Move text up only after a delay
                    setTimeout(() => setShowLogin(true), 1000); // CMS: Show login smoothly after movement
                }, 1000);
            }
        }, 300);
        return () => clearInterval(interval); //clearing Interval 
    }, []);


    return (
        <div className="fixed inset-0 flex flex-col bg-black justify-center items-center min-h-screen overflow-hidden px-4">
            {/* ASAP Logo Animation - Moves Up Smoothly */}
            <motion.h1
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: showLogin ? -50 : 0 }} // Moves up when login appears
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-white text-6xl md:text-7xl font-bold"
            >
                {visibleText}
            </motion.h1>

            {showLogin && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="bg-white p-6 md:p-8 shadow-lg mt-4 w-full max-w-sm md:max-w-md"
                >
                    <div>
                        <div>
                            <h1 className="text-3xl font-bold mb-6 text-center">Create an Account</h1>
                            <form className="flex flex-col items-center w-full max-w-sm" onSubmit={handleSubmit(submit)}>
                                <InputField type="text" placeholder="Enter Username" {...register("username", { required: "Username is required" })} />

                                {errors.username && <p className="text-red-600 mb-2">{errors.username.message}</p>}

                                <InputField type="email" placeholder="Enter your Email"
                                    {...register("email", {
                                        required: "email is required", pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Invalid Email format"
                                        }
                                    })}
                                />

                                {errors.email && <p className="text-red-600 mb-2">{errors.email.message}</p>}

                                <InputField type="password" placeholder="Enter your Password"
                                    {...register("pwd", {
                                        required: "Password is required", pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                            message: "Password should be alphanumeric with min of 6 Characters"
                                        }
                                    })}
                                />

                                {errors.pwd && <p className="text-red-600 mb-2">{errors.pwd.message}</p>}

                                <InputField type="password" placeholder="Confirm your Password"
                                    {...register("cnfpwd", {
                                        required: "Retype the password again",
                                        validate: (value) => value === watch("pwd") || "Password must match"
                                    })} />

                                {errors.cnfpwd && <p className="text-red-600 mb-2">{errors.cnfpwd.message}</p>}

                                <ButtonField label="SIGN UP" type="submit"></ButtonField>
                                <hr className="w-80 border-gray-400 my-4" />
                            </form>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <ButtonField className="flex items-center justify-center w-full">
                                <img src={Google} alt="" className="w-10 h-10  pt-[3px] inline-block" />
                                <span>Sign up with Google</span>
                            </ButtonField>
                            <p className="text-gray-700">Already have an account? {" "}
                                <a href="/" className="text-blue-600 hover:underline">
                                    Login
                                </a>
                            </p>
                        </div>
                    </div>

                </motion.div>
            )}
        </div>
    );
}

export default MobSignUp