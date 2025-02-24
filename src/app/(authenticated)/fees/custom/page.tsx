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
import { Camera, FileEdit, LayoutDashboard, Trash2, Download } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const FeeManagementList = () => {
  const studentRows = Array(25).fill({
    photo: "/api/placeholder/32/32",
    studentName: "Ravi Pal",
    rollNo: "23",
    classSection: "Class - XII-B",
    feeType: "Sports Meet",
    amount: "Rs 30,000",
    dueDate: "12/12/2024",
    status: "Paid",
    paymentId: "FTPWER8788",
    transId: "KPJKGW5678",
    date: "14/02/2023"
  });

  return (
    <div className="p-4  space-y-6">
      {/* Fee Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="bg-gray-50">
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Fee Type</div>
            <div className="font-semibold">Monthly Fee</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Fee Generated</div>
            <div className="font-semibold">Rs 5,00,000</div>
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
          <div className="font-semibold">Generate Invoice</div>
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="branch1">Branch 1</SelectItem>
            </SelectContent>
          </Select>

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
              <SelectItem value="january">January</SelectItem>
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
                <TableHead className="w-[200px] text-xs">Student Name</TableHead>
                <TableHead className="w-[150px] text-xs">Class & Section</TableHead>
                <TableHead className="w-[150px] text-xs">Fee Type</TableHead>
                <TableHead className="w-[120px] text-xs">Amount</TableHead>
                <TableHead className="w-[120px] text-xs">Due Date</TableHead>
                <TableHead className="w-[120px] text-xs">Status</TableHead>
                <TableHead className="w-[150px] text-xs">Payment ID</TableHead>
                <TableHead className="w-[150px] text-xs">Trans. ID</TableHead>
                <TableHead className="w-[150px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-500px)] overflow-auto">
          <Table>
            <TableBody>
              {studentRows.map((row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="w-[80px] p-4 text-sm">
                    <img 
                      src={row.photo} 
                      alt="Student" 
                      className="w-8 h-8 rounded-full"
                    />
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">
                    <div>{row.studentName}</div>
                    <div className="text-sm text-gray-500">Roll No: {row.rollNo}</div>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      {row.classSection}
                    </span>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{row.feeType}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{row.amount}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{row.dueDate}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{row.paymentId}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{row.transId}</TableCell>
                  <TableCell className="w-[150px] p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600">
                        <LayoutDashboard className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600">
                        <FileEdit className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-red-600">
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

export default FeeManagementList;