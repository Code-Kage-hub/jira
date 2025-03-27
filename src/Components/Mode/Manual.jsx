import '../../index.css';
import { useState } from 'react';
import { InputField, ButtonField } from '../Common';
import Edit from '../../assets/Edit.png';
import Completed from '../../assets/Completed.png';

function Manual() {
    const [topic, setTopic] = useState('');
    const [finalTopic, setFinalTopic] = useState('');
    const [subtopics, setSubtopics] = useState([]);
    const [subtopicName, setSubtopicName] = useState('');
    const [time, setTime] = useState(1);
    const [mode, setMode] = useState('Easy');
    const [editIndex, setEditIndex] = useState(null);

    // Handle topic input change
    function handleTopicChange(event) {
        setTopic(event.target.value);
    }

    // Set the topic name on button click
    function handleCreateTopic() {
        if (topic.trim().length > 0) {
            setFinalTopic(topic.trim());
        }
    }

    // Handle subtopic input change
    function handleSubtopicChange(event) {
        setSubtopicName(event.target.value);
    }

    // Create or update a subtopic
    function handleCreateSubtopic() {
        if (subtopicName.trim().length > 0) {
            if (editIndex !== null) {
                // Edit existing subtopic
                const updatedSubtopics = subtopics.map((subtopic, i) =>
                    i === editIndex ? { ...subtopic, name: subtopicName, time, mode } : subtopic
                );
                setSubtopics(updatedSubtopics);
                setEditIndex(null);
            } else {
                // Add new subtopic
                setSubtopics([...subtopics, { name: subtopicName.trim(), time, mode, done: false }]);
            }
            setSubtopicName('');
        }
    }

    // Edit subtopic
    function handleEditSubtopic(index) {
        setSubtopicName(subtopics[index].name);
        setTime(subtopics[index].time);
        setMode(subtopics[index].mode);
        setEditIndex(index);
    }

    // Mark subtopic as done
    function handleMarkDone(index) {
        const updatedSubtopics = subtopics.map((subtopic, i) =>
            i === index ? { ...subtopic, done: true } : subtopic
        );
        setSubtopics(updatedSubtopics);
    }

    return (
        <div className="bg-black flex flex-col justify-center items-center w-screen min-h-screen p-4">
            <div className="fixed top-0 left-0 w-full bg-black py-4 z-50">
                <h1 className="text-white font-bold text-3xl text-center">Manual Mode</h1>
            </div>

            <div className="Manual mt-16 w-full max-w-2xl">
                <div className="flex flex-col justify-center items-center bg-white p-6 border shadow-lg w-full">
                    {!finalTopic ? (
                        <>
                            <h1 className="text-black font-bold text-3xl md:text-4xl text-center">Enter the Topic</h1>
                            <InputField
                                placeholder="Enter topic name"
                                className="!w-full mt-4 font-bold"
                                value={topic}
                                onChange={handleTopicChange}
                            />
                            <ButtonField label="Create" className="mt-4 !w-auto font-bold text-center" onClick={handleCreateTopic} />
                        </>
                    ) : (
                        <>
                            <h1 className="text-black font-bold text-3xl md:text-4xl text-center">{finalTopic}</h1>
                            <InputField
                                placeholder="Enter Sub-topic"
                                className="!w-full font-bold mt-4"
                                value={subtopicName}
                                onChange={handleSubtopicChange}
                            />
                            <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4">
                                <div className="flex flex-col items-center sm:items-start w-full">
                                    <label className="font-bold mb-1 text-center sm:text-left">Time</label>
                                    <select className="p-2 border w-full" value={time} onChange={(e) => setTime(Number(e.target.value))}>
                                        {Array.from({ length: 10 }, (_, i) => (
                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col items-center sm:items-start w-full">
                                    <label className="font-bold mb-1 text-center sm:text-left">Mode</label>
                                    <select className="p-2 border w-full" value={mode} onChange={(e) => setMode(e.target.value)}>
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </div>
                            </div>
                            <ButtonField label={editIndex !== null ? "Update" : "Create"} className="mt-4 !w-auto font-bold text-center" onClick={handleCreateSubtopic} />
                        </>
                    )}
                </div>

                {finalTopic && (
                    <div className="shadow-md p-6 w-full border self-start max-h-[400px]">
                        <div className="text-black text-2xl font-semibold text-center w-full bg-white sticky top-0 z-10 p-2 border-b border-gray-300">
                            {finalTopic} - Subtopics
                        </div>
                        <div className="text-gray-600 flex flex-col items-start gap-2 p-2 overflow-y-auto max-h-[350px] pt-2">
                            {subtopics.map((subtopic, i) => (
                                <div key={i} className={`mlbl ${subtopic.done ? 'bg-green-500' : ''} flex justify-between items-center p-2 border-b border-gray-200 w-full`}>
                                    <span>{subtopic.name} (⏳ {subtopic.time} min, 🎯 {subtopic.mode})</span>
                                    <div className="flex gap-2">
                                        {!subtopic.done && (
                                            <button onClick={() => handleEditSubtopic(i)}>
                                                <img src={Edit} alt="Edit" className="w-5 h-5" />
                                            </button>
                                        )}
                                        <button onClick={() => handleMarkDone(i)}>
                                            <img src={Completed} alt="Done" className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {finalTopic && (
                    <div className="flex justify-center items-center w-full mt-4 col-span-1 md:col-span-2 ">
                        <ButtonField label="Continue" className="!w-auto font-bold text-center" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Manual;
