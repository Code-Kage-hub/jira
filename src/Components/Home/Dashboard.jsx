import React from "react"
import ServicePage from '../../assets/maintainance page.jpg'

function Dashboard(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <img
                src={ServicePage} 
                alt="Under Maintenance"
                className="w-[90%] max-w-lg md:max-w-md lg:max-w-sm"/>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-6 text-gray-700 text-center">
                Site Under Construction 🚧
            </h1>
            <p className="text-base md:text-lg text-gray-500 mt-2 text-center max-w-md">
                We’re working hard to bring you something amazing. Stay tuned!
            </p>
        </div>
    )
}

export default Dashboard