import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputField, ButtonField } from "../Common";
import Google from "../../assets/Google.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setPassword,
  setUsername,
  togglePasswordVisibility,
} from "../redux/authSlice";
import hide from "../../assets/hide.png";
import visible from "../../assets/visible.png";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { username, password, showPassword } = useSelector(
    (state) => state.auth
  );
  const submit = (data) => {
    dispatch(setUsername(data.username));
    dispatch(setPassword(data.password));
    console.log("Form Submitter", data);
    navigate("/Dashboard");
  };

  return (
    <div className="h-screen w-screen flex">
      <div className="banner1">
        <h1 className="text-6xl font-bold">A.S.A.P</h1>
        <p className="mt-6 text-2xl">AI Powered Smart Action Planner</p>
      </div>

      <div className="banner2">
        <>
          <h1 className="text-3xl font-bold mb-6">LOGIN</h1>
          <form
            className="flex flex-col items-center w-80"
            onSubmit={handleSubmit(submit)}
          >
            {/* Username Field */}
            <div className="relative w-full mt-6">
              <InputField
                {...register("username", { required: "Username is required" })}
                type="text"
                placeholder="Enter Username"
                className="w-full"
              />
              <p className="text-red-600 text-sm mt-1 absolute left-1/2 -translate-x-1/2 -bottom-5 text-center w-full min-h-[20px] whitespace-nowrap overflow-hidden text-ellipsis">
                {errors.username?.message}
              </p>
            </div>

            {/* Password Field */}
            <div className="relative w-full mt-6">
              <InputField
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type={showPassword.password ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full pr-10"
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

            <ButtonField type="submit" label="Log In" className="mt-6" />
            <hr className="w-80 border-gray-400 my-4" />
          </form>

          <div className="flex flex-col items-center gap-4">
            <Link
              to="/forgot-password"
              className="text-gray-700 hover:underline"
            >
              Forgot password?
            </Link>
            <ButtonField className="flex items-center justify-center">
              <img
                src={Google}
                alt="Google logo"
                className="w-10 h-10  pt-[3px] inline-block"
              />
              <span>Continue with Google</span>
            </ButtonField>
            <p className="text-gray-700">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </>
      </div>
    </div>
  );
}

export default Login;
