import React from "react"
import ServicePage from '../../assets/maintainance page.jpg'

function Dashboard(){
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img
                src={ServicePage} 
                alt="Under Maintenance"
                className="w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"/>
            <h1 className="text-4xl font-bold mt-6 text-gray-700">
                Site Under Construction 🚧
            </h1>
            <p className="text-lg text-gray-500 mt-2 text-center">
                We’re working hard to bring you something amazing. Stay tuned!
            </p>
        </div>
    )
}

export default Dashboard