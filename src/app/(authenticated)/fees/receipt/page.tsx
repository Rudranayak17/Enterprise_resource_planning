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
import { Download } from 'lucide-react';

const FeeReceipt = () => {
  const receiptRows = Array(8).fill({
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
    date: "14/02/2023"
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-center">
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

        <Button variant="outline">Download</Button>
        <Select>
          <SelectTrigger className="w-16">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
          </SelectContent>
        </Select>
        <Button>Generate</Button>
      </div>

      {/* Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
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
            {receiptRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img 
                    src={row.photo} 
                    alt="Student" 
                    className="w-8 h-8 rounded-full"
                  />
                </TableCell>
                <TableCell>
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
                <TableCell>{row.feeType}</TableCell>
                <TableCell>{row.feeMonth}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.dueDate}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {row.status}
                    </span>
                    <span className="text-gray-500 text-sm cursor-pointer hover:text-gray-700">
                      Details
                    </span>
                  </div>
                </TableCell>
                <TableCell>{row.paymentId}</TableCell>
                <TableCell>{row.transId}</TableCell>
                <TableCell>
                  <Button size="sm" variant="default" className="bg-blue-600 text-white hover:bg-blue-700">
                    <Download/>
                    Fee Receipt
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FeeReceipt;