import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Download, UserCircle2 } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const LeaveRequestManagement = () => {
  const leaveRequests = Array(10).fill({
    name: 'Ravi Singh',
    class: '11th C/24',
    duration: '14/08/2024 - 18/08/2024',
    leaveType: 'Sick Leave',
    reason: 'For Suffering From Cold.',
    status: 'Pending/Expire'
  });

  return (
    <div className="p-6">
  
      
  
      <div className="flex items-center justify-between mb-6">
      <div className="text-lg font-semibold mb-4">Student Leave Request</div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search User"
              className="pl-8 w-64"
            />
            <svg
              className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11">11th</SelectItem>
              <SelectItem value="12">12th</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="June" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="june">June</SelectItem>
              <SelectItem value="july">July</SelectItem>
              <SelectItem value="august">August</SelectItem>
            </SelectContent>
          </Select>
        </div>

   
        <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Download" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11">Excel </SelectItem>
              <SelectItem value="12">pdf</SelectItem>
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

      {/* Leave Requests Table */}
      <div className="border rounded-md">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px] text-xs">Photo</TableHead>
                <TableHead className="w-[200px] text-xs">Name</TableHead>
                <TableHead className="w-[200px] text-xs">Duration</TableHead>
                <TableHead className="w-[150px] text-xs">Leave Type</TableHead>
                <TableHead className="w-[200px] text-xs">Reason</TableHead>
                <TableHead className="w-[120px] text-xs">Status</TableHead>
                <TableHead className="w-[200px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-280px)] overflow-auto">
          <Table>
            <TableBody>
              {leaveRequests.map((request, index) => (
                <TableRow key={index}>
                  <TableCell className="w-[80px] p-2">
                    <UserCircle2 className="h-55 w-55 text-gray-400" />
                  </TableCell>
                  <TableCell className="w-[200px] p-2 font-medium">
                    <div>{request.name}</div>
                    <div className="text-sm text-gray-500">{request.class}</div>
                  </TableCell>
                  <TableCell className="w-[200px] p-2 text-sm">
                    {request.duration}
                  </TableCell>
                  <TableCell className="w-[150px] p-2 text-sm">
                    {request.leaveType}
                  </TableCell>
                  <TableCell className="w-[200px] p-2 text-sm">
                    {request.reason}
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-sm">
                    <span className="text-yellow-500 font-medium">{request.status}</span>
                  </TableCell>
                  <TableCell className="w-[200px] p-2 text-right">
                    <div className="flex justify-end space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-green-600 border-green-600 hover:bg-green-50"
                      >
                        Approve
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-red-600 border-red-600 hover:bg-red-50"
                      >
                        Reject
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
        <div className="text-sm text-gray-500">Showing 1-10 of 10 entries</div>
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
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default LeaveRequestManagement;