import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Check, X } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const NoticeManagement = () => {
  const notices = Array(25).fill({
    date: '14/09/24',
    class: '11th-c',
    subject: 'Chemistry',
    teacher: 'Tarun Shukla',
    student: 'Ravi Pal',
    notice: 'Regarding Fee Due..'
  });

  return (
    <div className="p-6">
      {/* Header Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-blue-50 px-3 py-1 rounded text-sm">
          Total Notices <span className="font-medium">50</span>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search Class"
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
              <SelectValue placeholder="September" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sep">September</SelectItem>
              <SelectItem value="oct">October</SelectItem>
              <SelectItem value="nov">November</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>

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

          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            + Add Notice
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[120px] text-xs">Date</TableHead>
                <TableHead className="w-[120px] text-xs">Class</TableHead>
                <TableHead className="w-[150px] text-xs">Subject</TableHead>
                <TableHead className="w-[200px] text-xs">Teacher</TableHead>
                <TableHead className="w-[150px] text-xs">Student</TableHead>
                <TableHead className="w-[300px] text-xs">Notice</TableHead>
                <TableHead className="w-[150px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {notices.map((notice, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="w-[120px] p-4 text-sm">{notice.date}</TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      {notice.class}
                    </span>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{notice.subject}</TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">{notice.teacher}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      {notice.student}
                    </span>
                  </TableCell>
                  <TableCell className="w-[300px] p-4 text-sm max-w-xs truncate">{notice.notice}</TableCell>
                  <TableCell className="w-[150px] p-4 text-right">
                    <div className="flex items-center justify-end space-x-1">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 text-blue-600"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 text-green-600"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        </svg>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 text-red-600"
                      >
                        <X className="h-4 w-4" />
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

export default NoticeManagement;