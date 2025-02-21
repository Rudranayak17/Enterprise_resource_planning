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
  BreadcrumbPage,
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
    <div className="p-4">
      {/* Breadcrumb */}
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

      {/* Header Section */}
      <div className="flex justify-between mb-6">
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded">
          Total Students: 15
        </div>

        <div className="flex gap-4">
          <Input type="text" placeholder="Search" className="w-48" />

          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10c">10th C</SelectItem>
              <SelectItem value="10b">10th B</SelectItem>
              <SelectItem value="10a">10th A</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="flex items-center gap-2">
            <Download size={16} />
            PDF Download
          </Button>

          <Button variant="outline" className="flex items-center gap-2">
            <Download size={16} />
            Excel Download
          </Button>

          <Select defaultValue="10">
            <SelectTrigger className="w-20">
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

      {/* Table Section */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Admission No.</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Guardian Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-10 h-10 rounded-full"
                />
              </TableCell>
              <TableCell>
                <div>{student.name}</div>
                <div className="text-gray-500 text-sm">{student.gender}</div>
              </TableCell>
              <TableCell>
                <div>{student.admissionNo}</div>
                <div className="text-blue-600 text-sm">{student.dob}</div>
              </TableCell>
              <TableCell>
                <div>{student.class}</div>
                <div className="text-gray-500 text-sm">
                  Roll no. {student.rollNo}
                </div>
              </TableCell>
              <TableCell>
                <div>{student.guardianName}</div>
                <div className="text-blue-600 text-sm">{student.phone}</div>
              </TableCell>
              <TableCell>{student.address}</TableCell>
              <TableCell>
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

      {/* Pagination */}
      <div className="mt-4 flex justify-end">
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
  );
};

export default StudentManagementDashboard;
