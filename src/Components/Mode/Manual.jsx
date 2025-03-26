import '../../index.css';
import { InputField, ButtonField } from '../Common';

function Manual() {
    const topics = Array.from({ length: 15 }, (_, i) => `Topic ${i + 1}`);

    return (
        <div className="bg-black flex flex-col justify-center items-center w-screen min-h-screen p-4">

            {/* Fixed Manual Mode Heading */}
            <div className="fixed top-0 left-0 w-full bg-black py-4 z-50">
                <h1 className="text-white font-bold text-3xl text-center">Manual Mode</h1>
            </div>

            <div className="Manual mt-16 w-full max-w-2xl"> 
                <div className="flex flex-col justify-center items-center bg-white p-6 border shadow-lg w-full">
                    <h1 className="text-black font-bold text-3xl md:text-4xl text-center">Enter the topic</h1>
                    <form className="flex flex-col justify-center items-center w-full gap-4 mt-6">
                        <InputField placeholder="Enter the topic" className="!w-full mt-4 font-bold" />
                        <InputField placeholder="Enter the Sub-topic" className="!w-full font-bold" />
                        <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4">
                            <div className="flex flex-col items-center sm:items-start w-full">
                                <label className="font-bold mb-1 text-center sm:text-left">Time</label>
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

                <div className="shadow-md p-6 w-full border self-start max-h-[400px] overflow-y-auto">
                    <div className="text-black text-2xl font-semibold text-center w-full bg-white sticky top-0 z-10 p-2 border-b border-gray-300">
                        Tasks
                    </div>
                    <div className="text-gray-600 flex flex-col items-start gap-2 p-2 max-h-[300px] overflow-y-auto pt-2">
                        {Array.from({ length: 20 }, (_, i) => (
                            <label key={i} className="block p-2 border-b border-gray-200 w-full mlbl ">
                                Topic {i + 1}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center w-full mt-4  col-span-1 md:col-span-2">
                    <ButtonField label="Continue" className="!w-auto font-bold text-center" />
                </div>
            </div>
        </div>
    );
}

export default Manual;
