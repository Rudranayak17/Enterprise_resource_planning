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

const ClassFeeTable = () => {
  const feeRows = Array(9).fill({
    class: "9th",
    section: "C",
    session: "2024-25",
    category: "Monthly",
    feeType: "Tuition Fee",
    amount: "Rs 12000"
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Class Fee (90)</h2>
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
              <SelectItem value="9">Class 9</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline">Download</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">+ Add Class Fee</Button>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Class</TableHead>
              <TableHead>Section</TableHead>
              <TableHead>Session</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Fee Type</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feeRows.map((row, index) => (
              <TableRow key={index} className="border-b hover:bg-gray-50">
                <TableCell>{row.class}</TableCell>
                <TableCell>{row.section}</TableCell>
                <TableCell>{row.session}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.feeType}</TableCell>
                <TableCell>{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ClassFeeTable;