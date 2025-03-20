import { InputField, ButtonField } from "../Common";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Google from "../../assets/Google.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
  setUsername,
  togglePasswordVisibility,
} from "../redux/authSlice";
import hide from "../../assets/hide.png";
import visible from "../../assets/visible.png";
import { DevTool } from "@hookform/devtools";

function Signup() {
  const dispatch = useDispatch();
  const { username, email, password, confirmPassword, showPassword } =
    useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    console.log("Form is submitted", data);
    dispatch(setUsername(data.username));
    dispatch(setEmail(data.email));
    dispatch(setPassword(data.password));
    navigate("/");
  };

  return (
    <div className="h-screen w-screen flex">
      <div className="banner1">
        <h1 className="text-6xl font-bold">A.S.A.P</h1>
        <p className="mt-6 text-2xl">AI Powered Smart Action Planner</p>
      </div>
      <div className="banner2">
        <h1 className="text-3xl font-bold mb-6">Create an Account</h1>
        <form
          className="flex flex-col items-center w-80"
          onSubmit={handleSubmit(submit)}
        >
          {/* username field  */}
          <div className="relative w-full">
            <InputField
              type="text"
              placeholder="Enter Username"
              {...register("username", { required: "Username is required" })}
            />

            <p className="text-red-600 text-sm mt-1 absolute left-1/2 -translate-x-1/2 -bottom-5 text-center w-full min-h-[20px] whitespace-nowrap overflow-hidden text-ellipsis">
              {errors.username?.message}
            </p>
          </div>

          {/* email field  */}
          <div className="relative w-full mt-6">
            <InputField
              type="email"
              placeholder="Enter your Email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid Email format",
                },
              })}
            />

            <p className="text-red-600 text-sm mt-1 absolute left-1/2 -translate-x-1/2 -bottom-5 text-center w-full min-h-[20px] whitespace-nowrap overflow-hidden text-ellipsis">
              {errors.email?.message}
            </p>
          </div>

          {/* password field  */}
          <div className="relative w-full mt-6">
            <InputField
              type={showPassword.password ? "text" : "password"}
              placeholder="Enter your Password"
              className="w-full pr-10"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  message:
                    "Password should be alphanumeric with min of 6 Characters",
                },
              })}
            />
            <img
              src={showPassword.password ? visible : hide}
              alt={showPassword.password ? "Hide Password" : "Show Password"}
              className="absolute right-3 top-[45%] transform -translate-y-1/2 w-5 h-5 cursor-pointer 
                           hover:opacity-75 hover:scale-110 transition-all duration-200"
              onClick={() => dispatch(togglePasswordVisibility("password"))}
            />

            <p className="text-red-600 text-sm mt-1 absolute left-1/2 -translate-x-1/2 -bottom-5 text-center w-full min-h-[20px] whitespace-nowrap overflow-hidden text-ellipsis">
              {errors.password?.message}
            </p>
          </div>

          {/* confirm password field  */}
          <div className="relative w-full mt-6">
            <InputField
              type={showPassword.confirmPassword ? "text" : "password"}
              placeholder="Confirm your Password"
              {...register("cnfpassword", {
                required: "Retype the password again",
                validate: (value) =>
                  value === watch("password") || "Password must match",
              })}
            />
            <img
              src={showPassword.confirmPassword ? visible : hide}
              alt={
                showPassword.confirmPassword ? "Hide Password" : "Show Password"
              }
              className="absolute right-3 top-[45%] transform -translate-y-1/2 w-5 h-5 cursor-pointer 
                           hover:opacity-75 hover:scale-110 transition-all duration-200"
              onClick={() =>
                dispatch(togglePasswordVisibility("confirmPassword"))
              }
            />
            <p className="text-red-600 text-sm mt-1 absolute left-1/2 -translate-x-1/2 -bottom-5 text-center w-full min-h-[20px] whitespace-nowrap overflow-hidden text-ellipsis">
              {errors.cnfpassword?.message}
            </p>
          </div>

          <ButtonField
            label="SIGN UP"
            type="submit"
            className="mt-6"
          ></ButtonField>
          <hr className="w-80 border-gray-400 my-4" />
        </form>
        <div className="flex flex-col items-center gap-4">
          <ButtonField className="flex items-center justify-center">
            <img
              src={Google}
              alt="Google logo"
              className="w-10 h-10  pt-[3px] inline-block"
            />
            <span>Sign up with Google</span>
          </ButtonField>
          <p className="text-gray-700">
            Already have an account?{" "}
            <a href="/" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
        <DevTool control={control} />
      </div>
    </div>
  );
}
export default Signup;
