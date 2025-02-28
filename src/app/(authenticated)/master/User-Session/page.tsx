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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, MoreVertical, Plus } from "lucide-react";
import { Switch } from "@/components/ui/switch"; // Add Switch import
import Image from "next/image";
import { useTheme } from "next-themes";
import AddUserModal from "@/components/AddUserModal";
import { useGet_user_sessionQuery } from "@/provider/api/auth";

// Skeleton Loader Component
const SkeletonRow = () => (
  <TableRow>
    <TableCell className="w-[80px] p-4 text-center">
      <div className="w-20 h-20 mx-auto bg-gray-200 animate-pulse rounded-full"></div>
    </TableCell>
    {Array(7)
      .fill(0)
      .map((_, index) => (
        <TableCell key={index} className="p-4">
          <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
        </TableCell>
      ))}
  </TableRow>
);

const StaffTable = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  const { data, isLoading, isError } = useGet_user_sessionQuery({
    page: currentPage,
    pageSize: itemsPerPage,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const jsonData = data || {
    data: [],
    page: 1,
    totalPages: 1,
    total: 0,
    pageSize: 10,
    filters: {},
  };

  const totalItems = jsonData.total;
  const totalPages = jsonData.totalPages;
  const paginatedData = jsonData.data;

  const handleAddUser = (newUser: any) => {
    console.log("New user added:", newUser);
  };

  const handleStatusChange = (staffId: string, currentStatus: boolean) => {
    console.log(`Status changed for staff ${staffId} to ${!currentStatus}`);
    // Add your status update logic here (e.g., API call)
  };

  const handlePageSizeChange = (value: string) => {
    const newItemsPerPage = parseInt(value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!mounted) return null;

  const isDarkTheme = resolvedTheme === "dark";

  return (
    <div className="p-4 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="font-medium">Total Staff:</span>
          <span className="px-4 py-2 rounded-md text-sm">{totalItems}</span>
        </div>
        <div className="flex items-center gap-4">
          <Input type="text" placeholder="Search User" className="w-64" />
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="pgt">PGT</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={handlePageSizeChange}
          >
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      {/* Table Container */}
      <div className="border rounded-md">
        <Table>
          <TableHeader className={isDarkTheme ? "bg-gray-900" : "bg-gray-50"}>
            <TableRow
              className={
                isDarkTheme
                  ? "text-white border-b-gray-700"
                  : "text-black border-b-gray-200"
              }
            >
              <TableHead className="w-[80px] text-xs p-2 text-center">
                Photo
              </TableHead>
              <TableHead className="w-[180px] text-xs p-4 text-center">
                Name
              </TableHead>
              <TableHead className="w-[180px] text-xs p-4 text-center">
                Role/Type
              </TableHead>
              <TableHead className="w-[180px] text-xs p-4 text-center">
                Email/Phone No.
              </TableHead>
              <TableHead className="w-[150px] text-xs p-4 text-center">
                Session
              </TableHead>
              <TableHead className="w-[150px] text-xs p-4 text-center">
                Salary
              </TableHead>
              <TableHead className="w-[250px] text-xs p-4 text-center">
                Address
              </TableHead>
              <TableHead className="w-[120px] text-xs p-4 text-center">
                Status
              </TableHead>
              <TableHead className="w-[120px] text-xs p-4 text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <ScrollArea className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {isLoading ? (
                Array.from({ length: itemsPerPage }).map((_, index) => (
                  <SkeletonRow key={index} />
                ))
              ) : isError ? (
                <TableRow>
                  <TableCell
                    colSpan={9}
                    className="p-4 text-center text-red-600"
                  >
                    Error loading data
                  </TableCell>
                </TableRow>
              ) : paginatedData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="p-4 text-center">
                    No staff found
                  </TableCell>
                </TableRow>
              ) : (
                paginatedData.map((staff: any) => (
                  <TableRow
                    key={staff.id}
                    className={`${
                      isDarkTheme ? "hover:bg-gray-800" : "hover:bg-gray-50"
                    }`}
                  >
                    <TableCell className="w-[80px] p-2 text-sm text-center">
                      <div className="w-15 h-15 overflow-hidden rounded-full border mx-auto">
                        <Image
                          src={"/placeholder-avatar.jpg"}
                          alt={`${staff.id}'s photo`}
                          width={55}
                          height={55}
                          className="rounded-full object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="w-[180px] p-4 text-sm font-medium text-center">
                      {staff.User.name}
                    </TableCell>
                    <TableCell className="w-[180px] p-4 text-sm text-center">
                      <p>{staff.user_type || "N/A"}</p>
                      <p className="text-xs text-blue-600">
                        {staff.role || "N/A"}
                      </p>
                    </TableCell>
                    <TableCell className="w-[180px] p-4 text-sm text-center">
                      <p>{staff.User.email || "N/A"}</p>
                      <p className="text-xs text-blue-600">
                        {staff.User.phone}
                      </p>
                    </TableCell>
                    <TableCell className="w-[150px] p-4 text-sm text-center">
                      {staff.session || "2024-2025"}{" "}
                      {/* Default value if not available */}
                    </TableCell>
                    <TableCell className="w-[150px] p-4 text-sm text-center">
                      {staff.salery
                        ? `Rs ${staff.salery.toLocaleString()}`
                        : "N/A"}
                    </TableCell>
                    <TableCell className="w-[250px] p-4 text-sm text-center">
                      {staff.User.address}
                    </TableCell>
                    <TableCell className="w-[120px] p-4 text-sm text-center">
                      <Switch
                        checked={staff.is_active}
                        onCheckedChange={() =>
                          handleStatusChange(staff.id, staff.is_active)
                        }
                        className={`${
                          staff.is_active ? "bg-green-600" : "bg-gray-200"
                        }`}
                      />
                    </TableCell>
                    <TableCell className="w-[120px] p-4 text-sm text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mx-auto flex"
                          >
                            <MoreVertical className="h-4 w-4 text-gray-500" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => console.log(`View ${staff.id}`)}
                          >
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => console.log(`Delete ${staff.id}`)}
                            className="text-red-600"
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
          entries
        </div>
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === page}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>

      <AddUserModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export default StaffTable;
