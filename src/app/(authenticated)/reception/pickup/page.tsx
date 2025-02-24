import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download, Plus, Edit } from "lucide-react";
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

interface PickupAuthorization {
  photo: string;
  studentName: string;
  studentClass: string;
  parentName: string;
  parentPhone: string;
  personType: string;
  address: string;
  dateTime: string;
  status: string;
}

const StudentPickupTable = () => {
  // Generate sample data
  const authorizationData: PickupAuthorization[] = Array(25).fill({
    photo: "/api/placeholder/40/40",
    studentName: "Rahul David",
    studentClass: "Class - 10th C",
    parentName: "Mohit David",
    parentPhone: "8992549852",
    personType: "Parent",
    address: "Bishanpura, Sector 58, Noida",
    dateTime: "15/02/2025\n11:00 AM",
    status: "Approved",
  });

  return (
    <div className="p-4  space-y-6">
      {/* Controls Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-blue-50 px-4 py-2 rounded-md">
          <span className="text-sm">Total Authorizer: 50</span>
        </div>

        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="14/02/25" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="14">14/02/25</SelectItem>
              <SelectItem value="15">15/02/25</SelectItem>
            </SelectContent>
          </Select>

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
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>

          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Student Pickup
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
                <TableHead className="w-[80px] text-xs">Photo</TableHead>
                <TableHead className="w-[200px] text-xs">Name</TableHead>
                <TableHead className="w-[200px] text-xs">
                  Parent Details
                </TableHead>
                <TableHead className="w-[200px] text-xs">
                  Person Details
                </TableHead>
                <TableHead className="w-[250px] text-xs">Address</TableHead>
                <TableHead className="w-[150px] text-xs">Date & Time</TableHead>
                <TableHead className="w-[120px] text-xs">Status</TableHead>
                <TableHead className="w-[120px] text-xs text-right">
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
              {authorizationData.map((auth, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="w-[80px] p-4 text-sm">
                    <Image
                      src={auth.photo}
                      alt={auth.studentName}
                      width={55}
                      height={55}
                      className="rounded-full bg-gray-200"
                    />
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">
                    <div>{auth.studentName}</div>
                    <div className="text-sm text-gray-500">
                      {auth.studentClass}
                    </div>
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">
                    <div>{auth.parentName}</div>
                    <div className="text-sm text-gray-500">
                      {auth.parentPhone}
                    </div>
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">
                    <div>{auth.personType}</div>
                    <div>{auth.parentName}</div>
                    <div className="text-sm text-gray-500">
                      {auth.parentPhone}
                    </div>
                  </TableCell>
                  <TableCell className="w-[250px] p-4 text-sm">
                    {auth.address}
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm whitespace-pre-line">
                    {auth.dateTime}
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">
                    <span className="text-green-600 font-medium">
                      {auth.status}
                    </span>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-blue-600"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
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

export default StudentPickupTable;
