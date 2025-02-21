"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
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

const StudentTable = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // Wait until the component is mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Render null or a placeholder until hydration is complete
  if (!mounted) return null;
  const isDarkTheme = resolvedTheme === "dark";
  const students = Array(7)
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
    <div className="p-4 w-full ">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-medium">Total Visitors:</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
            50
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Input type="date" className="w-40" />

          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>

          <Select defaultValue="10">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </Select>

          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Visitor
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <Table>
        <TableHeader
          className={
            isDarkTheme
              ? "[&_tr]:border-b bg-gray-900 text-white"
              : "[&_tr]:border-b bg-gray-100 text-black"
          }
        >
          <TableRow className="bg-gray-50">
            <TableHead>Student Name</TableHead>
            <TableHead>Parent Name</TableHead>
            <TableHead>Preferred Class</TableHead>
            <TableHead>Previous Details</TableHead>
            <TableHead>Test Detail</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium">{student.studentName.name}</div>
                  <div className="text-sm text-gray-500">
                    DOB: {student.studentName.dob}
                  </div>
                  <div className="text-sm text-gray-500">
                    {student.studentName.label}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium">{student.parentName.name}</div>
                  <div className="text-sm text-gray-500">
                    {student.parentName.phone}
                  </div>
                  <div className="text-sm text-gray-500">
                    {student.parentName.email}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div>{student.preferredClass.class}</div>
                  <div className="text-sm text-gray-500">
                    {student.preferredClass.ref}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div>{student.previousDetails.class}</div>
                  <div className="text-sm text-gray-500">
                    {student.previousDetails.school}
                  </div>
                  <div className="text-sm text-gray-500">
                    {student.previousDetails.reason}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div>{student.testDetail.text}</div>
                  <div className="text-sm text-gray-500">
                    {student.testDetail.date}
                  </div>
                  <div className="text-sm text-red-500">
                    {student.testDetail.status}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                  {student.status}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <LayoutDashboard className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <LayoutDashboard className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentTable;
