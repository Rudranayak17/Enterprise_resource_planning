"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react"; // Importing the three-dot icon from Lucide React
import Image from "next/image";

const studentFeeData = Array.from({ length: 59 }, (_, index) => ({
  id: index + 1,
  photo: "/placeholder-avatar.jpg", // Use a placeholder or actual image path
  studentName: "Ravi Pal (Roll No. 21)",
  category: "Class - 9th B",
  feeType: "Monthly",
  amount: "Rs 12000",
  discount: "2000",
  payableAmount: "Rs 10000",
  status: "Pending",
  remarks: "View Remarks",
}));

export default function StudentFeeTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Pagination logic
  const totalItems = studentFeeData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = studentFeeData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mx-4 p-3 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Student Fee: {totalItems}</h1>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Session" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-25">2024-25</SelectItem>
              <SelectItem value="2023-24">2023-24</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9th-b">9th B</SelectItem>
              <SelectItem value="10th-a">10th A</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Student" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ravi-pal">Ravi Pal</SelectItem>
              <SelectItem value="rahul-singh">Rahul Singh</SelectItem>
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
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[80px] text-xs">Photo</TableHead>
              <TableHead className="w-[180px] text-xs">Student Name</TableHead>
              <TableHead className="w-[120px] text-xs">Category</TableHead>
              <TableHead className="w-[120px] text-xs">Fee Type</TableHead>
              <TableHead className="w-[100px] text-xs">Amount</TableHead>
              <TableHead className="w-[100px] text-xs">Discount</TableHead>
              <TableHead className="w-[120px] text-xs">
                Payable Amount
              </TableHead>
              <TableHead className="w-[120px] text-xs">Status</TableHead>
              <TableHead className="w-[120px] text-xs">Remarks</TableHead>
              <TableHead className="w-[120px] text-xs text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((fee) => (
                <TableRow key={fee.id} className="hover:bg-gray-50">
                  <TableCell className="w-[80px] p-4 text-sm">
                    <Image
                      src={fee.photo}
                      alt={`${fee.studentName}'s photo`}
                      width={55}
                      height={55}
                      className="rounded-full bg-gray-200"
                    />

                    <Image
                      src={fee.photo}
                      alt={`${fee.studentName}'s photo`}
                      width={55}
                      height={55}
                      className="rounded-full bg-gray-200"
                    />
                  </TableCell>
                  <TableCell className="w-[180px] p-4 text-sm font-medium">
                    {fee.studentName}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {fee.category}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {fee.feeType}
                  </TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">
                    {fee.amount}
                  </TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">
                    {fee.discount}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {fee.payableAmount}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <span className="text-red-600">{fee.status}</span>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <a href="#" className="text-blue-600 hover:underline">
                      {fee.remarks}
                    </a>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4 text-gray-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => console.log(`View ${fee.id}`)}
                        >
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log(`Delete ${fee.id}`)}
                          className="text-red-600"
                        >
                          Delete
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
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
          entries
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
           
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
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
          
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
