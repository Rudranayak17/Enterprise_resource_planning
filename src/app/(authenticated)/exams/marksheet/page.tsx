import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Download, Eye, Pencil, FileText } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";

interface StudentResult {
  photo: string;
  name: string;
  rollNo: string;
  class: string;
  examType: string;
  examDate: string;
  subject: string;
  marksReceived: number;
  totalMarks: number;
  status: string;
}

const StudentResultsTable = () => {
  // Generate 25 rows of sample data
  const studentData: StudentResult[] = Array(25).fill({
    photo: "/api/placeholder/40/40",
    name: "Raj Verma",
    rollNo: "Roll No. 21",
    class: "11th-A",
    examType: "Mid Term • Offline",
    examDate: "18/02/2025",
    subject: "Chemistry",
    marksReceived: 25,
    totalMarks: 100,
    status: "Fail",
  });

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Controls Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-blue-50 px-4 py-2 rounded-md">
          <span className="text-sm">Total Results: 50</span>
        </div>

        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11a">11th-A</SelectItem>
              <SelectItem value="11b">11th-B</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Exam Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="midterm">Mid Term</SelectItem>
              <SelectItem value="final">Final</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="chemistry">Chemistry</SelectItem>
              <SelectItem value="physics">Physics</SelectItem>
            </SelectContent>
          </Select>

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
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[80px] text-xs">Photo</TableHead>
                <TableHead className="w-[200px] text-xs">Name</TableHead>
                <TableHead className="w-[120px] text-xs">Class</TableHead>
                <TableHead className="w-[200px] text-xs">
                  Exam Details
                </TableHead>
                <TableHead className="w-[150px] text-xs">Subject</TableHead>
                <TableHead className="w-[120px] text-xs">
                  Marks Received
                </TableHead>
                <TableHead className="w-[120px] text-xs">Total Marks</TableHead>
                <TableHead className="w-[120px] text-xs">Status</TableHead>
                <TableHead className="w-[120px] text-xs">
                  Show Parents
                </TableHead>
                <TableHead className="w-[150px] text-xs text-right">
                  Attachments
                </TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {studentData.map((student, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="w-[80px] p-4 text-sm">
                    <Image
                      src={student.photo}
                      alt={student.name}
                      width={55}
                      height={55}
                      className="rounded-full bg-gray-200"
                    />
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">
                    <div>{student.name}</div>
                    <div className="text-sm text-gray-500">
                      {student.rollNo}
                    </div>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {student.class}
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">
                    <div>{student.examType}</div>
                    <div className="text-sm text-gray-500">
                      {student.examDate}
                    </div>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    {student.subject}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {student.marksReceived}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {student.totalMarks}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <span className="text-red-600 font-medium">
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <Switch />
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-blue-600"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-blue-600"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-blue-600"
                      >
                        <FileText className="h-4 w-4" />
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
        <div className="text-sm text-gray-500">Showing 1-10 of 25 entries</div>
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

export default StudentResultsTable;
