import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Download, Plus, Eye, Pencil, Trash2 } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const AssignmentDashboard = () => {
  // Generate 25 rows of sample data
  const assignments = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    class: `11th ${String.fromCharCode(65 + (i % 3))}`, // Alternates between A, B, C
    subject: ['Maths', 'Physics', 'Chemistry', 'Biology', 'English'][i % 5],
    teacher: [
      'Ravi Dubey',
      'Sarah Wilson',
      'John Smith',
      'Maria Garcia',
      'David Chen'
    ][i % 5],
    period: `${(i % 8) + 1}th`,
    month: ['August', 'September', 'October'][i % 3],
    dueDate: `${12 + (i % 15)}/02/25`,
    student: 'All',
    assignment: [
      'Biodiversity of Animal Kingdom',
      'Linear Equations and Inequalities',
      'Periodic Table and Elements',
      'Electromagnetic Waves',
      'Cell Structure and Function'
    ][i % 5]
  }));

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-blue-50 px-4 py-2 rounded-md">
          <span className="text-sm">Total Assignments: 50</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Input 
            className="w-48"
            placeholder="Search Class"
            type="search"
          />
          
          <Select defaultValue="September">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="September">September</SelectItem>
              <SelectItem value="August">August</SelectItem>
              <SelectItem value="October">October</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="flex items-center gap-2">
            <Download size={16} />
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
            <Plus size={16} />
            Add Assignment
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
                <TableHead className="w-[150px] text-xs">Subject</TableHead>
                <TableHead className="w-[200px] text-xs">Teacher</TableHead>
                <TableHead className="w-[100px] text-xs">Period</TableHead>
                <TableHead className="w-[120px] text-xs">Month</TableHead>
                <TableHead className="w-[120px] text-xs">Due Date</TableHead>
                <TableHead className="w-[120px] text-xs">Student</TableHead>
                <TableHead className="w-[250px] text-xs">Assignment</TableHead>
                <TableHead className="w-[150px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {assignments.map((assignment) => (
                <TableRow key={assignment.id} className="hover:bg-gray-50">
                  <TableCell className="w-[120px] p-4 text-sm font-medium">
                    {assignment.class}
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    {assignment.subject}
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">
                    {assignment.teacher}
                  </TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">
                    {assignment.period}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {assignment.month}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {assignment.dueDate}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <span className="text-blue-600 cursor-pointer hover:underline">
                      {assignment.student}
                    </span>
                  </TableCell>
                  <TableCell className="w-[250px] p-4 text-sm max-w-xs truncate">
                    {assignment.assignment}
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-700">
                        <Trash2 size={16} />
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

export default AssignmentDashboard;