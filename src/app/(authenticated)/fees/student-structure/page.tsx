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
import { Checkbox } from "@/components/ui/checkbox";
import { Edit } from 'lucide-react';

const StudentFeeTable = () => {
  const studentRows = Array(9).fill({
    photo: "/api/placeholder/32/32",
    studentName: "Ravi Pal",
    rollNo: "23",
    classSection: "XII-B",
    category: "Monthly",
    feeType: "Tuition Fee",
    amount: "Rs 12000",
    discount: "2000",
    payableAmount: "Rs 10000",
    status: "Approved",
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Student Fee (90)</h2>
        </div>
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Session" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-25">2024-25</SelectItem>
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

          <Button variant="outline">Download</Button>
          <Select>
            <SelectTrigger className="w-16">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Photo</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Fee Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Discount</TableHead>
              <TableHead>Payable Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Remarks</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studentRows.map((row, index) => (
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
                    Roll No: {row.rollNo}
                    <br />
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      Class - {row.classSection}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.feeType}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.discount}</TableCell>
                <TableCell>{row.payableAmount}</TableCell>
                <TableCell>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {row.status}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    View Remarks
                  </span>
                </TableCell>
                <TableCell>
                  <Edit />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StudentFeeTable;