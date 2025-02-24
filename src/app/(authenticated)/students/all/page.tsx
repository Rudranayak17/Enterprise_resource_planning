"use client";

import React, { useState } from "react";
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
import { MoreVertical, Info, Grid, PenSquare, Trash2 } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

interface Student {
  id: number;
  photo: string;
  name: string;
  gender: string;
  admissionNo: string;
  dob: string;
  class: string;
  rollNo: string;
  guardianName: string;
  phone: string;
  address: string;
}

const studentData: Student[] = Array.from({ length: 18 }, (_, index) => ({
  id: index + 1,
  photo: "/placeholder-avatar.jpg",
  name: "Ravi Dubey",
  gender: "Male",
  admissionNo: "20EE093",
  dob: "05/02/2008",
  class: "10th C",
  rollNo: "89",
  guardianName: "Ruhi Dubey/Manish Dubey",
  phone: "9852365896",
  address: "Ramgaarh, Sector 50, Gurgaon, Haryana",
}));

export default function StudentManagementDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Pagination logic
  const totalItems = studentData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = studentData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mx-4 p-3 space-y-6 min-h-screen flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/students">Students</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/students/all">All</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-lg font-semibold">Total Students: {totalItems}</h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Input
            type="text"
            placeholder="Search Students"
            className="w-full sm:w-64"
          />
          <Select>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10c">10th C</SelectItem>
              <SelectItem value="10b">10th B</SelectItem>
              <SelectItem value="10a">10th A</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Download" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="excel">Excel</SelectItem>
              <SelectItem value="pdf">PDF</SelectItem>
            </SelectContent>
          </Select>
          <select
            className="border rounded p-1 w-full sm:w-auto"
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
      <div className="border rounded-lg flex-grow">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[80px] text-xs">Photo</TableHead>
              <TableHead className="w-[180px] text-xs">Name</TableHead>
              <TableHead className="w-[180px] text-xs">Admission No.</TableHead>
              <TableHead className="w-[180px] text-xs">Class</TableHead>
              <TableHead className="w-[200px] text-xs">Guardian Name</TableHead>
              <TableHead className="w-[250px] text-xs">Address</TableHead>
              <TableHead className="w-[120px] text-xs text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((student) => (
                <TableRow key={student.id} className="hover:bg-gray-50">
                  <TableCell className="w-[80px] p-4 text-sm">
                    <Image
                      src={student.photo}
                      alt={`${student.name}'s photo`}
                      width={70}
                      height={55}
                      className="rounded-full bg-gray-200"
                    />
                  </TableCell>
                  <TableCell className="w-[180px] p-4 text-sm font-medium">
                    <div>{student.name}</div>
                    <div className="text-gray-500 text-xs">
                      {student.gender}
                    </div>
                  </TableCell>
                  <TableCell className="w-[180px] p-4 text-sm">
                    <div>{student.admissionNo}</div>
                    <div className="text-blue-600 text-xs">{student.dob}</div>
                  </TableCell>
                  <TableCell className="w-[180px] p-4 text-sm">
                    <div>{student.class}</div>
                    <div className="text-gray-500 text-xs">
                      Roll no. {student.rollNo}
                    </div>
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">
                    <div className="truncate">{student.guardianName}</div>
                    <div className="text-blue-600 text-xs">{student.phone}</div>
                  </TableCell>
                  <TableCell className="w-[250px] p-4 text-sm">
                    <div className="truncate">{student.address}</div>
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
                          onClick={() => console.log(`View ${student.id}`)}
                        >
                          <Info className="h-4 w-4 mr-2" /> View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Grid className="h-4 w-4 mr-2" /> Attendance
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Grid className="h-4 w-4 mr-2" /> Results
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Grid className="h-4 w-4 mr-2" /> Schedule
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log(`Edit ${student.id}`)}
                        >
                          <PenSquare className="h-4 w-4 mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log(`Delete ${student.id}`)}
                          className="text-red-600"
                        >
                          <Trash2 className="h-4 w-4 mr-2" /> Delete
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
