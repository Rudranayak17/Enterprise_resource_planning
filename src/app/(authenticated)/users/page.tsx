"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, MoreVertical, UserCircle2 } from "lucide-react";
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

const StaffDashboard = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkTheme = resolvedTheme === "dark";
  const staffList = Array(18).fill({
    name: "Ravi Dubey",
    gender: "Male",
    role: "Teacher",
    type: "PGT",
    email: "xyz@gmail.com",
    phone: "9852365896",
    address: "Rangpeth, Sector 50, Gurgaon Haryana",
  });

  return (
    <div className="flex flex-col h-screen">
      {/* Header Controls */}
      <div className="p-6 flex-none">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className=" px-3 py-1 rounded text-lg">
              Total Staff <span className="font-medium">15</span>
            </div>

       

       
          </div>

          <div className="flex items-center space-x-2">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select Rule" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Rules</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="h-4 w-4 text-red-500" />
              <span>Download</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="h-4 w-4 text-green-600" />
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
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex-grow overflow-hidden px-6">
        <div className="border rounded-md h-full">
          {/* Fixed Header */}
          <div className="w-full">
            <Table>
              <TableHeader
                className={`${
                  isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
                }`}
              >
                <TableRow>
                  <TableHead className="w-[80px] text-xs">Photo</TableHead>
                  <TableHead className="w-[180px] text-xs">Name</TableHead>
                  <TableHead className="w-[150px] text-xs">Role/Type</TableHead>
                  <TableHead className="w-[200px] text-xs">
                    Email/Phone No.
                  </TableHead>
                  <TableHead className="text-xs">Address</TableHead>
                  <TableHead className="w-[100px] text-xs text-right">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
            </Table>
          </div>

          {/* Scrollable Body */}
          <div className="max-h-[calc(100vh-300px)] overflow-auto">
            <Table>
              <TableBody>
                {staffList.map((staff, index) => (
                  <TableRow key={index}>
                    <TableCell className="w-[80px] p-4">
                      <UserCircle2 className="h-10 w-10 text-gray-400" />
                    </TableCell>
                    <TableCell className="w-[180px] p-4 font-medium">
                      <div>{staff.name}</div>
                      <div className="text-sm text-gray-500">{staff.gender}</div>
                    </TableCell>
                    <TableCell className="w-[150px] p-4">
                      <div>{staff.role}</div>
                      <div className="text-sm text-blue-600">{staff.type}</div>
                    </TableCell>
                    <TableCell className="w-[200px] p-4">
                      <div className="text-blue-600">{staff.email}</div>
                      <div>{staff.phone}</div>
                    </TableCell>
                    <TableCell className="p-4 text-sm">{staff.address}</TableCell>
                    <TableCell className="w-[100px] p-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <span className="flex items-center">
                              <svg
                                className="h-4 w-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                              </svg>
                              Email
                            </span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="flex items-center">
                              <svg
                                className="h-4 w-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                              </svg>
                              Copy Link
                            </span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="flex items-center">
                              <svg
                                className="h-4 w-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                              </svg>
                              Edit
                            </span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <span className="flex items-center">
                              <svg
                                className="h-4 w-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                              </svg>
                              Delete
                            </span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="p-4 flex-none">
        <div className="flex justify-end">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
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
    </div>
  );
};

export default StaffDashboard;