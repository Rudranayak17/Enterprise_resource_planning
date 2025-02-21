import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, Download, Plus, Info, PenSquare } from "lucide-react";

interface Student {
  photo: string;
  name: string;
  rollNo: string;
  class: string;
  scholarshipType: string;
  date: string;
  amount: string;
  approvalStatus: string;
  paymentStatus: string;
}

const ScholarshipDashboard = () => {
  const students: Student[] = Array(12).fill({
    photo: "/api/placeholder/40/40",
    name: "Ravi Pal",
    rollNo: "21",
    class: "9th B",
    scholarshipType: "Scholarship Test",
    date: "16/02/2025",
    amount: "Rs 3000",
    approvalStatus: "Approved",
    paymentStatus: "Pending"
  });

  return (
    <div className="p-4 space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Total Scholarship (12)</h2>
        <div className="flex items-center gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Scholarship Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="test">Scholarship Test</SelectItem>
              <SelectItem value="merit">Merit Based</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Months</SelectItem>
              <SelectItem value="jan">January</SelectItem>
              <SelectItem value="feb">February</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            PDF Download
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Excel Download
          </Button>
          <Select defaultValue="10">
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <Button className="flex items-center gap-2 bg-blue-600">
            <Plus className="h-4 w-4" />
            Add Scholarship
          </Button>
        </div>
      </div>

      {/* Table Section with Fixed Header */}
      <div className="border rounded-md">
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Photo</TableHead>
                <TableHead className="w-[200px]">Student Name</TableHead>
                <TableHead className="w-[150px]">Scholarship Type</TableHead>
                <TableHead className="w-[120px]">Date</TableHead>
                <TableHead className="w-[120px]">Amount</TableHead>
                <TableHead className="w-[150px]">Approval Status</TableHead>
                <TableHead className="w-[150px]">Payment Status</TableHead>
                <TableHead className="w-[100px] text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
        <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
          <Table>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell className="w-[80px]">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-10 h-10 rounded-full bg-gray-200"
                    />
                  </TableCell>
                  <TableCell className="w-[200px]">
                    <div>
                      <div className="font-medium">{student.name}</div>
                      <div className="text-sm text-gray-500">
                        Roll No.- {student.rollNo}
                      </div>
                      <div className="text-sm text-blue-600">
                        Class - {student.class}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[150px]">{student.scholarshipType}</TableCell>
                  <TableCell className="w-[120px]">{student.date}</TableCell>
                  <TableCell className="w-[120px]">{student.amount}</TableCell>
                  <TableCell className="w-[150px]">
                    <span className="px-2 py-1 rounded-full text-sm text-green-700 bg-green-100">
                      {student.approvalStatus}
                    </span>
                  </TableCell>
                  <TableCell className="w-[150px]">
                    <div className="space-y-1 flex-col items-center">
                      <p className="text-red-500">{student.paymentStatus}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className=" bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Pay Now
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="w-[100px] text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-blue-100"
                      >
                        <Info className="h-4 w-4 text-blue-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-blue-100"
                      >
                        <PenSquare className="h-4 w-4 text-blue-600" />
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
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing 1-10 of 12 entries
        </div>
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
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ScholarshipDashboard;