"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical, Eye, Edit, Trash } from "lucide-react"; // Importing icons from Lucide React

const classData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  className: "11th",
  section: "C",
  inCharge: "Ravi Singh",
  totalStudents: "80",
}));

export default function ClassTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on search term
  const filteredData = classData.filter((classInfo) =>
    classInfo.className.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="mx-4 p-3 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Total Classes: {totalItems}</h1>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11th">11th</SelectItem>
              <SelectItem value="10th">10th</SelectItem>
              <SelectItem value="9th">9th</SelectItem>
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
          <Input
            type="text"
            placeholder="Search Class"
            className="w-40"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <Button className="bg-blue-500 text-white">+ Add Class</Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[100px] text-xs">Class Name</TableHead>
              <TableHead className="w-[80px] text-xs">Section</TableHead>
              <TableHead className="w-[120px] text-xs">In-Charge</TableHead>
              <TableHead className="w-[100px] text-xs">Total Students</TableHead>
              <TableHead className="w-[120px] text-xs">Attendance</TableHead>
              <TableHead className="w-[120px] text-xs">Time Table</TableHead>
              <TableHead className="w-[100px] text-xs">Exam</TableHead>
              <TableHead className="w-[120px] text-xs text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((classInfo) => (
                <TableRow key={classInfo.id} className="hover:bg-gray-50">
                  <TableCell className="w-[100px] p-4 text-sm">{classInfo.className}</TableCell>
                  <TableCell className="w-[80px] p-4 text-sm">{classInfo.section}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{classInfo.inCharge}</TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">{classInfo.totalStudents}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <Button variant="link" className="p-0 text-blue-500 hover:underline">
                      View Attendance
                    </Button>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <Button variant="link" className="p-0 text-blue-500 hover:underline">
                      View Time Table
                    </Button>
                  </TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">
                    <Button variant="link" className="p-0 text-blue-500 hover:underline">
                      View Exam
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
                        <DropdownMenuItem onClick={() => console.log(`View ${classInfo.id}`)}>
                          <Eye className="h-4 w-4 mr-2 text-blue-600" /> View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log(`Edit ${classInfo.id}`)}
                          className="text-blue-600"
                        >
                          <Edit className="h-4 w-4 mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log(`Delete ${classInfo.id}`)}
                          className="text-red-600"
                        >
                          <Trash className="h-4 w-4 mr-2" /> Delete
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