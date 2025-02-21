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
import { Camera, FileEdit, LayoutDashboard, Trash2 } from 'lucide-react';

const FeeInvoice = () => {
  const invoiceRows = Array(6).fill({
    photo: "/api/placeholder/32/32",
    studentName: "Ravi Pal",
    rollNo: "23",
    classSection: "XII-B",
    feeType: "Monthly",
    feeMonth: "Feb 2025",
    amount: "Rs 30,000",
    dueDate: "12/12/2024",
    status: "Paid",
    paymentId: "FTPWER8788",
    transId: "KPJKGW5678",
    date: "14/02/2023"
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Summary Cards */}
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
      <div className="flex flex-wrap gap-4 items-center">
        <div className="font-semibold">Generate Invoice</div>
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="main">Main Branch</SelectItem>
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

        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="12">Class XII</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline">Download</Button>
        <Select>
          <SelectTrigger className="w-16">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
          </SelectContent>
        </Select>
        <Button>Generate All</Button>
      </div>

      {/* Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Photo</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Fee Type</TableHead>
              <TableHead>Fee Month</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment ID</TableHead>
              <TableHead>Trans. ID</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoiceRows.map((row, index) => (
              <TableRow key={index} className="border-b hover:bg-gray-50">
                <TableCell>
                  <img 
                    src={row.photo} 
                    alt="Student" 
                    className="w-8 h-8 rounded-full"
                  />
                </TableCell>
                <TableCell>
                  <div className="font-medium">{row.studentName}</div>
                  <div className="text-sm text-gray-500">
                    Class - {row.classSection}
                    <br />
                    Roll No: {row.rollNo}
                  </div>
                  <div className="text-xs text-blue-600 hover:underline cursor-pointer">
                    View Details
                  </div>
                </TableCell>
                <TableCell>{row.feeType}</TableCell>
                <TableCell>{row.feeMonth}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.dueDate}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {row.status}
                    </span>
                    <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                      Details
                    </span>
                  </div>
                </TableCell>
                <TableCell>{row.paymentId}</TableCell>
                <TableCell>{row.transId}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <LayoutDashboard className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <FileEdit className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
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
  );
};

export default FeeInvoice;