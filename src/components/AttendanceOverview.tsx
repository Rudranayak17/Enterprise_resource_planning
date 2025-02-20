"use client"
import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const attendanceData = [
  { month: "Apr", attendance: 89 },
  { month: "May", attendance: 91 },
  { month: "Jun", attendance: 85 },
  { month: "Jul", attendance: 99 },
  { month: "Aug", attendance: 86 },
  { month: "Sep", attendance: 80 },
  { month: "Oct", attendance: 78 },
  { month: "Nov", attendance: 81 },
  { month: "Dec", attendance: 82 },
  { month: "Jan", attendance: 88 },
  { month: "Feb", attendance: 79 },
  { month: "Mar", attendance: 87 },
];

const AttendanceOverview = () => {
  const [dailyAttendance, setDailyAttendance] = useState<
    { present: boolean | null }[][]
  >([]);

  useEffect(() => {
    const generateAttendanceData = () =>
      Array(7)
        .fill(null)
        .map(() =>
          Array(12)
            .fill(null)
            .map(() => ({
              present: Math.random() > 0.2 ? true : Math.random() > 0.5 ? false : null,
            }))
        );

    setDailyAttendance(generateAttendanceData());
  }, []);

  return (
    <Card className="md:col-span-2 w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Attendance Overview</CardTitle>
          <Badge variant="secondary">225/250 days - 89% Average</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Area type="monotone" dataKey="attendance" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid grid-rows-7 gap-2">
          {dailyAttendance.map((week, weekIdx) => (
            <div key={weekIdx} className="grid grid-cols-12 gap-2">
              {week.map((day, dayIdx) => (
                <div key={dayIdx} className="flex justify-center items-center h-8">
                  {day.present === true && <Check className="w-4 h-4 text-green-500" />}
                  {day.present === false && <X className="w-4 h-4 text-red-500" />}
                  {day.present === null && <span className="w-4 h-4 block bg-gray-200 rounded-full" />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceOverview;
