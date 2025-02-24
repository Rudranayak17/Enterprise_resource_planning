import React from "react";
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
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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
import {
  Info,
  Download,
  Grid,
  PenSquare,
  Trash2,
  MoreHorizontal,
  Slash,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Student {
  photo: string;
  name: string;
  gender: string;
  admissionNo: string;
  dob: string;
  class: string;
  rollNo: string;
  guardianName: string;
  phone: string;
  address: string;
}

const StudentManagementDashboard = () => {
  const students: Student[] = Array(18).fill({
    photo: "/api/placeholder/40/40",
    name: "Ravi Dubey",
    gender: "Male",
    admissionNo: "20EE093",
    dob: "05/02/2008",
    class: "10th C",
    rollNo: "89",
    guardianName: "Ruhi Dubey/Manish Dubey",
    phone: "9852365896",
    address: "Ramgaarh, Sector 50, Gurgaon, Haryana",
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Previous breadcrumb and header sections remain the same */}
      <div className="p-4">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/students">students</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/students/all">all</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="bg-blue-50 px-4 py-2 rounded">Total Students: 15</div>

          <div className="flex flex-wrap gap-4">
            <Input
              type="text"
              placeholder="Search"
              className="w-full md:w-48"
            />

            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10c">10th C</SelectItem>
                <SelectItem value="10b">10th B</SelectItem>
                <SelectItem value="10a">10th A</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                className="flex items-center gap-2 flex-1 md:flex-none"
              >
                <Download size={16} />
                <span className="hidden md:inline">PDF Download</span>
                <span className="md:hidden">PDF</span>
              </Button>

              <Button
                variant="outline"
                className="flex items-center gap-2 flex-1 md:flex-none"
              >
                <Download size={16} />
                <span className="hidden md:inline">Excel Download</span>
                <span className="md:hidden">Excel</span>
              </Button>
            </div>

            <Select defaultValue="10">
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

  
      <div className="border rounded-md mx-4">
        <div className="w-full">
          <Table className="min-w-[1200px]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[5%] min-w-[60px]">Photo</TableHead>
                <TableHead className="w-[15%] min-w-[180px]">Name</TableHead>
                <TableHead className="w-[15%] min-w-[180px]">
                  Admission No.
                </TableHead>
                <TableHead className="w-[15%] min-w-[180px]">Class</TableHead>
                <TableHead className="w-[20%] min-w-[200px]">
                  Guardian Name
                </TableHead>
                <TableHead className="w-[25%] min-w-[250px]">Address</TableHead>
                <TableHead className="w-[5%] min-w-[100px] text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell className="w-[5%] min-w-[60px]">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </TableCell>
                  <TableCell className="w-[15%] min-w-[180px]">
                    <div className="font-medium">{student.name}</div>
                    <div className="text-gray-500 text-sm">
                      {student.gender}
                    </div>
                  </TableCell>
                  <TableCell className="w-[15%] min-w-[180px]">
                    <div>{student.admissionNo}</div>
                    <div className="text-blue-600 text-sm">{student.dob}</div>
                  </TableCell>
                  <TableCell className="w-[15%] min-w-[180px]">
                    <div>{student.class}</div>
                    <div className="text-gray-500 text-sm">
                      Roll no. {student.rollNo}
                    </div>
                  </TableCell>
                  <TableCell className="w-[20%] min-w-[200px]">
                    <div className="truncate">{student.guardianName}</div>
                    <div className="text-blue-600 text-sm">{student.phone}</div>
                  </TableCell>
                  <TableCell className="w-[25%] min-w-[250px]">
                    <div className="truncate">{student.address}</div>
                  </TableCell>
                  <TableCell className="w-[5%] min-w-[100px] text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Info className="h-4 w-4 mr-2" /> View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Grid className="h-4 w-4 mr-2" /> Attendance
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Grid className="h-4 w-4 mr-2" /> Results
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Grid className="h-4 w-4 mr-2" /> Schedule
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <PenSquare className="h-4 w-4 mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" /> Delete
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

      {/* Pagination section remains the same */}
      <div className="sticky bottom-0 bg-white border-t p-4 mt-auto">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing 1-10 of 100 entries
          </div>
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

export default StudentManagementDashboard;
