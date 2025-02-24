"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Download,
  Plus,
  Eye,
  Edit,
  Trash2,
  MessageSquare,
  Phone,
  LayoutDashboard,
  Paperclip,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const StudentTable = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // Wait until the component is mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Render null until hydration is complete
  if (!mounted) return null;

  const isDarkTheme = resolvedTheme === "dark";

  const students = Array(27)
    .fill(null)
    .map(() => ({
      studentName: {
        name: "Rahul Dhavad",
        dob: "11/02/2007",
        label: "Male",
      },
      parentName: {
        name: "Amit Verma",
        phone: "8523694512",
        email: "xyz@gmail.com",
      },
      preferredClass: {
        class: "Class XII",
        ref: "Ref: Sunil Mistry",
      },
      previousDetails: {
        class: "Class XII",
        school: "School: St. Francis Convent School",
        reason: "Reason: Relocation",
      },
      testDetail: {
        text: "Test Day Time",
        date: "Date: 14/02/2023",
        status: "Status: Fail",
      },
      status: "Pending",
    }));

  return (
    <div className="p-4  space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="font-medium">Total Students:</span>
          <span className="bg-blue-50 px-4 py-2 rounded-md text-sm">
            50
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Input type="date" className="w-40" />

          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>

          <Select defaultValue="10">
            <SelectTrigger className="w-20">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>

          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader className={isDarkTheme ? "bg-gray-900" : "bg-gray-50"}>
              <TableRow className={isDarkTheme ? "text-white border-b-gray-700" : "text-black border-b-gray-200"}>
                <TableHead className="w-[200px] text-xs">Student Name</TableHead>
                <TableHead className="w-[200px] text-xs">Parent Name</TableHead>
                <TableHead className="w-[200px] text-xs">Preferred Class</TableHead>
                <TableHead className="w-[250px] text-xs">Previous Details</TableHead>
                <TableHead className="w-[200px] text-xs">Test Detail</TableHead>
                <TableHead className="w-[120px] text-xs">Status</TableHead>
                <TableHead className="w-[200px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {students.map((student, index) => (
                <TableRow 
                  key={index}
                  className={isDarkTheme ? "hover:bg-gray-800" : "hover:bg-gray-50"}
                >
                  <TableCell className="w-[200px] p-4 text-sm">
                    <div className="space-y-1">
                      <div className="font-medium">{student.studentName.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        DOB: {student.studentName.dob}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {student.studentName.label}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">
                    <div className="space-y-1">
                      <div className="font-medium">{student.parentName.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {student.parentName.phone}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {student.parentName.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">
                    <div className="space-y-1">
                      <div>{student.preferredClass.class}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {student.preferredClass.ref}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[250px] p-4 text-sm">
                    <div className="space-y-1">
                      <div>{student.previousDetails.class}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {student.previousDetails.school}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {student.previousDetails.reason}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">
                    <div className="space-y-1">
                      <div>{student.testDetail.text}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {student.testDetail.date}
                      </div>
                      <div className="text-sm text-red-500">
                        {student.testDetail.status}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <span className={isDarkTheme ? "px-2 py-1 bg-yellow-900 text-yellow-300 rounded" : "px-2 py-1 bg-yellow-100 text-yellow-800 rounded"}>
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                        <LayoutDashboard className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                        <LayoutDashboard className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">Showing 1-10 of 27 entries</div>
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
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
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

export default StudentTable;