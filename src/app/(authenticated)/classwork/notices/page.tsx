import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Check, X } from "lucide-react";

const NoticeManagement = () => {
  const notices = Array(9).fill({
    date: '14/09/24',
    class: '11th-c',
    subject: 'Chemistry',
    teacher: 'Tarun Shukla',
    student: 'Ravi Pal',
    notice: 'Regarding Fee Due..'
  });

  return (
    <div className="p-6 bg-white">
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

      {/* Notices Table */}
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead>Date</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Teacher</TableHead>
            <TableHead>Student</TableHead>
            <TableHead>Notice</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notices.map((notice, index) => (
            <TableRow key={index}>
              <TableCell>{notice.date}</TableCell>
              <TableCell>
                <span className="text-blue-600 hover:underline cursor-pointer">
                  {notice.class}
                </span>
              </TableCell>
              <TableCell>{notice.subject}</TableCell>
              <TableCell>{notice.teacher}</TableCell>
              <TableCell>
                <span className="text-blue-600 hover:underline cursor-pointer">
                  {notice.student}
                </span>
              </TableCell>
              <TableCell>{notice.notice}</TableCell>
              <TableCell>
                <div className="flex space-x-1">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 w-8 p-0 text-blue-600"
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 w-8 p-0 text-green-600"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 w-8 p-0 text-red-600"
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
  );
};

export default NoticeManagement;