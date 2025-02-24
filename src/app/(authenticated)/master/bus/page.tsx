"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react"; // Importing the three-dot icon from Lucide React

const busData = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  busNo: "HR CHNJH2",
  driver: "Rajesh Pal",
  helper: "Rahul Singh",
  busType: "Own",
  gpsInstalled: true,
  cameraInstalled: false,
  documentExpiry: "View Details",
}));

export default function BusTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Pagination logic
  const totalItems = busData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = busData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="mx-4 p-3 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Bus: {totalItems}</h1>
        <div className="flex gap-2">
          <Input type="text" placeholder="Search Bus" className="w-64" />
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
      <div className="border rounded-lg overflow-hidden">
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableHeader className="bg-gray-50 sticky top-0 z-10">
              <TableRow>
                <TableHead className="w-[100px] text-xs">Bus No.</TableHead>
                <TableHead className="w-[120px] text-xs">Driver</TableHead>
                <TableHead className="w-[120px] text-xs">Helper</TableHead>
                <TableHead className="w-[100px] text-xs">Bus Type</TableHead>
                <TableHead className="w-[120px] text-xs">GPS Installed</TableHead>
                <TableHead className="w-[130px] text-xs">Camera Installed</TableHead>
                <TableHead className="w-[140px] text-xs">Document Expiry</TableHead>
                <TableHead className="w-[120px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((bus) => (
                <TableRow key={bus.id} className="hover:bg-gray-50">
                  <TableCell className="w-[100px] p-4 text-sm">{bus.busNo}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{bus.driver}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{bus.helper}</TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">{bus.busType}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{bus.gpsInstalled.toString()}</TableCell>
                  <TableCell className="w-[130px] p-4 text-sm">{bus.cameraInstalled.toString()}</TableCell>
                  <TableCell className="w-[140px] p-4 text-sm">
                    <a href="#" className="text-blue-600 hover:underline">
                      {bus.documentExpiry}
                    </a>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
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