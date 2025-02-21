import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, UserCircle2, Check, Edit } from "lucide-react";

const AttendanceManagement = () => {
  const students = Array(11).fill({
    name: 'Atul Srivastava',
    class: '11th C',
    rollNo: '12',
    date: '14/08/24',
    status: 'Present'
  });

  return (
    <div className="p-6">
      {/* Attendance Stats */}
      <div className="flex space-x-3 mb-6">
        <div className="flex items-center space-x-2 px-3 py-1.5 bg-blue-400 rounded">
          <span className="text-sm">Total Students</span>
          <span className="font-medium">15</span>
        </div>
        <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-400 rounded">
          <span className="text-sm">Present</span>
          <span className="font-medium text-green-400">15</span>
        </div>
        <div className="flex items-center space-x-2 px-3 py-1.5 bg-red-400 rounded">
          <span className="text-sm">Absent</span>
          <span className="font-medium text-red-400">15</span>
        </div>
        <div className="flex items-center space-x-2 px-3 py-1.5 bg-yellow-400 rounded">
          <span className="text-sm">On Leave</span>
          <span className="font-medium">15</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="9th Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9">9th Class</SelectItem>
              <SelectItem value="10">10th Class</SelectItem>
              <SelectItem value="11">11th Class</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="14/08/2024" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="14">14/08/2024</SelectItem>
              <SelectItem value="15">15/08/2024</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>

          <Select>
            <SelectTrigger className="w-16">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Attendance Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Roll No.</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>
                <UserCircle2 className="h-10 w-10 text-gray-400" />
              </TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>{student.rollNo}</TableCell>
              <TableCell>{student.date}</TableCell>
              <TableCell>
                <span className="text-green-600">{student.status}</span>
              </TableCell>
              <TableCell>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 w-8 p-0 text-blue-600"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AttendanceManagement;