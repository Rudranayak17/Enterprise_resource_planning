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
import { useGet_student_feeQuery } from "@/provider/api/auth";

const SkeletonRow = () => (
  <TableRow>
    <TableCell className="w-[80px] p-4 text-center">
      <div className="h-12 w-12 mx-auto bg-gray-200 animate-pulse rounded-full"></div>
    </TableCell>
    <TableCell className="w-[180px] p-4 text-center">
      <div className="h-4 w-32 mx-auto bg-gray-200 animate-pulse rounded"></div>
    </TableCell>
    <TableCell className="w-[120px] p-4 text-center">
      <div className="h-4 w-20 mx-auto bg-gray-200 animate-pulse rounded"></div>
    </TableCell>
    <TableCell className="w-[120px] p-4 text-center">
      <div className="h-4 w-20 mx-auto bg-gray-200 animate-pulse rounded"></div>
    </TableCell>
    <TableCell className="w-[100px] p-4 text-center">
      <div className="h-4 w-16 mx-auto bg-gray-200 animate-pulse rounded"></div>
    </TableCell>
    <TableCell className="w-[100px] p-4 text-center">
      <div className="h-4 w-12 mx-auto bg-gray-200 animate-pulse rounded"></div>
    </TableCell>
    <TableCell className="w-[120px] p-4 text-center">
      <div className="h-4 w-16 mx-auto bg-gray-200 animate-pulse rounded"></div>
    </TableCell>
    <TableCell className="w-[120px] p-4 text-center">
      <div className="h-4 w-16 mx-auto bg-gray-200 animate-pulse rounded"></div>
    </TableCell>
    <TableCell className="w-[120px] p-4 text-center">
      <div className="h-4 w-20 mx-auto bg-gray-200 animate-pulse rounded"></div>
    </TableCell>
    <TableCell className="w-[120px] p-4 text-center">
      <div className="h-4 w-8 mx-auto bg-gray-200 animate-pulse rounded"></div>
    </TableCell>
  </TableRow>
);

const StudentFeeTable = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [studentFeeData, setStudentFeeData] = useState([]);
  const { resolvedTheme } = useTheme();
  const { data, isLoading, isError } = useGet_student_feeQuery({
    page: currentPage,
    pageSize: itemsPerPage,
  });

  const jsonData = data || {
    data: [],
    page: 1,
    totalPages: 1,
    total: 0,
    pageSize: 10,
    filters: {},
  };

  const totalItems = jsonData.total;
  const totalPages = jsonData.totalPages;
  const paginatedData = jsonData.data;

  useEffect(() => {
    if (data) {
      setStudentFeeData(data.data);
    }
  }, [data]);

  useEffect(() => {
    setMounted(true);
  }, []);

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
                <TableHead className="w-[80px] text-xs p-4 text-center">
                  Photo
                </TableHead>
                <TableHead className="w-[180px] text-xs p-4 text-center">
                  Student Name
                </TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">
                  Category
                </TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">
                  Fee Type
                </TableHead>
                <TableHead className="w-[100px] text-xs p-4 text-center">
                  Amount
                </TableHead>
                <TableHead className="w-[100px] text-xs p-4 text-center">
                  Discount
                </TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">
                  Payable Amount
                </TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">
                  Status
                </TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">
                  Remarks
                </TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Table Body */}
        <div className="max-h-[calc(100vh-280px)] overflow-auto">
          <Table>
            <TableBody>
              {isLoading ? (
                // Display 5 skeleton rows while loading
                Array.from({ length: 5 }).map((_, index) => (
                  <SkeletonRow key={index} />
                ))
              ) : isError ? (
                <TableRow>
                  <TableCell colSpan={10} className="text-center p-4">
                    Error loading data
                  </TableCell>
                </TableRow>
              ) : paginatedData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={10} className="text-center p-4">
                    No student fee records found
                  </TableCell>
                </TableRow>
              ) : (
                paginatedData.map((fee:any) => (
                  <TableRow
                    key={fee.id}
                    className={`${
                      isDarkTheme ? "hover:bg-gray-800" : "hover:bg-gray-50"
                    }`}
                  >
                    <TableCell className="w-[80px] p-2 text-sm text-center">
                      <div className="w-12 h-12 overflow-hidden rounded-full border mx-auto">
                        <Image
                          src={fee.photo || "/placeholder-avatar.jpg"} // Fallback to placeholder if no photo
                          alt="Student photo"
                          width={100}
                          height={100}
                          className="rounded-full"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="w-[180px] p-2 text-sm font-medium text-center">
                      {fee.studentName || "N/A"} {/* Student name not in response */}
                    </TableCell>
                    <TableCell className="w-[120px] p-2 text-sm text-center">
                      {fee.FeeType?.fee_type || "N/A"}
                    </TableCell>
                    <TableCell className="w-[120px] p-2 text-sm text-center">
                      {fee.SubFeeType?.name || "N/A"}
                    </TableCell>
                    <TableCell className="w-[100px] p-2 text-sm text-center">
                      {`Rs ${fee.actual_amount}`}
                    </TableCell>
                    <TableCell className="w-[100px] p-2 text-sm text-center">
                      {fee.discounted_amount}
                    </TableCell>
                    <TableCell className="w-[120px] p-2 text-sm text-center">
                      {`Rs ${fee.payable_amount}`}
                    </TableCell>
                    <TableCell className="w-[120px] p-2 text-sm text-center">
                      <span
                        className={
                          fee.is_approved ? "text-green-600" : "text-red-600"
                        }
                      >
                        {fee.is_approved ? "Approved" : "Pending"}
                      </span>
                    </TableCell>
                    <TableCell className="w-[120px] p-2 text-sm text-center">
                      <a href="#" className="text-blue-600 hover:underline">
                        {fee.remarks || "View Remarks"}
                      </a>
                    </TableCell>
                    <TableCell className="w-[120px] p-2 text-sm text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mx-auto flex"
                          >
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
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      {!isLoading && !isError && paginatedData.length > 0 && (
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
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
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default StudentFeeTable;