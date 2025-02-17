import React from "react";
import CalendarWithSidebar from "./CalendarWithSidebar";

const Booking = () => {
    return (
        <>
            <div className="min-h-screen bg-[#2B1B2D] mt-[2vw] text-white hidden md:flex flex-col">
                <CalendarWithSidebar/>
                {/* <div className="flex justify-between items-center p-4">
                    <div className="flex space-x-4">
                        <select className="border bg-transparent px-5 border-[#B740A1] text-white p-2 rounded">
                            <option className="text-[#2B1B2D]">Month</option>
                            <option className="text-[#2B1B2D]">January</option>
                            <option className="text-[#2B1B2D]">February</option>
                            <option className="text-[#2B1B2D]">March</option>
                            <option className="text-[#2B1B2D]">April</option>
                            <option className="text-[#2B1B2D]">May</option>
                            <option className="text-[#2B1B2D]">June</option>
                            <option className="text-[#2B1B2D]">July</option>
                            <option className="text-[#2B1B2D]">August</option>
                            <option className="text-[#2B1B2D]">September</option>
                            <option className="text-[#2B1B2D]">October</option>
                            <option className="text-[#2B1B2D]">November</option>
                            <option className="text-[#2B1B2D]">December</option>
                        </select>
                        <select className="border bg-transparent px-5 border-[#B740A1] text-white p-2 rounded">
                            <option>Year</option>
                            <option className="text-[#2B1B2D]">2024</option>
                            <option className="text-[#2B1B2D]">2025</option>
                        </select>
                    </div>
                    <div className="flex space-x-4">
                        <button className="border bg-transparent px-5 border-[#B740A1] text-white p-2 rounded">Filter</button>
                        <button className="border bg-transparent px-5 border-[#B740A1] text-white p-2 rounded">Send reminder</button>
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="w-3/4 p-4">
                        <div className="grid grid-cols-7 gap-2 text-center">
                            {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
                                (day) => (
                                    <div key={day} className="text-sm text-purple-300">
                                        {day}
                                    </div>
                                )
                            )}
                        </div>
                        <div className="grid grid-cols-7 gap-2 mt-2">
                            
                            {Array.from({ length: 30 }).map((_, index) => (
                                <div
                                    key={index}
                                    className={`p-4 py-10 border bg-[#321B38] border-[#9C00AD] rounded ${index === 7 ? "bg-purple-800 text-white" : "text-purple-300"
                                        }`}
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-1/4 p-4 bg-[#312632]">
                        <h2 className="text-pink-500 text-lg font-bold">This week</h2>
                        <div className="mt-4 space-y-4">
                            {[
                                { time: "07:00", title: "Behavioral session", details: "пшено — 50 гр., масло сливочное ..." },
                                { time: "10:00", title: "Behavioral session", details: "творог — 150 гр., яблоко — 1 шт. ..." },
                                { time: "14:00", title: "Behavioral session", details: "гречка отварная — 50 гр., говядина ..." },
                                { time: "16:00", title: "Behavioral session", details: "яйцо вареное — 1 шт., зеленый ..." },
                            ].map((session, index) => (
                                <div
                                    key={index}
                                    className="p-4 border border-purple-700 rounded bg-[#201E33]"
                                >
                                    <p className="text-pink-500 font-bold text-sm">{session.time}</p>
                                    <h3 className="font-medium text-lg">{session.title}</h3>
                                    <p className="text-sm text-purple-300">{session.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="min-h-screen bg-[#2B1B2D] mt-[2vw] text-white md:hidden flex flex-col md:flex-row">
                {/* Header */}
                <CalendarWithSidebar/>

                {/* <div className="flex justify-between items-center p-4 flex-wrap">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <select className="border bg-transparent px-5 border-[#B740A1] text-white p-2 rounded">
                            <option className="text-[#2B1B2D]">Month</option>
                            <option className="text-[#2B1B2D]">January</option>
                            <option className="text-[#2B1B2D]">February</option>
                            <option className="text-[#2B1B2D]">March</option>
                            <option className="text-[#2B1B2D]">April</option>
                            <option className="text-[#2B1B2D]">May</option>
                            <option className="text-[#2B1B2D]">June</option>
                            <option className="text-[#2B1B2D]">July</option>
                            <option className="text-[#2B1B2D]">August</option>
                            <option className="text-[#2B1B2D]">September</option>
                            <option className="text-[#2B1B2D]">October</option>
                            <option className="text-[#2B1B2D]">November</option>
                            <option className="text-[#2B1B2D]">December</option>
                        </select>

                        <select className="border bg-transparent px-5 border-[#B740A1] text-white p-2 rounded">
                            <option className="text-[#2B1B2D]">Year</option>
                            <option className="text-[#2B1B2D]">2024</option>
                            <option className="text-[#2B1B2D]">2025</option>
                        </select>
                    </div>
                    <div className="flex space-x-4">
                        <button className="border bg-transparent px-5 border-[#B740A1] text-white p-2 rounded">
                            Filter
                        </button>
                        <button className="border bg-transparent px-5 border-[#B740A1] text-white p-2 rounded">
                            Send reminder
                        </button>
                    </div>
                </div> */}

                {/* Main Content */}
                {/* <div className="flex-1 flex flex-col md:flex-row">
                    <div className="w-full md:w-3/4 p-4">
                        <div className="grid grid-cols-7 gap-2 text-center text-sm">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                <div key={day} className="text-sm text-purple-300">
                                    {day}
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2 mt-2">
                            {Array.from({ length: 30 }).map((_, index) => (
                                <div
                                    key={index}
                                    className={`p-2 border bg-[#321B38] border-[#9C00AD] rounded ${index === 7 ? "bg-purple-800 text-white" : "text-purple-300"
                                        }`}
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 p-4 bg-[#312632]">
                        <h2 className="text-pink-500 text-lg font-bold">This week</h2>
                        <div className="mt-4 space-y-4">
                            {[
                                { time: "07:00", title: "Behavioral session", details: "пшено — 50 гр., масло сливочное ..." },
                                { time: "10:00", title: "Behavioral session", details: "творог — 150 гр., яблоко — 1 шт. ..." },
                                { time: "14:00", title: "Behavioral session", details: "гречка отварная — 50 гр., говядина ..." },
                                { time: "16:00", title: "Behavioral session", details: "яйцо вареное — 1 шт., зеленый ..." },
                            ].map((session, index) => (
                                <div key={index} className="p-4 border border-purple-700 rounded bg-[#201E33]">
                                    <p className="text-pink-500 font-bold text-sm">{session.time}</p>
                                    <h3 className="font-medium text-lg">{session.title}</h3>
                                    <p className="text-sm text-purple-300">{session.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>

        </>
    );
};

export default Booking;
