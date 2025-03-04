function Signup(){
    return(
        <div className="h-screen w-screen flex">

        <div className="banner1">
          <h1 className="text-6xl font-bold">A.S.A.P</h1>
          <p className="mt-6 text-2xl">AI Powered Smart Action Planner</p>
        </div>
        <div className="banner2">
            <h1 className="text-3xl font-bold mb-6">SIGN UP</h1>
            <form className="flex flex-col justify-center w-80">
                <input type="text" 
                placeholder="Enter your Username"
                className="ipt"/>
                <input type="text" 
                placeholder="Enter your Email"
                className="ipt"/>
                <input type="text" 
                placeholder="Enter your Password"
                className="ipt"/>
                <input type="text" 
                placeholder="Confirm your Password"
                className="ipt"/>
                <button className="btn">SIGN UP</button>
                <hr className="w-80 border-gray-400 my-4" />
            </form>
            <div className="flex flex-col items-center gap-4">
                <p className="text-gray-700">Already have an account?</p>
                <button className="btn">
                        Login
                </button>
            </div>
        </div>
            
        </div>
    )
}
export default Signup