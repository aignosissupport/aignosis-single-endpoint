import React from "react";

const Profile3 = () => {
  const sessions = [
    { subject: "Special Education", class: "Class 1", status: "Completed" },
    { subject: "Special Education", class: "Class 1", status: "Completed" },
    { subject: "Special Education", class: "Class 1", status: "Completed" },
    { subject: "Speech & Language", class: "Class 1", status: "Incompleted" },
    { subject: "Speech & Language", class: "Class 1", status: "Incompleted" },
  ];

  return (
    <div className="mt-6">
        <div className="border border-[#FB7CE4] mt-[2vw] rounded-lg p-2">
      <h2 className="text-white text-xl mb-4">My Sessions</h2>
      <div className="flex flex-wrap bg-transparent p-4 rounded-lg border border-[#FB7CE4]">
        {/* Table Header */}
        <div className="flex w-full border-b border-[#FB7CE4] pb-2 mb-2">
          <div className="w-1/3 text-white font-medium">Subject</div>
          <div className="w-1/3 text-white font-medium">Class</div>
          <div className="w-1/3 text-white font-medium">Status</div>
        </div>

        {/* Table Rows */}
        {sessions.map((session, index) => (
          <div
            key={index}
            className="flex w-full py-2 border-b border-[#FB7CE4] last:border-b-0"
          >
            <div className="w-1/3 text-white">{session.subject}</div>
            <div className="w-1/3 text-white">{session.class}</div>
            <div
              className={`w-1/3 font-medium ${
                session.status === "Completed"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {session.status}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>

  );
};

export default Profile3;
