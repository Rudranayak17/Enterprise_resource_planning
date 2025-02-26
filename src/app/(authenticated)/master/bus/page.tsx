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

const busData = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  busNo: "HR CHNJH2",
  driver: "Rajesh Pal",
  helper: "Rahul Singh",
  busType: "Own",
  gpsInstalled: true,
  cameraInstalled: false,
  documentExpiry: "View Details",
}));

const BusTable = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = busData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = busData.slice(
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
          <span className="font-medium">Total Buses:</span>
          <span className="bg-blue-50 px-4 py-2 rounded-md text-sm">
            {totalItems}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Input type="text" placeholder="Search Bus" className="w-64" />
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Bus Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="own">Own</SelectItem>
              <SelectItem value="rented">Rented</SelectItem>
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
            Add Bus
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
                <TableHead className="w-[150px] text-xs p-4 text-center">Bus No.</TableHead>
                <TableHead className="w-[180px] text-xs p-4 text-center">Driver</TableHead>
                <TableHead className="w-[180px] text-xs p-4 text-center">Helper</TableHead>
                <TableHead className="w-[100px] text-xs p-4 text-center">Bus Type</TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">GPS Installed</TableHead>
                <TableHead className="w-[130px] text-xs p-4 text-center">Camera Installed</TableHead>
                <TableHead className="w-[140px] text-xs p-4 text-center">Document Expiry</TableHead>
                <TableHead className="w-[120px] text-xs p-4 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Table Body */}
        <div className="max-h-[calc(100vh-280px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((bus) => (
                <TableRow
                  key={bus.id}
                  className={`${isDarkTheme ? "hover:bg-gray-800" : "hover:bg-gray-50"}`}
                >
                  <TableCell className="w-[150px] p-4 text-sm text-center">
                    {bus.busNo}
                  </TableCell>
                  <TableCell className="w-[180px] p-4 text-sm font-medium text-center">
                    {bus.driver}
                  </TableCell>
                  <TableCell className="w-[180px] p-4 text-sm text-center">
                    {bus.helper}
                  </TableCell>
                  <TableCell className="w-[100px] p-4 text-sm text-center">
                    {bus.busType}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm text-center">
                    <span className={bus.gpsInstalled ? "text-green-600" : "text-red-600"}>
                      {bus.gpsInstalled ? "Yes" : "No"}
                    </span>
                  </TableCell>
                  <TableCell className="w-[130px] p-4 text-sm text-center">
                    <span className={bus.cameraInstalled ? "text-green-600" : "text-red-600"}>
                      {bus.cameraInstalled ? "Yes" : "No"}
                    </span>
                  </TableCell>
                  <TableCell className="w-[140px] p-4 text-sm text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      {bus.documentExpiry}
                    </a>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="mx-auto flex">
                          <MoreVertical className="h-4 w-4 text-gray-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => console.log(`View ${bus.id}`)}>
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log(`Delete ${bus.id}`)}
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

export default BusTable;