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
import { MoreVertical, Plus } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

// Sample data
const staffData = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  photo: "/placeholder-avatar.jpg",
  name: "Ravi Dubey",
  role: "PGT Teacher",
  email: "xyz@gmail.com",
  phone: "9852365896",
  address: "Ramgarh, Sector 50, Gurugram, Haryana",
  session: "2023-24",
  salary: "Rs 12,000",
  status: "Active",
}));

export default function StaffTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Pagination logic
  const totalItems = staffData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = staffData.slice(
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
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="pgt">PGT</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Download" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-25">Excel</SelectItem>
              <SelectItem value="2023-24">Pdf</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus />
            User Session
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[80px] text-xs">Photo</TableHead>
              <TableHead className="w-[180px] text-xs">Name</TableHead>
              <TableHead className="w-[180px] text-xs">Role/Type</TableHead>
              <TableHead className="w-[180px] text-xs">
                Email/Phone No.
              </TableHead>
              <TableHead className="w-[180px] text-xs">Address</TableHead>
              <TableHead className="w-[120px] text-xs">Session</TableHead>
              <TableHead className="w-[120px] text-xs">Salary</TableHead>
              <TableHead className="w-[120px] text-xs">Status</TableHead>
              <TableHead className="w-[120px] text-xs text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((staff) => (
                <TableRow key={staff.id} className="hover:bg-gray-50">
                  <TableCell className="w-[80px] p-4 text-sm">
                    <Image
                      src={staff.photo}
                      alt={`${staff.name}'s photo`}
                      width={70} // Adjusted to match StudentFeeTable
                      height={55}
                      className="rounded-full bg-gray-200"
                    />
                  </TableCell>
                  <TableCell className="w-[180px] p-4 text-sm font-medium">
                    {staff.name}
                  </TableCell>
                  <TableCell className="w-[180px] p-4 text-sm">
                    {staff.role}
                  </TableCell>
                  <TableCell className="w-[180px] p-4 text-sm">
                    <p>{staff.email}</p>
                    <p className="text-xs text-blue-600">{staff.phone}</p>
                  </TableCell>
                  <TableCell className="w-[180px] p-4 text-sm">
                    {staff.address}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {staff.session}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {staff.salary}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <span className="text-green-600">{staff.status}</span>
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
                          onClick={() => console.log(`View ${staff.id}`)}
                        >
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
