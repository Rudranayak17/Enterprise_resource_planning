"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical, Info } from "lucide-react"; // Importing the info icon from Lucide React

const feeApprovalData = Array.from({ length: 90 }, (_, index) => ({
  id: index + 1,
  photo: "/placeholder-avatar.jpg", // Placeholder for the photo URL
  studentName: index % 2 === 0 ? "Ravi Pal" : "Ravi Pal B",
  class: "9th B",
  category: "Monthly",
  feeType: "Tuition Fee",
  amount: "Rs 12000",
  discount: "2000",
  payableAmount: "Rs 10000",
  status: "Pending",
}));

export default function StudentFeeApprovalTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Pagination logic
  const totalItems = feeApprovalData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = feeApprovalData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="mx-4 p-3 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Student Fee Approval: {totalItems}</h1>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9th B">9th B</SelectItem>
              <SelectItem value="9th A">9th A</SelectItem>
              <SelectItem value="10th B">10th B</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Student" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ravi Pal">Ravi Pal</SelectItem>
              <SelectItem value="Ravi Pal B">Ravi Pal B</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Download</Button>
          <select
            className="border rounded p-2"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(parseInt(e.target.value, 10));
              setCurrentPage(1);
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <Button className="bg-blue-500 text-white">+ Add Fee</Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[80px] text-xs">Photo</TableHead>
              <TableHead className="w-[120px] text-xs">Student Name</TableHead>
              <TableHead className="w-[100px] text-xs">Class</TableHead>
              <TableHead className="w-[100px] text-xs">Category</TableHead>
              <TableHead className="w-[120px] text-xs">Fee Type</TableHead>
              <TableHead className="w-[100px] text-xs">Amount</TableHead>
              <TableHead className="w-[100px] text-xs">Discount</TableHead>
              <TableHead className="w-[120px] text-xs">Payable Amount</TableHead>
              <TableHead className="w-[100px] text-xs">Status</TableHead>
              <TableHead className="w-[120px] text-xs">Remarks</TableHead>
              <TableHead className="w-[120px] text-xs text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((fee) => (
                <TableRow key={fee.id} className="hover:bg-gray-50">
                  <TableCell className="w-[80px] p-4 text-sm">
                    <img
                      src={fee.photo}
                      alt={`${fee.studentName}'s photo`}
                      className="w-10 h-10 rounded-full"
                    />
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{fee.studentName}</TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">{fee.class}</TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">{fee.category}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{fee.feeType}</TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">{fee.amount}</TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">{fee.discount}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{fee.payableAmount}</TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">
                    <span className={fee.status === "Pending" ? "text-red-600" : "text-green-600"}>
                      {fee.status}
                    </span>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <Button variant="link" className="p-0 text-blue-500 hover:underline">
                      View Remarks
                    </Button>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4 text-gray-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => console.log(`View ${fee.id}`)}>
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log(`Info ${fee.id}`)}
                          className="text-blue-600"
                        >
                          <Info className="h-4 w-4 mr-2" /> Info
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  onClick={() => setCurrentPage(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}