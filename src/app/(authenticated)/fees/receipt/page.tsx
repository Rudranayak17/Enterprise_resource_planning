import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";

const FeeReceipt = () => {
  const receiptRows = Array(25).fill({
    photo: "/api/placeholder/32/32",
    studentName: "Ravi Pal",
    rollNo: "23",
    classSection: "XII-B",
    feeType: "Monthly",
    feeMonth: "Feb 2025",
    amount: "Rs 20,000",
    dueDate: "12/12/2024",
    status: "Paid",
    paymentId: "FTPWER8788",
    transId: "KPJKGW5678",
    date: "14/02/2023",
  });

  return (
    <div className="p-4  space-y-6">
      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-4 items-center">
          <div className="font-semibold text-lg">Fee Receipt</div>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Section A</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">Class XII</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="b">Section B</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Fee Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="february">February</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-4 items-center">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
          <Select defaultValue="10">
            <SelectTrigger className="w-20">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <Button>Generate</Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[80px] text-xs">Photo</TableHead>
                <TableHead className="w-[250px] text-xs">
                  Student Name
                </TableHead>
                <TableHead className="w-[120px] text-xs">Fee Type</TableHead>
                <TableHead className="w-[120px] text-xs">Fee Month</TableHead>
                <TableHead className="w-[120px] text-xs">Amount</TableHead>
                <TableHead className="w-[120px] text-xs">Due Date</TableHead>
                <TableHead className="w-[150px] text-xs">Status</TableHead>
                <TableHead className="w-[150px] text-xs">Payment ID</TableHead>
                <TableHead className="w-[150px] text-xs">Trans. ID</TableHead>
                <TableHead className="w-[150px] text-xs text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-280px)] overflow-auto">
          <Table>
            <TableBody>
              {receiptRows.map((row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="w-[80px] p-2 text-sm">
             
                    <Image
                      src={row.photo}
                      alt={""}
                      width={55}
                      height={55}
                      className="rounded-full bg-gray-200"
                    />
                  </TableCell>
                  <TableCell className="w-[250px] p-2 text-sm">
                    <div>{row.studentName}</div>
                    <div className="text-sm text-gray-500">
                      Class: {row.classSection}
                      <br />
                      Roll No: {row.rollNo}
                    </div>
                    <div className="text-xs text-blue-600 hover:underline cursor-pointer">
                      View Details
                    </div>
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm">
                    {row.feeType}
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm">
                    {row.feeMonth}
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm">
                    {row.amount}
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm">
                    {row.dueDate}
                  </TableCell>
                  <TableCell className="w-[150px] p-2 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {row.status}
                      </span>
                      <span className="text-gray-500 text-sm cursor-pointer hover:text-gray-700">
                        Details
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="w-[150px] p-2 text-sm">
                    {row.paymentId}
                  </TableCell>
                  <TableCell className="w-[150px] p-2 text-sm">
                    {row.transId}
                  </TableCell>
                  <TableCell className="w-[150px] p-2 text-right">
                    <Button
                      size="sm"
                      variant="default"
                      className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Fee Receipt
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">Showing 1-10 of 25 entries</div>
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

export default FeeReceipt;
