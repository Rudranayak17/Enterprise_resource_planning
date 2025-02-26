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

// Sample data (70 entries)
const staffData = Array.from({ length: 70 }, (_, index) => ({
  id: index + 1,
  photo: "/placeholder-avatar.jpg",
  name: "Ravi Dubey",
  role: "PGT Teacher",
  email: "xyz@gmail.com",
  phone: "9852365896",
  address: "Ramgarh, Sector 50, Gurugram, Haryana",
  status: "Active",
}));

const StaffTable = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = staffData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = staffData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (!mounted) return null;

  const isDarkTheme = resolvedTheme === "dark";

  return (
    <div className="p-4  space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="font-medium">Total Staff:</span>
          <span className="bg-blue-50 px-4 py-2 rounded-md text-sm">
            {totalItems}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Input type="text" placeholder="Search User" className="w-64" />
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="pgt">PGT</SelectItem>
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
            Add Staff
          </Button>
        </div>
      </div>

      {/* Table Container - Takes remaining space between header and pagination */}
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
              <TableHead className="w-[180px] text-xs p-4 text-center">Name</TableHead>
              <TableHead className="w-[180px] text-xs p-4 text-center">Role/Type</TableHead>
              <TableHead className="w-[180px] text-xs p-4 text-center">Email/Phone No.</TableHead>
              <TableHead className="w-[250px] text-xs p-4 text-center">Address</TableHead>
              <TableHead className="w-[120px] text-xs p-4 text-center">Status</TableHead>
              <TableHead className="w-[120px] text-xs p-4 text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        </div>

        {/* Scrollable Table Body */}
        <div className="max-h-[calc(100vh-280px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((staff) => (
                <TableRow
                  key={staff.id}
                  className={`${isDarkTheme ? "hover:bg-gray-800" : "hover:bg-gray-50"}`}
                >
                  <TableCell className="w-[80px] p-2 text-sm text-center">
                    <div className="w-12 h-12 overflow-hidden rounded-full border mx-auto">
                      <Image
                        src={staff.photo}
                        alt={`${staff.name}'s photo`}
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="w-[180px] p-2 text-sm font-medium text-center">
                    {staff.name}
                  </TableCell>
                  <TableCell className="w-[180px] p-2 text-sm text-center">
                    {staff.role}
                  </TableCell>
                  <TableCell className="w-[180px] p-2 text-sm text-center">
                    <p>{staff.email}</p>
                    <p className="text-xs text-blue-600">{staff.phone}</p>
                  </TableCell>
                  <TableCell className="w-[250px] p-2 text-sm text-center">
                    {staff.address}
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm text-center">
                    <span className="text-green-600">{staff.status}</span>
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="mx-auto flex">
                          <MoreVertical className="h-4 w-4 text-gray-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => console.log(`View ${staff.id}`)}>
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log(`Delete ${staff.id}`)}
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

       <div className="mt-4 flex items-center justify-between ">
           <div className="text-sm text-gray-500 dark:text-gray-400">Showing 1-10 of 25 entries</div>
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

export default StaffTable;