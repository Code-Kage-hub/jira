function ForgotPwd (){
    return (
        <div className="h-screen w-screen flex">
            <div className="banner1">
                <h1 className="text-6xl font-bold">A.S.A.P</h1>
                <p className="mt-6 text-2xl">AI Powered Smart Action Planner</p>
            </div>
            <div className="banner2">
                <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
                <form className="flex flex-col">
                    <input type="text" 
                    placeholder="Enter your email"
                    className="ipt"/>
                    <button className="btn">Reset My Password</button>
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