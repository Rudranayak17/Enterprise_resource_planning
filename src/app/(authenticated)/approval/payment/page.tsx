"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical, Info } from "lucide-react"; // Importing the info icon from Lucide React

const paymentData = Array.from({ length: 90 }, (_, index) => ({
  id: index + 1,
  user: "Rahul David",
  userAccount: "Cash in Hand",
  school: "Aatreya Academy",
  schoolAccount: "Cash in Hand",
  amount: "Rs 4890",
  date: "14/02/2025",
  status: "Pending",
}));

export default function PaymentTransferApprovalTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Pagination logic
  const totalItems = paymentData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = paymentData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="mx-4 p-3 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Payment Transfer Approval: {totalItems}</h1>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="User" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Rahul David">Rahul David</SelectItem>
              <SelectItem value="Other User">Other User</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="School" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Aatreya Academy">Aatreya Academy</SelectItem>
              <SelectItem value="Other School">Other School</SelectItem>
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
          <Button className="bg-blue-500 text-white">+ Add Payment</Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[120px] text-xs">User</TableHead>
              <TableHead className="w-[120px] text-xs">User Account</TableHead>
              <TableHead className="w-[120px] text-xs">School</TableHead>
              <TableHead className="w-[120px] text-xs">School Account</TableHead>
              <TableHead className="w-[100px] text-xs">Amount</TableHead>
              <TableHead className="w-[100px] text-xs">Date</TableHead>
              <TableHead className="w-[100px] text-xs">Status</TableHead>
              <TableHead className="w-[120px] text-xs text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((payment) => (
                <TableRow key={payment.id} className="hover:bg-gray-50">
                  <TableCell className="w-[120px] p-4 text-sm">{payment.user}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{payment.userAccount}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{payment.school}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{payment.schoolAccount}</TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">{payment.amount}</TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">{payment.date}</TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">
                    <span className={payment.status === "Pending" ? "text-red-600" : "text-green-600"}>
                      {payment.status}
                    </span>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4 text-gray-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => console.log(`View ${payment.id}`)}>
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log(`Info ${payment.id}`)}
                          className="text-blue-600"
                        >
                          <Info className="h-4 w-4 mr-2" /> Info
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
                className={currentPage === 1 ? "disabled" : ""}
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
                className={currentPage === totalPages ? "disabled" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}