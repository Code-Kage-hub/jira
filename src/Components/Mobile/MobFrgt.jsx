"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputField, ButtonField } from "../Common";
import EmailSentImage from "../../assets/EmailSent.jpg"

function MobFrgt() {
    const text = "ASAP";

    const [visibleText, setVisibleText] = useState("");
    const [showLogin, setShowLogin] = useState(false);
    const [animateUp, setAnimateUp] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();//handling form validation

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

    const submit = (data) => {
        console.log("Form submitted", data)
        setSubmitted(true);
    };

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
                        {!submitted ? (
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Forgot Password</h1>
                                <form className="flex flex-col items-center" onSubmit={handleSubmit(submit)}>
                                    <InputField type="email" placeholder="Enter your Email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: "Invalid Email format"
                                            }
                                        })}
                                        className="!mb-3"
                                    />

                                    {errors.email && <p className="text-red-600 mb-2">{errors.email.message}</p>}

                                    <ButtonField label="Reset My Password" className="w-full !py-3"></ButtonField>
                                </form>

                            </div>
                        ) : (
                            <div className="bg-white shadow-lg rounded-lg py-16 px-8 md:py-20 md:px-12 lg:py-24 text-center w-full max-w-xl mx-auto">
                                <img
                                    src={EmailSentImage}
                                    alt="Email Sent"
                                    className="w-72 md:w-80 lg:w-96 mx-auto"
                                />
                                <h2 className="text-4xl font-bold mt-8">Check Your Email!</h2>
                                <p className="text-lg font-semibold text-gray-700 text-center mt-4">
                                    We have sent you temporary credentials. Please check your inbox.
                                </p>
                                <p className="text-xl font-semibold text-gray-800 mt-6">
                                    Back to {" "}
                                    <a href="/" className="text-blue-600 font-bold hover:underline">
                                        Login
                                    </a>
                                </p>
                            </div>

                        )
                        }
                    </div>

                </motion.div>
            )}
        </div>
    );
}

export default MobFrgt;