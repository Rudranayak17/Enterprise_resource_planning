import { AttendanceProps } from "@/types/utils";
import React from "react";

const TeacherAttendance: React.FC<AttendanceProps> = ({
  total,
  present,
  absent,
  onLeave,
  halfDay,
}) => {
  const attendanceData = [
    { label: "Total", count: total, color: "text-blue-900" },
    { label: "Present", count: present, color: "text-green-500" },
    { label: "Absent", count: absent, color: "text-red-500" },
    { label: "On Leave", count: onLeave, color: "text-yellow-400" },
    { label: "Half Day", count: halfDay, color: "text-blue-500" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-2 border rounded-lg p-3 max-w-full">
      {attendanceData.map(({ label, count, color }) => (
        <p
          key={label}
          className={`hover:bg-blue-100 hover:shadow-md transition-all duration-300 py-1 px-2 ${color} bg-white rounded-md text-[10px] sm:text-xs md:text-sm lg:text-base text-center flex-1 min-w-[5rem] sm:min-w-[6rem] md:min-w-[7rem] lg:min-w-[8rem]`}
        >
          {label}: <span className="text-black font-semibold">{count}</span>
        </p>
      ))}
    </div>
  );
};

export default TeacherAttendance;
