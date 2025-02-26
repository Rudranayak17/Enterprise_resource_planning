"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Plus } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Parent } from "@/types/utils";
import { Input } from "./ui/input";

export default function ParentTable({
  users,
  isDarkTheme,
}: {
  users: Parent;
  isDarkTheme: boolean;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [toggleStates, setToggleStates] = useState<boolean[]>(
    Array(25).fill(false)
  );

  // Toggle handler
  const handleToggle = (index: number) => {
    setToggleStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  const parentData = Array(25)
    .fill(users)
    .map((user, index) => ({
      ...user,
      id: index + 1,
    }));

  // Pagination logic
  const totalItems = parentData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = parentData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mx-4 p-3 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Total Parents: {totalItems}</h1>
        <div className="flex gap-2">
          <Input type="text" placeholder="Search Parents" className="w-64" />

          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Download" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-25">Excel</SelectItem>
              <SelectItem value="2023-24">Pdf</SelectItem>
            </SelectContent>
          </Select>

          <select
            className="border rounded p-1"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(parseInt(e.target.value, 10));
              setCurrentPage(1);
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <Button className="bg-blue-500 hover:bg-blue-800">
            <Plus/>
            Add Parent
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader
            className={`${
              isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-50 text-black"
            }`}
          >
            <TableRow>
              <TableHead className="w-[200px] text-xs">
                Guardian Details
              </TableHead>
              <TableHead className="w-[200px] text-xs">
                Email / Phone No.
              </TableHead>
              <TableHead className="w-[200px] text-xs">Children</TableHead>
              <TableHead className="text-xs">Address</TableHead>
              <TableHead className="w-[120px] text-xs">Status</TableHead>
              <TableHead className="w-[120px] text-xs text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="max-h-[calc(100vh-280px)] overflow-auto">
          <Table>
            <TableBody>
              {paginatedData.map((user, index) => (
                <TableRow key={user.id} className="hover:bg-gray-50">
                  <TableCell className="w-[200px] p-2 text-sm font-medium">
                    <p>{user.guardian.fatherName}</p>
                    <p>{user.guardian.motherName}</p>
                  </TableCell>
                  <TableCell className="w-[200px] p-2">
                    <p className="text-sm text-blue-700">{user.email}</p>
                    <p className="text-xs text-blue-700">{user.phone}</p>
                  </TableCell>
                  <TableCell className="w-[200px] p-2">
                    {user.children.map((item: string, idx: number) => (
                      <p key={idx}>
                        {item} <span className="text-blue-700">9th class</span>
                      </p>
                    ))}
                  </TableCell>
                  <TableCell className="p-2 text-sm">{user.address}</TableCell>
                  <TableCell className="w-[120px] p-2 text-sm">
                    <Switch
                      checked={toggleStates[index]}
                      onCheckedChange={() => handleToggle(index)}
                      className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
                    />
                  </TableCell>
                  <TableCell className="w-[120px] p-2 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4 text-gray-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => console.log(`View ${user.id}`)}
                        >
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log(`Delete ${user.id}`)}
                          className="text-red-600"
                        >
                          Delete
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

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between sticky bottom-0 bg-white py-2 border-t">
        <div className="text-sm text-gray-500">
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
          entries
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  onClick={() => setCurrentPage(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
