import React from 'react';
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
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ComplaintInterface = () => {
  const complaints = Array(25).fill({
    photo: "/api/placeholder/32/32",
    studentName: "Ravi Pal",
    rollNo: "Roll No - 211",
    class: "Class - 9th B",
    date: "15/10/2024",
    parent: "Amit Verma",
    complainFor: "School",
    issue: "For Long time of School assembly on Summer Days...",
    status: "Pending",
    attachments: "View Attachments"
  });

  return (
    <div className="p-4  space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 px-4 py-2 rounded-md">
            <span className="text-sm">Complain: 20</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="September" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="september">September</SelectItem>
              <SelectItem value="october">October</SelectItem>
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
                <TableHead className="w-[80px] text-xs">Photo</TableHead>
                <TableHead className="w-[250px] text-xs">Student Name</TableHead>
                <TableHead className="w-[120px] text-xs">Date</TableHead>
                <TableHead className="w-[150px] text-xs">Parent</TableHead>
                <TableHead className="w-[150px] text-xs">Complain For</TableHead>
                <TableHead className="w-[300px] text-xs">Issue</TableHead>
                <TableHead className="w-[120px] text-xs">Status</TableHead>
                <TableHead className="w-[150px] text-xs">Attachments</TableHead>
                <TableHead className="w-[120px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {complaints.map((complaint, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="w-[80px] p-4 text-sm">
                    <img
                      src={complaint.photo}
                      alt="Student"
                      className="w-8 h-8 rounded-full"
                    />
                  </TableCell>
                  <TableCell className="w-[250px] p-4 text-sm">
                    <div>
                      <div className="font-medium text-blue-600">
                        {complaint.studentName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {complaint.rollNo}
                      </div>
                      <div className="text-sm text-blue-600">
                        {complaint.class}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{complaint.date}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{complaint.parent}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{complaint.complainFor}</TableCell>
                  <TableCell className="w-[300px] p-4 text-sm max-w-xs truncate">{complaint.issue}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <span className="text-red-500">{complaint.status}</span>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    <Button 
                      variant="link" 
                      className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal"
                    >
                      {complaint.attachments}
                    </Button>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-right">
                    <Button 
                      size="sm" 
                      className="bg-green-500 hover:bg-green-600"
                    >
                      Resolved
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

export default ComplaintInterface;