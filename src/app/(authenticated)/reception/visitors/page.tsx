"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Plus } from "lucide-react";
import { useTheme } from "next-themes";

const VisitorsTable = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // Wait until the component is mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Render null or a placeholder until hydration is complete
  if (!mounted) return null;

  const visitors = Array(10)
    .fill(null)
    .map(() => ({
      name: "Rahul Dhavad",
      phoneNo: "7891654320",
      aadhar: "852919481",
      address: "Bhimgarh, Sector 58 Noida",
      purpose: "For Admission",
      date: "14/02/23",
      entryTime: "10:00 AM",
      exitTime: "02:00 PM",
    }));

  const isDarkTheme = resolvedTheme === "dark";

  return (
    <div className="p-4 w-full">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-medium">Total Visitors:</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
            50
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Input type="date" className="w-40" />

          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>

          <Select defaultValue="10">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </Select>

          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Visitor
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <Table>
        <TableHeader
          className={
            isDarkTheme ? "[&_tr]:border-b bg-gray-900 text-white" : "[&_tr]:border-b bg-gray-100 text-black"
          }
        >
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone No.</TableHead>
            <TableHead>Aadhar</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Purpose</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Entry Time</TableHead>
            <TableHead>Exit Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visitors.map((visitor, index) => (
            <TableRow key={index}>
              <TableCell>{visitor.name}</TableCell>
              <TableCell>{visitor.phoneNo}</TableCell>
              <TableCell>{visitor.aadhar}</TableCell>
              <TableCell>{visitor.address}</TableCell>
              <TableCell>{visitor.purpose}</TableCell>
              <TableCell>{visitor.date}</TableCell>
              <TableCell>{visitor.entryTime}</TableCell>
              <TableCell>{visitor.exitTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default VisitorsTable;
