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
import { useTheme } from "next-themes";
import { useMaster_classQuery } from "@/provider/api/auth";

const SkeletonRow = () => (
  <TableRow>
    <TableCell className="w-[80px] p-4 text-center">
      <div className="h-4 w-8 mx-auto bg-gray-200 animate-pulse rounded"></div>
    </TableCell>
    <TableCell className="w-[200px] p-4">
      <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
    </TableCell>
    <TableCell className="w-[120px] p-4">
      <div className="h-4 w-16 mx-auto bg-gray-200 animate-pulse rounded"></div>
    </TableCell>
  </TableRow>
);

const ClassTable = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { resolvedTheme } = useTheme();
  const { data, isLoading, isError } = useMaster_classQuery({
    page: currentPage,
    pageSize: itemsPerPage,
  });
  const [classData, setClassData] = useState([]);

  const jsonData = data || {
    data: [],
    page: 1,
    totalPages: 1,
    total: 0,
    pageSize: 10,
    filters: {},
  };
  // let isLoading=true
  const totalItems = jsonData.total;
  const totalPages = jsonData.totalPages;
  const paginatedData = jsonData.data;

  useEffect(() => {
    if (data) {
      setClassData(data.data);
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
          <span className="font-medium">Total Classes:</span>
          <span className="bg-blue-50 px-4 py-2 rounded-md text-sm">
            {totalItems}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Input type="text" placeholder="Search Classes" className="w-64" />
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lkg">LKG</SelectItem>
              <SelectItem value="ukg">UKG</SelectItem>
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
            Add Class
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
                  S.No.
                </TableHead>
                <TableHead className="w-[200px] text-xs p-4 text-center">
                  Class Name
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
                Array.from({ length: 10 }).map((_, index) => (
                  <SkeletonRow key={index} />
                ))
              ) : isError ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center p-4">
                    Error loading data
                  </TableCell>
                </TableRow>
              ) : paginatedData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center p-4">
                    No classes found
                  </TableCell>
                </TableRow>
              ) : (
                paginatedData.map((classItem: any, index: number) => (
                  <TableRow
                    key={classItem.id}
                    className={`${
                      isDarkTheme ? "hover:bg-gray-800" : "hover:bg-gray-50"
                    }`}
                  >
                    <TableCell className="w-[80px] p-4 text-sm text-center">
                      {index + 1}
                    </TableCell>
                    <TableCell className="w-[200px] p-4 text-sm font-medium text-center">
                      {classItem.class_name}
                    </TableCell>
                    <TableCell className="w-[120px] p-4 text-sm text-center">
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
                            onClick={() => console.log(`View ${classItem.id}`)}
                          >
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              console.log(`Delete ${classItem.id}`)
                            }
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
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
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

export default ClassTable;
