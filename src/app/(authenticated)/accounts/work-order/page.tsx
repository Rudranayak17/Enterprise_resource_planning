import React from "react";
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
import {
  Download,
  Plus,
  LayoutGrid,
  PenSquare,
  Trash2,
} from "lucide-react";

interface WorkOrder {
  companyName: string;
  workOrder: string;
  amount: string;
  paid: string;
  remaining: string;
  createdBy: string;
  status: string;
}

const WorkOrderDashboard = () => {
  const workOrders: WorkOrder[] = Array(12).fill({
    companyName: "XYZ Pvt Ltd.",
    workOrder: "ABC",
    amount: "Rs 30,000",
    paid: "Rs 10,000",
    remaining: "Rs 20,000",
    createdBy: "Rahul Verma",
    status: "Active"
  });

  return (
    <div className="p-4 space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Total Work Order (12)</h2>
        <div className="flex items-center gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Company ID" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Companies</SelectItem>
              <SelectItem value="xyz">XYZ Pvt Ltd.</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
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
          <Button className="flex items-center gap-2 bg-blue-600">
            <Plus className="h-4 w-4" />
            Add Work Order
          </Button>
        </div>
      </div>

      {/* Table Section with Fixed Header */}
      <div className="border rounded-md">
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-[200px]">Company Name</TableHead>
                <TableHead className="w-[150px]">Work Order</TableHead>
                <TableHead className="w-[150px]">Amount</TableHead>
                <TableHead className="w-[150px]">Paid</TableHead>
                <TableHead className="w-[150px]">Remaining</TableHead>
                <TableHead className="w-[150px]">Created by</TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead className="w-[150px] text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
        <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
          <Table>
            <TableBody>
              {workOrders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell className="w-[200px] font-medium">
                    {order.companyName}
                  </TableCell>
                  <TableCell className="w-[150px]">{order.workOrder}</TableCell>
                  <TableCell className="w-[150px] font-medium">
                    {order.amount}
                  </TableCell>
                  <TableCell className="w-[150px] text-green-600">
                    {order.paid}
                  </TableCell>
                  <TableCell className="w-[150px] text-red-600">
                    {order.remaining}
                  </TableCell>
                  <TableCell className="w-[150px]">{order.createdBy}</TableCell>
                  <TableCell className="w-[100px]">
                    <span className="px-2 py-1 rounded-full text-sm text-green-700 bg-green-100">
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell className="w-[150px] text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-blue-100"
                      >
                        <LayoutGrid className="h-4 w-4 text-blue-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-blue-100"
                      >
                        <LayoutGrid className="h-4 w-4 text-blue-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-blue-100"
                      >
                        <PenSquare className="h-4 w-4 text-blue-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-blue-100"
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Footer with Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing 1-10 of 12 entries
        </div>
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

export default WorkOrderDashboard;