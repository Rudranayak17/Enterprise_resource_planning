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
import { MoreVertical } from "lucide-react";

const subjectData = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  subjectName: "Maths",
  subjectType: "PGT",
}));

export default function SubjectTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Pagination logic
  const totalItems = subjectData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = subjectData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mx-4 p-3 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">All Subject: {totalItems}</h1>
        <div className="flex gap-2">
    

          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="maths">Maths</SelectItem>
              <SelectItem value="science">Science</SelectItem>
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
              <TableHead className="w-[200px] text-xs">Subject Name</TableHead>
              <TableHead className="w-[200px] text-xs">Subject Type</TableHead>
              <TableHead className="w-[120px] text-xs text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((subject) => (
                <TableRow key={subject.id} className="hover:bg-gray-50">
                  <TableCell className="w-[200px] p-4 text-sm">{subject.subjectName}</TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">{subject.subjectType}</TableCell>
                  <TableCell className="w-[120px] p-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4 text-gray-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => console.log(`View ${subject.id}`)}>
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log(`Delete ${subject.id}`)}
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