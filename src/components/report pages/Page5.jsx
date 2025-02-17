import React from 'react';

const Page5 = () => {
    const tableData = [
        {
            subskill: "Facing Forward",
            description: "Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.",
            percentage: 80,
            color: "bg-[#F32A2A]"
        },
        {
            subskill: "Social Attention",
            description: "Percentage of time the child gazed at the social half of the screen and the concentration of gaze on specific elements like people or toys.",
            percentage: 33,
            color: "bg-[#F32A2A]"
        },
    ];

    return (
        <div className="pdf-image flex flex-col font-raleway items-center p-8 bg-white min-h-screen">
            <div className="pdf-page bg-white p-8 shadow-md rounded-md flex justify-center items-center w-[210mm] h-[297mm] relative">
                {/* Header */}
                <div className="absolute p-8 top-0 left-0 w-full">
                    <h1 className="text-center text-base font-bold">Feature Analysis Table</h1>
                    <div className="w-full border-t-2 mt-2 border-[#9C00AD]"></div>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Table */}
                    <div className="w-full border rounded-3xl p-4 border-[#CDAAE0] font-raleway">
                        <h3 className='text-center text-sm font-bold mb-5'>Facial Muscular Response</h3>
                        <table className="w-full border-collapse">
                            {/* Table Header */}
                            <thead>
                                <tr className="text-left">
                                    <th className="p-2 text-[12px] border-r font-medium border-b border-gray-300 text-center">Performance</th>
                                    <th className="p-2 text-[12px] border-r font-medium border-b border-gray-300 text-center">Subskill</th>
                                    <th className="p-2 text-[12px] font-medium border-b border-gray-300 text-center">Results</th>
                                </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index} className="border-b border-gray-300">
                                        {/* Subskill */}
                                        <td className="p-4 text-[10px] text-gray-800 w-[35%] font-semibold border-r border-gray-300">
                                            {row.subskill}
                                            <br />
                                            <span className="font-normal text-gray-600 text-[8px]">{row.description}</span>
                                        </td>
                                        {/* Performance */}
                                        <td className="py-6 px-6 text-center w-[30%] border-r border-gray-300">
                                            <div className="w-[80%] h-5 mx-auto rounded-full bg-gray-200">
                                                <div className={`flex justify-end items-center h-full rounded-full ${row.color}`} style={{ width: `${row.percentage}%` }}>
                                                    <div className="flex justify-center items-center w-6 h-6 rounded-full bg-white text-xs font-bold shadow-md">
                                                        {row.percentage}%
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {/* Results */}
                                        <td className="py-4 px-4 text-[8px] text-gray-800 w-[35%]">{row.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full border rounded-3xl p-4 border-[#CDAAE0] font-raleway">
                        <h3 className='text-center text-sm font-bold mb-5'>Emotional and Mirroring Response</h3>
                        <table className="w-full border-collapse">
                            {/* Table Header */}
                            <thead>
                                <tr className="text-left">
                                    <th className="p-2 text-[12px] border-r font-medium border-b border-gray-300 text-center">Subskill</th>
                                    <th className="p-2 text-[12px] border-r font-medium border-b border-gray-300 text-center">Performance</th>
                                    <th className="p-2 text-[12px] font-medium border-b border-gray-300 text-center">Results</th>
                                </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index} className="border-b border-gray-300">
                                        {/* Subskill */}
                                        <td className="p-4 text-[10px] text-gray-800 w-[35%] font-semibold border-r border-gray-300">
                                            {row.subskill}
                                            <br />
                                            <span className="font-normal text-gray-600 text-[8px]">{row.description}</span>
                                        </td>
                                        {/* Performance */}
                                        <td className="py-6 px-6 text-center w-[30%] border-r border-gray-300">
                                            <div className="w-[80%] h-5 mx-auto rounded-full bg-gray-200">
                                                <div className={`flex justify-end items-center h-full rounded-full ${row.color}`} style={{ width: `${row.percentage}%` }}>
                                                    <div className="flex justify-center items-center w-6 h-6 rounded-full bg-white text-xs font-bold shadow-md">
                                                        {row.percentage}%
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {/* Results */}
                                        <td className="py-4 px-4 text-[8px] text-gray-800 w-[35%]">{row.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute p-8 bottom-0 left-0 w-full">
                    <div className="w-full flex justify-between items-center text-xs font-manrope mt-10 border-t-2 border-[#800080] pt-2">
                        <span className="text-[10px]">Sample</span>
                        <div className="text-center text-[10px]">
                            <span>Received Date: 2023-07-28 17:22:09</span>
                            <br />
                            <span>ID: Report Generation Date:</span>
                        </div>
                        <span className="text-[10px]">Page 09</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page5;
