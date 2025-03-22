"use client";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputField, ButtonField } from "../Common";
import Google from '../../assets/Google.png';

function MobLog() {

    const text = "ASAP";

    const [visibleText, setVisibleText] = useState("");
    const [showLogin, setShowLogin] = useState(false);
    const [animateUp, setAnimateUp] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();//handling form validation
    const navigate = useNavigate();

    const submit = (data) => {
        console.log("Form is submitted", data)
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
                    setTimeout(() => setShowLogin(true), 1500); // CMS: Show login smoothly after movement
                }, 1500);
            }
        }, 300);
        return () => clearInterval(interval); //clearing Interval 
    }, []);

    return (
        <div className="fixed inset-0 flex flex-col bg-black justify-center items-center min-h-screen overflow-y-auto px-4">
            {/* ASAP Logo Animation - Moves Up Smoothly */}
            <motion.h1
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: showLogin ? -50 : 0 }} // Moves up when login appears
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-white text-6xl md:text-7xl font-bold"
            >
                {visibleText}
            </motion.h1>

            {/* Login Form (Appears Smoothly After 1s) */}
            {showLogin && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="bg-white p-6 md:p-8 shadow-lg mt-4 w-full max-w-sm md:max-w-md"
                >
                    <div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">LOGIN</h1>
                            <form className="flex flex-col items-center" onSubmit={handleSubmit(submit)}>
                                <InputField {...register("username", { required: "UserName is required" })}
                                    type="text"
                                    placeholder="Enter Username"
                                />
                                {errors.username && <p className="text-red-600 mb-2">{errors.username.message}</p>}

                                <InputField {...register("pwd", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                                    type="password"
                                    placeholder="Enter Password"
                                />
                                {errors.pwd && <p className="text-red-600 mb-2">{errors.pwd.message}</p>}

                                <ButtonField type="submit" label="Log In" />
                                <hr className="w-full border-gray-400 my-4" />
                            </form>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <Link to="/forgot-password">Forgot password?</Link>
                            <ButtonField className="flex items-center justify-center">
                                <img src={Google} alt="" className="w-10 h-10  pt-[3px] inline-block" />
                                <span>Continue with Google</span>
                            </ButtonField>
                            <p className="text-gray-700">
                                Don't have an account?{" "}
                                <Link to="/sign-up">Sign Up</Link>
                            </p>
                        </div>
                    </div>

                </motion.div>
            )}
        </div>
    );
}

export default MobLog;