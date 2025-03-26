import { InputField, ButtonField } from "../Common";
import "../../index.css";

function AI() {
    return (
        <div className="bg-black flex flex-col justify-center items-center w-screen h-screen p-4">
            <div className="mb-16 md:mb-10 sm:mb-4">
                <h1 className="text-white font-bold text-3xl text-center">AI MODE</h1>
            </div>
            <div className="white-container">
                <h1 className="text-black font-bold text-3xl md:text-4xl text-center">Enter the topic</h1>
                <form className="flex flex-col justify-center items-center w-full gap-4 mt-6">
                    <InputField placeholder="Enter the topic" className="!w-full" />
                    <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4">
                        <div className="flex flex-col items-center sm:items-start w-full">
                            <label className="font-bold mb-1 text-center sm:text-left">Time (in weeks)</label>
                            <select className="p-2 border w-full">
                                {Array.from({ length: 10 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col items-center sm:items-start w-full">
                            <label className="font-bold mb-1 text-center sm:text-left">Mode</label>
                            <select className="p-2 border w-full">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                    </div>

                    <ButtonField label="Create" className="mt-4 !w-auto font-bold text-center" />
                </form>
            </div>
        </div>

    );
}

export default AI;
