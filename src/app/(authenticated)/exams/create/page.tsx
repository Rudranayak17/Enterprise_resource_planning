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
    <div className="space-y-4">
      {/* Controls Header */}
      <div className="flex items-center justify-between">
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md">
          Total Exams: 50
        </div>
        
        <div className="flex items-center gap-3">
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

          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Exam
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-lg">
        <div className="min-h-[600px] flex flex-col">
          <Table>
            <TableHeader className="bg-white sticky top-0">
              <TableRow>
                <TableHead>Class</TableHead>
                <TableHead>Exam Type</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Evaluator</TableHead>
                <TableHead>Max Mark</TableHead>
                <TableHead>Grading Method</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
          
          <div className="flex-1 overflow-auto">
            <Table>
              <TableBody>
                {examData.map((exam, index) => (
                  <TableRow key={index}>
                    <TableCell>{exam.class}</TableCell>
                    <TableCell className="whitespace-pre-line">{exam.examType}</TableCell>
                    <TableCell>{exam.subject}</TableCell>
                    <TableCell>
                      Start: {exam.startTime}<br/>
                      End: {exam.endTime}
                    </TableCell>
                    <TableCell className="whitespace-pre-line">{exam.evaluator}</TableCell>
                    <TableCell>{exam.maxMarks}</TableCell>
                    <TableCell>{exam.gradingMethod}</TableCell>
                    <TableCell>{exam.date}</TableCell>
                    <TableCell>
                      <span className="text-green-600">{exam.status}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
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
      </div>
    </div>
  );
};

export default ExamScheduleTable;