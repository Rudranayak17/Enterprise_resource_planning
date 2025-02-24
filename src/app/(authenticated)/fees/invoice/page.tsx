import React from 'react';
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
import { Card, CardContent } from "@/components/ui/card";
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

const FeeManagement = () => {
  const feeRows = Array(25).fill({
    class: "11th",
    section: "C",
    feeType: "Monthly",
    month: "April 2025",
    totalStudent: 80,
    feeGenerated: 80,
    status: "Generated 5/5",
  });

  return (
    <div className="p-4 space-y-6">
      {/* Fee Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Fee Type</div>
            <div className="font-semibold">Monthly Fee</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Fee Generated</div>
            <div className="font-semibold text-gray-900">Rs 5,00,000</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Fee Received</div>
            <div className="font-semibold text-green-600">Rs 3,00,000</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Fee Pending</div>
            <div className="font-semibold text-red-600">Rs 1,50,000</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Fee Discount</div>
            <div className="font-semibold text-yellow-600">Rs 50,000</div>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-4 items-center">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="branch1">Branch 1</SelectItem>
              <SelectItem value="branch2">Branch 2</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Fee Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="annual">Annual</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="april">April</SelectItem>
              <SelectItem value="may">May</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11">11th</SelectItem>
              <SelectItem value="12">12th</SelectItem>
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
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <Button>Generate All</Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[120px] text-xs">Class</TableHead>
                <TableHead className="w-[120px] text-xs">Section</TableHead>
                <TableHead className="w-[150px] text-xs">Fee Type</TableHead>
                <TableHead className="w-[150px] text-xs">Month</TableHead>
                <TableHead className="w-[150px] text-xs">Total Student</TableHead>
                <TableHead className="w-[150px] text-xs">Fee Generated</TableHead>
                <TableHead className="w-[150px] text-xs">Status</TableHead>
                <TableHead className="w-[150px] text-xs">Info</TableHead>
                <TableHead className="w-[150px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-500px)] overflow-auto">
          <Table>
            <TableBody>
              {feeRows.map((row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="w-[120px] p-4 text-sm">{row.class}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{row.section}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{row.feeType}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{row.month}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{row.totalStudent}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{row.feeGenerated}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{row.status}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    <Button 
                      variant="link" 
                      className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal"
                    >
                      View Info
                    </Button>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-right">
                    <Button 
                      className="bg-blue-500 hover:bg-blue-600" 
                      size="sm"
                    >
                      Generate
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

export default FeeManagement;