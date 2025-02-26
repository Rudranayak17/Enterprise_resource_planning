import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Download, UserCircle2, Edit } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
      <div className="border rounded-md">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px] text-xs">Photo</TableHead>
                <TableHead className="w-[200px] text-xs">Name</TableHead>
                <TableHead className="w-[150px] text-xs">Class</TableHead>
                <TableHead className="w-[120px] text-xs">Roll No.</TableHead>
                <TableHead className="w-[150px] text-xs">Date</TableHead>
                <TableHead className="w-[120px] text-xs">Status</TableHead>
                <TableHead className="w-[100px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-280px)] overflow-auto">
          <Table>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell className="w-[80px] p-2">
                    <UserCircle2 className="h-55 w-55 text-gray-400" />
                  </TableCell>
                  <TableCell className="w-[200px] p-2 text-sm font-medium">
                    {student.name}
                  </TableCell>
                  <TableCell className="w-[150px] p-2 text-sm">
                    {student.class}
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm">
                    {student.rollNo}
                  </TableCell>
                  <TableCell className="w-[150px] p-2 text-sm">
                    {student.date}
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm">
                    <span className="text-green-600">{student.status}</span>
                  </TableCell>
                  <TableCell className="w-[100px] p-2 text-right">
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
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">Showing 1-10 of 11 entries</div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AttendanceManagement;