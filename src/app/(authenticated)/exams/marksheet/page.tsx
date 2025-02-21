import React from 'react';
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
    status: "Fail"
  });

  return (
    <div className="space-y-4">
      {/* Controls Header */}
      <div className="flex items-center justify-between">
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md">
          Total Results: 50
        </div>
        
        <div className="flex items-center gap-3">
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

          <Select>
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

      {/* Table */}
      <div className="border rounded-lg">
        <div className="min-h-[600px] flex flex-col">
          <Table>
            <TableHeader className="bg-white sticky top-0">
              <TableRow>
                <TableHead>Photo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Exam Details</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Marks Received</TableHead>
                <TableHead>Total Marks</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Show Parents</TableHead>
                <TableHead>Attachments</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
          
          <div className="flex-1 overflow-auto">
            <Table>
              <TableBody>
                {studentData.map((student, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img
                        src={student.photo}
                        alt={student.name}
                        className="w-10 h-10 rounded-full"
                      />
                    </TableCell>
                    <TableCell>
                      <div>{student.name}</div>
                      <div className="text-sm text-gray-500">{student.rollNo}</div>
                    </TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>
                      <div>{student.examType}</div>
                      <div className="text-sm text-gray-500">{student.examDate}</div>
                    </TableCell>
                    <TableCell>{student.subject}</TableCell>
                    <TableCell>{student.marksReceived}</TableCell>
                    <TableCell>{student.totalMarks}</TableCell>
                    <TableCell>
                      <span className="text-red-600 font-medium">{student.status}</span>
                    </TableCell>
                    <TableCell>
                      <Switch />
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
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
      </div>
    </div>
  );
};

export default StudentResultsTable;