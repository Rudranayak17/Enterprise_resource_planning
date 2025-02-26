"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
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
import { MoreVertical, Plus, UserCircle2 } from "lucide-react";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";

export default function StaffTable() {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkTheme = resolvedTheme === "dark";
  const staffList = Array(18)
    .fill({
      name: "Ravi Dubey",
      gender: "Male",
      role: "Teacher",
      type: "PGT",
      email: "xyz@gmail.com",
      phone: "9852365896",
      address: "Rangpeth, Sector 50, Gurgaon Haryana",
    })
    .map((staff, index) => ({ ...staff, id: index + 1 }));

  // Pagination logic
  const totalItems = staffList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = staffList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mx-4 p-3 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Total Staff: {totalItems}</h1>
        <div className="flex gap-2">
          <Input type="text" placeholder="Search User" className="w-64" />

          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Download" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-25">Excel</SelectItem>
              <SelectItem value="2023-24">Pdf</SelectItem>
            </SelectContent>
          </Select>

          <select
            className="border rounded p-1"
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
          <Button className="bg-blue-500 hover:bg-blue-800">
            <Plus/>
            Add Parent
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader
            className={`${
              isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-50 text-black"
            }`}
          >
            <TableRow>
              <TableHead className="w-[80px] text-xs">Photo</TableHead>
              <TableHead className="w-[180px] text-xs">Name</TableHead>
              <TableHead className="w-[150px] text-xs">Role/Type</TableHead>
              <TableHead className="w-[200px] text-xs">Email/Phone No.</TableHead>
              <TableHead className="text-xs">Address</TableHead>
              <TableHead className="w-[100px] text-xs text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="max-h-[calc(100vh-280px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((staff) => (
                <TableRow key={staff.id}>
                  <TableCell className="w-[80px] p-2">
                    <UserCircle2 className="h-10 w-10 text-gray-400" />
                  </TableCell>
                  <TableCell className="w-[180px] p-2 font-medium">
                    <div>{staff.name}</div>
                    <div className="text-sm text-gray-500">{staff.gender}</div>
                  </TableCell>
                  <TableCell className="w-[150px] p-2">
                    <div>{staff.role}</div>
                    <div className="text-sm text-blue-600">{staff.type}</div>
                  </TableCell>
                  <TableCell className="w-[200px] p-2">
                    <div className="text-blue-600">{staff.email}</div>
                    <div>{staff.phone}</div>
                  </TableCell>
                  <TableCell className="p-4 text-sm">{staff.address}</TableCell>
                  <TableCell className="w-[100px] p-2 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between sticky bottom-0 bg-white py-2 border-t">
        <div className="text-sm text-gray-500">
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
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
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}