"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react"; // Importing the three-dot icon from Lucide React

const sessionData = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  name: "Session 2024-25",
  startDate: "12/02/2023",
  endDate: "14/02/2024",
  feeDueDate: "12/02/2024",
  status: "Current Session",
}));

export default function SessionTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Pagination logic
  const totalItems = sessionData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = sessionData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="mx-4 p-3 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">All Session: {totalItems}</h1>
        <div className="flex gap-2">
          <Input type="text" placeholder="Search Session" className="w-64" />
          <Button className="bg-blue-500 text-white">+ Current Session</Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[150px] text-xs">Name</TableHead>
              <TableHead className="w-[120px] text-xs">Start Date</TableHead>
              <TableHead className="w-[120px] text-xs">End Date</TableHead>
              <TableHead className="w-[120px] text-xs">Fee Due Date</TableHead>
              <TableHead className="w-[150px] text-xs">Status</TableHead>
              <TableHead className="w-[120px] text-xs text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((session) => (
                <TableRow key={session.id} className="hover:bg-gray-50">
                  <TableCell className="w-[150px] p-4 text-sm">{session.name}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{session.startDate}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{session.endDate}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{session.feeDueDate}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    <span className="text-green-600">{session.status}</span>
          
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4 text-gray-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => console.log(`View ${session.id}`)}>
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log(`Delete ${session.id}`)}
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