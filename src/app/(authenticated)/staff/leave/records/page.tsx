import React from "react";
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
import { Button } from "@/components/ui/button";
import { Download, FileText, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";

const LeaveRequestSimple = () => {
  const requests = Array(28).fill({
    photo: "/api/placeholder/32/32",
    name: "Ravi Singh",
    roleType: "Teacher/PRT",
    date: "14/08/2024",
    leaveType: "Sick Leave",
  });

  return (
    <div className="w-full bg-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-base font-medium">User Leave Request</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search User"
              className="pl-8 w-48"
            />
          </div>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="User Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="staff">Staff</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-24">
              <SelectValue placeholder="June" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="june">June</SelectItem>
              <SelectItem value="july">July</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Download" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pdf">
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  <p>PDF</p>
                </div>
              </SelectItem>
              <SelectItem value="excel">
                <div className="flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  <p>Excel</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>

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
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-md">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-[80px] text-xs font-medium">
                  Photo
                </TableHead>
                <TableHead className="w-[200px] text-xs font-medium">
                  Name
                </TableHead>
                <TableHead className="w-[150px] text-xs font-medium">
                  Role/Type
                </TableHead>
                <TableHead className="w-[150px] text-xs font-medium">
                  Date
                </TableHead>
                <TableHead className="w-[150px] text-xs font-medium">
                  Leave Type
                </TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {requests.map((request, index) => (
                <TableRow key={index} className="border-b">
                  <TableCell className="w-[80px] p-4">
                    <Image
                      src={request.photo}
                      alt="User"
                      width={55}
                      height={55}
                      className="rounded-full bg-gray-200"
                    />
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm font-medium">
                    {request.name}
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm text-blue-600">
                    {request.roleType}
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    {request.date}
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    {request.leaveType}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">Showing 1-10 of 28 entries</div>
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

export default LeaveRequestSimple;
