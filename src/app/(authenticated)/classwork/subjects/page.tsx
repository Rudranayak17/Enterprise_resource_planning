import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileDown } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const SubjectsDashboard = () => {
  // Generate sample data
  const subjects = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    className: '11th',
    section: 'C',
    subjectName: ['Maths', 'Physics', 'Chemistry', 'Biology', 'English'][i % 5],
    subjectType: 'Compulsory'
  }));

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-blue-50 px-4 py-2 rounded-md">
          <span className="text-sm">Total Subjects: 50</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Input 
            className="w-48"
            placeholder="Search Class"
            type="search"
          />
          
          <Button variant="outline" className="flex items-center gap-2">
            <FileDown size={16} className="text-red-500" />
            Download
          </Button>

          <Button variant="outline" className="flex items-center gap-2">
            <FileDown size={16} className="text-green-500" />
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
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[150px] text-xs">Class Name</TableHead>
                <TableHead className="w-[100px] text-xs">Section</TableHead>
                <TableHead className="w-[150px] text-xs">Subject Name</TableHead>
                <TableHead className="w-[150px] text-xs">Subject Type</TableHead>
                <TableHead className="w-[150px] text-xs">Syllabus</TableHead>
                <TableHead className="w-[150px] text-xs">Notes</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {subjects.map((subject) => (
                <TableRow key={subject.id} className="hover:bg-gray-50">
                  <TableCell className="w-[150px] p-4 text-sm font-medium text-blue-600">
                    {subject.className}
                  </TableCell>
                  <TableCell className="w-[100px] p-4 text-sm text-blue-600">
                    {subject.section}
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    {subject.subjectName}
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    {subject.subjectType}
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    <Button 
                      variant="link" 
                      className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal"
                    >
                      View Syllabus
                    </Button>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    <Button 
                      variant="link" 
                      className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal"
                    >
                      View Notes
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

export default SubjectsDashboard;