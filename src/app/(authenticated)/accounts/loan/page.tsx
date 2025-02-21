import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, Download, Plus, Grid, PenSquare, Trash2 } from "lucide-react";

interface Loan {
  companyName: string;
  amount: string;
  rate: string;
  time: string;
  timePeriod: string;
  emi: string;
  paid: string;
  remaining: string;
  nextEmiDate: string;
  status: string;
}

const LoanDashboard = () => {
  const loans: Loan[] = Array(12).fill({
    companyName: "XYZ Pvt Ltd.",
    amount: "Rs 34,000",
    rate: "Rs 30,000",
    time: "12/02/23 - 12/02/24",
    timePeriod: "24 Months",
    emi: "Rs 30,000",
    paid: "Rs 10,000",
    remaining: "Rs 20,000",
    nextEmiDate: "12/02/2025",
    status: "Active"
  });

  return (
    <div className="p-4 space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Total Loan (12)</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input placeholder="Search Company" className="pl-8 w-64" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            PDF Download
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Excel Download
          </Button>
          <Select defaultValue="10">
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Loan
          </Button>
        </div>
      </div>

      {/* Table Section with Fixed Header and Scrollable Body */}
      <div className="border rounded-md">
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Company Name</TableHead>
                <TableHead className="w-[120px]">Amount</TableHead>
                <TableHead className="w-[120px]">Rate</TableHead>
                <TableHead className="w-[200px]">Time</TableHead>
                <TableHead className="w-[120px]">EMI</TableHead>
                <TableHead className="w-[120px]">Paid</TableHead>
                <TableHead className="w-[120px]">Remaining</TableHead>
                <TableHead className="w-[200px]">Next EMI Date</TableHead>
                <TableHead className="w-[120px]">Status</TableHead>
                <TableHead className="w-[150px] text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
        <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
          <Table>
            <TableBody>
              {loans.map((loan, index) => (
                <TableRow key={index}>
                  <TableCell className="w-[200px] font-medium">{loan.companyName}</TableCell>
                  <TableCell className="w-[120px]">{loan.amount}</TableCell>
                  <TableCell className="w-[120px]">{loan.rate}</TableCell>
                  <TableCell className="w-[200px]">
                    <div>{loan.time}</div>
                    <div className="text-sm text-gray-500">{loan.timePeriod}</div>
                  </TableCell>
                  <TableCell className="w-[120px]">{loan.emi}</TableCell>
                  <TableCell className="w-[120px] text-green-600">{loan.paid}</TableCell>
                  <TableCell className="w-[120px] text-red-600">{loan.remaining}</TableCell>
                  <TableCell className="w-[200px]">
                    {loan.nextEmiDate}
                    <Button variant="secondary" size="sm" className="ml-2">
                      Pay Now
                    </Button>
                  </TableCell>
                  <TableCell className="w-[120px]">
                    <span className="px-2 py-1 rounded-full text-sm text-green-700 bg-green-100">
                      {loan.status}
                    </span>
                  </TableCell>
                  <TableCell className="w-[150px] text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="icon" className="w-8 h-8">
                        <Grid className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="w-8 h-8">
                        <PenSquare className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="w-8 h-8 text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">Showing 1-10 of 12 entries</div>
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
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default LoanDashboard;