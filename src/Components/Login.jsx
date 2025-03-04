function Login() {
    return (
        <div className="h-screen w-screen flex">
            <div className="banner1">
                <h1 className="text-6xl font-bold">A.S.A.P</h1>
                <p className="mt-6 text-2xl">AI Powered Smart Action Planner</p>
            </div>
            <div className="banner2">
                <h1 className="text-3xl font-bold mb-6">LOGIN</h1>
                <form className="flex flex-col items-center w-80">
                    <input
                        type="text"
                        placeholder="Enter Username"
                        className="ipt"
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="ipt"
                    />
                    <button className="btn">
                        Log In
                    </button>
                    <hr className="w-80 border-gray-400 my-4" />
                </form>
                <div className="flex flex-col items-center gap-4">
                    <a href="/" className="text-gray-700 hover:underline">
                        Forgot password?
                    </a>
                    <button className="btn">
                        Sign In with Google
                    </button>
                    <p className="text-gray-700">
                        Don't have an account?{" "}
                        <a href="/" className="text-blue-600 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login