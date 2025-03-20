import { InputField, ButtonField } from "../Common";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Google from "../../assets/Google.png";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setUsername } from "../redux/authSlice";

function Signup() {
  const dispatch = useDispatch();
  const { username, email, password, confirmPassword, showPassword } =
    useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    console.log("Form is submitted", data);
    dispatch(setUsername(data.username));
    dispatch(setEmail(data.email));
    dispatch(setPassword(data.password));
    navigate("/Dashboard");
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
          <InputField
            type="text"
            placeholder="Enter Username"
            {...register("username", { required: "Username is required" })}
          />

          {errors.username && (
            <p className="text-red-600 mb-2">{errors.username.message}</p>
          )}

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

          {errors.email && (
            <p className="text-red-600 mb-2">{errors.email.message}</p>
          )}

          <InputField
            type="password"
            placeholder="Enter your Password"
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

          {errors.password && (
            <p className="text-red-600 mb-2">{errors.password.message}</p>
          )}

          <InputField
            type="password"
            placeholder="Confirm your Password"
            {...register("cnfpassword", {
              required: "Retype the password again",
              validate: (value) =>
                value === watch("password") || "Password must match",
            })}
          />

          {errors.cnfpassword && (
            <p className="text-red-600 mb-2">{errors.cnfpassword.message}</p>
          )}

          <ButtonField label="SIGN UP" type="submit"></ButtonField>
          <hr className="w-80 border-gray-400 my-4" />
        </form>
        <div className="flex flex-col items-center gap-4">
          <ButtonField className="flex items-center justify-center">
            <img
              src={Google}
              alt=""
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
      </div>
    </div>
  );
}
export default Signup;
