import React from 'react';
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
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Trash2, Search, Download, Plus } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


import { userData } from '@/constant/userData';

const Page = () => {

  const students = Array(25)
    .fill(userData) 
    .map((user, index) => ({
      ...user,
      id: index + 1, 
    }));

  return (
    <div className="p-4  space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        {/* <div className="flex items-center gap-2">
          <span className="font-medium">Total Students:</span>
          <span className="bg-blue-50 px-4 py-2 rounded-md text-sm">
            {students.length}
          </span>
        </div> */}
        <div></div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-8 w-64"
            />
          </div>
          
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
            Add Student
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        {/* Fixed Header Section */}
        <div className="w-full">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[80px] text-xs">Photo</TableHead>
                <TableHead className="w-[180px] text-xs">Name</TableHead>
                <TableHead className="w-[180px] text-xs">Admission No</TableHead>
                <TableHead className="w-[180px] text-xs">Father Name</TableHead>
                <TableHead className="w-[180px] text-xs">Mother Name</TableHead>
                <TableHead className="w-[180px] text-xs">Address</TableHead>
                <TableHead className="w-[120px] text-xs">Status</TableHead>
                <TableHead className="w-[120px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body Section */}
        <div className="max-h-[calc(100vh-280px)] overflow-auto">
          <Table>
            <TableBody>
              {students.map((user, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="w-[80px] p-2 text-sm">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.photo} alt={user.name} />
                    </Avatar>
                  </TableCell>
                  <TableCell className="w-[180px] p-2 text-sm font-medium">
                    {user.name}
                  </TableCell>
                  <TableCell className="w-[180px] p-2 text-sm">
                    <p>{user.admission.id}</p>
                    <p className="text-xs text-blue-600">{user.admission.date}</p>
                  </TableCell>
                  <TableCell className="w-[180px] p-2 text-sm">
                    <p>{user.guardian.name}</p>
                    <p className="text-xs text-blue-600">{user.guardian.phone}</p>
                  </TableCell>
                  <TableCell className="w-[180px] p-2 text-sm">
                    <p>{user.guardian.name}</p> {/* Assuming same guardian for simplicity; adjust if mother data exists */}
                    <p className="text-xs text-blue-600">{user.guardian.phone}</p>
                  </TableCell>
                  <TableCell className="w-[180px] p-2 text-sm">{user.address}</TableCell>
                  <TableCell className="w-[120px] p-2 text-sm">{user?.status}</TableCell>
                  <TableCell className="w-[120px] p-2 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                        <Trash2 className="h-4 w-4" />
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

export default Page;