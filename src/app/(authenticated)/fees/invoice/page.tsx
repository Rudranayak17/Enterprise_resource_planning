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

const FeeManagement = () => {
  const feeRows = Array(9).fill({
    class: "11th",
    section: "C",
    feeType: "Monthly",
    month: "April 2025",
    totalStudent: 80,
    feeGenerated: 80,
    status: "Generated 5/5",
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
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
      <div className="flex flex-wrap gap-4 items-center">
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

        <div className="flex gap-2">
          <Button variant="outline">Download</Button>
          <Select>
            <SelectTrigger className="w-16">
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

      {/* Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Class</TableHead>
              <TableHead>Section</TableHead>
              <TableHead>Fee Type</TableHead>
              <TableHead>Month</TableHead>
              <TableHead>Total Student</TableHead>
              <TableHead>Fee Generated</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Info</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feeRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.class}</TableCell>
                <TableCell>{row.section}</TableCell>
                <TableCell>{row.feeType}</TableCell>
                <TableCell>{row.month}</TableCell>
                <TableCell>{row.totalStudent}</TableCell>
                <TableCell>{row.feeGenerated}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Button variant="link" className="text-blue-600">
                    View Info
                  </Button>
                </TableCell>
                <TableCell>
                  <Button className='bg-blue-500' size="sm">Generate</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FeeManagement;