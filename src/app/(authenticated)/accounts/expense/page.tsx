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
import { Search, Download, Plus, Grid, PenSquare } from "lucide-react";
import Image from "next/image";

interface Expense {
  photo: string;
  companyName: string;
  amount: string;
  modeMethod: string;
  paymentId: string;
  transactionId: string;
  status: string;
  date: string;
}

const ExpenseDashboard = () => {
  const expenses: Expense[] = Array(12).fill({
    photo: "/api/placeholder/40/40",
    companyName: "XYZ Pvt Ltd.",
    amount: "Rs 34,000",
    modeMethod: "Offline & Cash",
    paymentId: "#345544345",
    transactionId: "#895544345",
    status: "Paid",
    date: "14/02/2024",
  });

  return (
    <div className="p-4 space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Total Expense (12)</h2>
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
            Add Expense
          </Button>
        </div>
      </div>

      {/* Table Section with Fixed Header and Scrollable Body */}
      <div className="border rounded-md">
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Photo</TableHead>
                <TableHead className="w-[200px]">Company Name</TableHead>
                <TableHead className="w-[120px]">Amount</TableHead>
                <TableHead className="w-[150px]">Mode & Method</TableHead>
                <TableHead className="w-[150px]">Payment ID</TableHead>
                <TableHead className="w-[150px]">Transaction ID</TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead className="w-[120px]">Date</TableHead>
                <TableHead className="w-[120px] text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
        <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
          <Table>
            <TableBody>
              {expenses.map((expense, index) => (
                <TableRow key={index}>
                  <TableCell className="w-[80px]">
                    <Image
                      src={expense.photo}
                      alt={expense.companyName}
                      width={55}
                      height={55}
                      className="rounded-full bg-gray-200"
                    />
                  </TableCell>
                  <TableCell className="w-[200px] font-medium">
                    {expense.companyName}
                  </TableCell>
                  <TableCell className="w-[120px]">{expense.amount}</TableCell>
                  <TableCell className="w-[150px]">
                    {expense.modeMethod}
                  </TableCell>
                  <TableCell className="w-[150px]">
                    <span className="text-blue-600">{expense.paymentId}</span>
                  </TableCell>
                  <TableCell className="w-[150px]">
                    {expense.transactionId}
                  </TableCell>
                  <TableCell className="w-[100px]">
                    <span className="px-2 py-1 rounded-full text-sm text-green-700 bg-green-100">
                      {expense.status}
                    </span>
                  </TableCell>
                  <TableCell className="w-[120px]">{expense.date}</TableCell>
                  <TableCell className="w-[120px] text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="icon" className="w-8 h-8">
                        <Grid className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="w-8 h-8">
                        <PenSquare className="h-4 w-4" />
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

export default ExpenseDashboard;
