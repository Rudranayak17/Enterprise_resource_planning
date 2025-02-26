"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const VisitorsTable = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // Wait until the component is mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Render null until hydration is complete
  if (!mounted) return null;

  const visitors = Array(25)
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
    <div className="p-4  space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="font-medium">Total Visitors:</span>
          <span className="bg-blue-50 px-4 py-2 rounded-md text-sm">
            50
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Input type="date" className="w-40" />

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
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>

          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Visitor
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader className={isDarkTheme ? "bg-gray-900" : "bg-gray-50"}>
              <TableRow className={isDarkTheme ? "text-white border-b-gray-700" : "text-black border-b-gray-200"}>
                <TableHead className="w-[150px] text-xs">Name</TableHead>
                <TableHead className="w-[150px] text-xs">Phone No.</TableHead>
                <TableHead className="w-[150px] text-xs">Aadhar</TableHead>
                <TableHead className="w-[250px] text-xs">Address</TableHead>
                <TableHead className="w-[150px] text-xs">Purpose</TableHead>
                <TableHead className="w-[120px] text-xs">Date</TableHead>
                <TableHead className="w-[120px] text-xs">Entry Time</TableHead>
                <TableHead className="w-[120px] text-xs">Exit Time</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-280px)] overflow-auto">
          <Table>
            <TableBody>
              {visitors.map((visitor, index) => (
                <TableRow 
                  key={index} 
                  className={isDarkTheme ? "hover:bg-gray-800" : "hover:bg-gray-50"}
                >
                  <TableCell className="w-[150px] p-4 text-sm">{visitor.name}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{visitor.phoneNo}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{visitor.aadhar}</TableCell>
                  <TableCell className="w-[250px] p-4 text-sm">{visitor.address}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{visitor.purpose}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{visitor.date}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{visitor.entryTime}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{visitor.exitTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">Showing 1-10 of 25 entries</div>
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

export default VisitorsTable;