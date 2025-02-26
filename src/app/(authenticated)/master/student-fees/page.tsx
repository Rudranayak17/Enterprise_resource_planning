"use client";

import React, { useEffect, useState } from "react";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Download, MoreVertical, Plus } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const studentFeeData = Array.from({ length: 59 }, (_, index) => ({
  id: index + 1,
  photo: "/placeholder-avatar.jpg",
  studentName: "Ravi Pal (Roll No. 21)",
  category: "Class - 9th B",
  feeType: "Monthly",
  amount: "Rs 12000",
  discount: "2000",
  payableAmount: "Rs 10000",
  status: "Pending",
  remarks: "View Remarks",
}));

const StudentFeeTable = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = studentFeeData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = studentFeeData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (!mounted) return null;

  const isDarkTheme = resolvedTheme === "dark";

  return (
    <div className="p-4 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="font-medium">Total Student Fees:</span>
          <span className="bg-blue-50 px-4 py-2 rounded-md text-sm">
            {totalItems}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Input type="text" placeholder="Search Students" className="w-64" />
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Session" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-25">2024-25</SelectItem>
              <SelectItem value="2023-24">2023-24</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={(value) => {
              setItemsPerPage(parseInt(value));
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Fee
          </Button>
        </div>
      </div>

      {/* Table Container */}
      <div className="border rounded-lg">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader className={isDarkTheme ? "bg-gray-900" : "bg-gray-50"}>
              <TableRow
                className={
                  isDarkTheme
                    ? "text-white border-b-gray-700"
                    : "text-black border-b-gray-200"
                }
              >
                <TableHead className="w-[80px] text-xs p-4 text-center">Photo</TableHead>
                <TableHead className="w-[180px] text-xs p-4 text-center">Student Name</TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">Category</TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">Fee Type</TableHead>
                <TableHead className="w-[100px] text-xs p-4 text-center">Amount</TableHead>
                <TableHead className="w-[100px] text-xs p-4 text-center">Discount</TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">Payable Amount</TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">Status</TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">Remarks</TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Table Body */}
        <div className="max-h-[calc(100vh-280px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((fee) => (
                <TableRow
                  key={fee.id}
                  className={`${isDarkTheme ? "hover:bg-gray-800" : "hover:bg-gray-50"}`}
                >
                  <TableCell className="w-[80px] p-2 text-sm text-center">
                    <div className="w-12 h-12 overflow-hidden rounded-full border mx-auto">
                      <Image
                        src={fee.photo}
                        alt={`${fee.studentName}'s photo`}
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="w-[180px] p-2 text-sm font-medium text-center">
                    {fee.studentName}
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm text-center">
                    {fee.category}
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm text-center">
                    {fee.feeType}
                  </TableCell>
                  <TableCell className="w-[100px] p-2 text-sm text-center">
                    {fee.amount}
                  </TableCell>
                  <TableCell className="w-[100px] p-2 text-sm text-center">
                    {fee.discount}
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm text-center">
                    {fee.payableAmount}
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm text-center">
                    <span className={fee.status === "Pending" ? "text-red-600" : "text-green-600"}>
                      {fee.status}
                    </span>
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      {fee.remarks}
                    </a>
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="mx-auto flex">
                          <MoreVertical className="h-4 w-4 text-gray-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => console.log(`View ${fee.id}`)}>
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
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              />
            </PaginationItem>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    onClick={() => setCurrentPage(pageNum)}
                    isActive={currentPage === pageNum}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            {totalPages > 5 && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default StudentFeeTable;