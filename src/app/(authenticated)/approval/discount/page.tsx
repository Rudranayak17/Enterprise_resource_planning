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
import { Input } from "@/components/ui/input";
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
import { MoreVertical, Info } from "lucide-react"; // Importing the info icon from Lucide React
import Image from "next/image";

const invoiceData = Array.from({ length: 90 }, (_, index) => ({
  id: index + 1,
  photo: "/placeholder-avatar.jpg", // Placeholder for the photo URL
  studentName: index % 2 === 0 ? "Ravi Pal" : "Ravi Pal B",
  fee: "Monthly",
  month: "February",
  amount: "Rs 12000",
  discount: "2000",
  payableAmount: "Rs 10000",
  status: "Pending",
}));

export default function InvoiceDiscountApprovalTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Pagination logic
  const totalItems = invoiceData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = invoiceData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mx-4 p-3 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">
          Invoice Discount Approval: {totalItems}
        </h1>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9th B">9th B</SelectItem>
              <SelectItem value="9th A">9th A</SelectItem>
              <SelectItem value="10th B">10th B</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Student" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ravi Pal">Ravi Pal</SelectItem>
              <SelectItem value="Ravi Pal B">Ravi Pal B</SelectItem>
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
          <Button className="bg-blue-500 text-white">+ Add Invoice</Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[80px] text-xs">Photo</TableHead>
              <TableHead className="w-[120px] text-xs">Student Name</TableHead>
              <TableHead className="w-[100px] text-xs">Fee</TableHead>
              <TableHead className="w-[100px] text-xs">Month</TableHead>
              <TableHead className="w-[100px] text-xs">Amount</TableHead>
              <TableHead className="w-[100px] text-xs">Discount</TableHead>
              <TableHead className="w-[120px] text-xs">
                Payable Amount
              </TableHead>
              <TableHead className="w-[100px] text-xs">Status</TableHead>
              <TableHead className="w-[120px] text-xs">Remarks</TableHead>
              <TableHead className="w-[120px] text-xs text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((invoice) => (
                <TableRow key={invoice.id} className="hover:bg-gray-50">
                  <TableCell className="w-[80px] p-4 text-sm">
                    <Image
                      src={invoice.photo}
                      alt={invoice.studentName}
                      width={55}
                      height={55}
                      className="rounded-full bg-gray-200"
                    />
              
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {invoice.studentName}
                  </TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">
                    {invoice.fee}
                  </TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">
                    {invoice.month}
                  </TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">
                    {invoice.amount}
                  </TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">
                    {invoice.discount}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    {invoice.payableAmount}
                  </TableCell>
                  <TableCell className="w-[100px] p-4 text-sm">
                    <span
                      className={
                        invoice.status === "Pending"
                          ? "text-red-600"
                          : "text-green-600"
                      }
                    >
                      {invoice.status}
                    </span>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <Button
                      variant="link"
                      className="p-0 text-blue-500 hover:underline"
                    >
                      View Remarks
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
                        <DropdownMenuItem
                          onClick={() => console.log(`View ${invoice.id}`)}
                        >
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log(`Info ${invoice.id}`)}
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
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
          entries
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
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
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
