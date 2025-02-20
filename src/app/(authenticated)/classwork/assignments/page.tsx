import React from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Plus, Eye, Pencil, Trash2 } from 'lucide-react';

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
    <div className="p-4 max-w-7xl mx-auto">
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
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>Class</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Teacher</TableHead>
              <TableHead>Period</TableHead>
              <TableHead>Month</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Assignment</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assignments.map((assignment) => (
              <TableRow key={assignment.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{assignment.class}</TableCell>
                <TableCell>{assignment.subject}</TableCell>
                <TableCell>{assignment.teacher}</TableCell>
                <TableCell>{assignment.period}</TableCell>
                <TableCell>{assignment.month}</TableCell>
                <TableCell>{assignment.dueDate}</TableCell>
                <TableCell>
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    {assignment.student}
                  </span>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  {assignment.assignment}
                </TableCell>
                <TableCell>
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
  );
};

export default AssignmentDashboard;