import { AttendanceProps } from "@/types/utils";
import React from "react";

const Attendance: React.FC<AttendanceProps> = ({
  total,
  present,
  absent,
  onLeave,
}) => {
  const attendanceData = [
    { label: "Total Student", count: total, color: "text-blue-600" },
    { label: "Present", count: present, color: "text-green-500" },
    { label: "Absent", count: absent, color: "text-red-500" },
    { label: "On Leave", count: onLeave, color: "text-yellow-400" },
  ];

  return (
    <div className="flex flex-row flex-wrap items-center gap-2 m-4 border rounded-lg p-4 max-w-full sm:max-w-[30rem] md:max-w-[40rem] lg:max-w-[50rem] justify-between">
      {attendanceData.map(({ label, count, color }) => (
        <p
          key={label}
          className={`hover:bg-blue-100 hover:shadow-lg transition-all duration-300 py-2 px-3 ${color} bg-white rounded-md text-xs sm:text-sm md:text-base lg:text-lg text-center flex-1 min-w-[6rem] sm:min-w-[7rem] md:min-w-[8rem] lg:min-w-[9rem]`}
        >
          {label} <span className="text-black font-semibold block">{count}</span>
        </p>
      ))}
    </div>
  );
};

export default Attendance;