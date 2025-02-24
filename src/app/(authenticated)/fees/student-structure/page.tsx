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
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, Download } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const StudentFeeTable = () => {
  const studentRows = Array(25).fill({
    photo: "/api/placeholder/32/32",
    studentName: "Ravi Pal",
    rollNo: "23",
    classSection: "XII-B",
    category: "Monthly",
    feeType: "Tuition Fee",
    amount: "Rs 12000",
    discount: "2000",
    payableAmount: "Rs 10000",
    status: "Approved",
  });

  return (
    <div className="p-4  space-y-6">
      {/* Header Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Student Fee (90)</h2>
        </div>
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Session" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-25">2024-25</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">Class XII</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="b">Section B</SelectItem>
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
                <TableHead className="w-[250px] text-xs">
                  Student Name
                </TableHead>
                <TableHead className="w-[150px] text-xs">Category</TableHead>
                <TableHead className="w-[150px] text-xs">Fee Type</TableHead>
                <TableHead className="w-[120px] text-xs">Amount</TableHead>
                <TableHead className="w-[120px] text-xs">Discount</TableHead>
                <TableHead className="w-[150px] text-xs">
                  Payable Amount
                </TableHead>
                <TableHead className="w-[120px] text-xs">Status</TableHead>
                <TableHead className="w-[150px] text-xs">Remarks</TableHead>
                <TableHead className="w-[120px] text-xs text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {studentRows.map((row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="w-[80px] p-4 text-sm">
                    <img
                      src={row.photo}
                      alt="Student"
                      className="w-8 h-8 rounded-full"
                    />
                  </TableCell>
                  <TableCell className="w-[250px] p-4 text-sm">
                    <div className="font-medium">{row.studentName}</div>
                    <div className="text-sm text-gray-500">
                      Roll No: {row.rollNo}
                      <br />
                      <span className="text-blue-600 hover:underline cursor-pointer">
                        Class - {row.classSection}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    {row.category}
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    {row.feeType}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {row.amount}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {row.discount}
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    {row.payableAmount}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      View Remarks
                    </span>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-blue-600"
                    >
                      <Edit className="h-4 w-4" />
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

export default StudentFeeTable;
