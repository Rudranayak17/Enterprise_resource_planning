"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const timetableData = [
  { time: "08:00 - 8:30", monday: "1A English", tuesday: "2A English", wednesday: "2A English", thursday: "1A English", friday: "2A English", saturday: "2A English" },
  { time: "8:30 - 9:00", monday: "2B Social", tuesday: "1B Social", wednesday: "1B Social", thursday: "2B Social", friday: "1B Social", saturday: "1B Social" },
  { time: "9:00 - 9:15", monday: "Recess 30 mins", tuesday: "Recess 30 mins", wednesday: "Recess 30 mins", thursday: "Recess 30 mins", friday: "Recess 30 mins", saturday: "Recess 30 mins" },
  { time: "9:15 - 9:45", monday: "2A Social", tuesday: "1A Social", wednesday: "3A Social", thursday: "2A Social", friday: "1A Social", saturday: "3A Social" },
  { time: "9:45 - 10:15", monday: "1B English", tuesday: "2B English", wednesday: "2B English", thursday: "1B English", friday: "2B English", saturday: "2B English" },
  { time: "10:15 - 10:45", monday: "Recess 30 mins", tuesday: "Recess 30 mins", wednesday: "Recess 30 mins", thursday: "Recess 30 mins", friday: "Recess 30 mins", saturday: "Recess 30 mins" },
  { time: "10:45 - 11:15", monday: "2A English", tuesday: "2A English", wednesday: "2A English", thursday: "2A English", friday: "2A English", saturday: "2A English" },
  { time: "11:15 - 11:45", monday: "1A English", tuesday: "1A English", wednesday: "1B English", thursday: "1A English", friday: "1A English", saturday: "1A English" },
];

export default function TimeTable() {
  const [selectedClass, setSelectedClass] = useState("9th Class");

  return (
    <div className="mx-4 p-3 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Time Table</h1>
        <div className="flex gap-2">
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9th Class">9th Class</SelectItem>
              <SelectItem value="10th Class">10th Class</SelectItem>
              <SelectItem value="11th Class">11th Class</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Download</Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[120px] text-xs">Time</TableHead>
              <TableHead className="w-[120px] text-xs">Monday</TableHead>
              <TableHead className="w-[120px] text-xs">Tuesday</TableHead>
              <TableHead className="w-[120px] text-xs">Wednesday</TableHead>
              <TableHead className="w-[120px] text-xs">Thursday</TableHead>
              <TableHead className="w-[120px] text-xs">Friday</TableHead>
              <TableHead className="w-[120px] text-xs">Saturday</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {timetableData.map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="w-[120px] p-4 text-sm">{row.time}</TableCell>
                <TableCell className="w-[120px] p-4 text-sm">{row.monday}</TableCell>
                <TableCell className="w-[120px] p-4 text-sm">{row.tuesday}</TableCell>
                <TableCell className="w-[120px] p-4 text-sm">{row.wednesday}</TableCell>
                <TableCell className="w-[120px] p-4 text-sm">{row.thursday}</TableCell>
                <TableCell className="w-[120px] p-4 text-sm">{row.friday}</TableCell>
                <TableCell className="w-[120px] p-4 text-sm">{row.saturday}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}