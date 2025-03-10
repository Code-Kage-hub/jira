import { InputField, ButtonField } from "./Common"
import { useForm } from "react-hook-form"

function ForgotPwd (){

    const {register, handleSubmit, formState:{errors}} = useForm();

    const submit = (data) => console.log("Form submitted", data);

    return (
        <div className="h-screen w-screen flex">
            <div className="banner1">
                <h1 className="text-6xl font-bold">A.S.A.P</h1>
                <p className="mt-6 text-2xl">AI Powered Smart Action Planner</p>
            </div>
            <div className="banner2">
                <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
                <form className="flex flex-col" onSubmit ={handleSubmit(submit)}>
                    <InputField type="email" placeholder="Enter your Email" 
                    {...register("email", {required:"Email is required",
                        pattern:{
                            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message:"Invalid Email format"
                        }
                    })}
                    />

                    {errors.email && <p className="text-red-600 mb-2">{errors.email.message}</p>}

                    <ButtonField label="Reset My Password"></ButtonField>
                    <hr className="w-80 border-gray-400 my-4" />
                </form>
                <div className="flex flex-col items-center gap-4">
                <p className="text-gray-700">
                       Back to{" "}
                        <a href="/" className="text-blue-600 hover:underline">
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPwd