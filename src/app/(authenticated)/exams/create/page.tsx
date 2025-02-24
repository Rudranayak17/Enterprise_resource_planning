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
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Eye, Download, Plus } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ExamSchedule {
  class: string;
  examType: string;
  subject: string;
  startTime: string;
  endTime: string;
  evaluator: string;
  maxMarks: number;
  gradingMethod: string;
  date: string;
  status: string;
}

const ExamScheduleTable = () => {
  // Generate 25 rows of data
  const examData: ExamSchedule[] = Array(25).fill({
    class: "11th-C",
    examType: "Mid Term\nOffline",
    subject: "Physics",
    startTime: "10 AM",
    endTime: "1 PM",
    evaluator: "Mr. Raj Sir\nPGT",
    maxMarks: 100,
    gradingMethod: "Marks",
    date: "14/02/25",
    status: "Submitted"
  });

  return (
    <div className="p-4 ">
      {/* Controls Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-blue-50 px-4 py-2 rounded-md">
          <span className="text-sm">Total Exams: 50</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11">11th Class</SelectItem>
              <SelectItem value="12">12th Class</SelectItem>
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

          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Exam
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[120px] text-xs">Class</TableHead>
                <TableHead className="w-[150px] text-xs">Exam Type</TableHead>
                <TableHead className="w-[150px] text-xs">Subject</TableHead>
                <TableHead className="w-[150px] text-xs">Time</TableHead>
                <TableHead className="w-[120px] text-xs">Evaluator</TableHead>
                <TableHead className="w-[150px] text-xs">Max Mark</TableHead>
                <TableHead className="w-[200px] text-xs">Grading Method</TableHead>
                <TableHead className="w-[120px] text-xs">Date</TableHead>
                <TableHead className="w-[120px] text-xs">Status</TableHead>
                <TableHead className="w-[150px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {examData.map((exam, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="w-[120px] p-4 text-sm">{exam.class}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm whitespace-pre-line">{exam.examType}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{exam.subject}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    Start: {exam.startTime}<br/>
                    End: {exam.endTime}
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm whitespace-pre-line">{exam.evaluator}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{exam.maxMarks}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{exam.gradingMethod}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{exam.date}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <span className="text-green-600">{exam.status}</span>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
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

export default ExamScheduleTable;