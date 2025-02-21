import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Search,
  Download,
  MoreHorizontal,
  Plus,
  Grid,
  PenSquare,
  Trash2,
} from "lucide-react";

interface Company {
  photo: string;
  name: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
  address: string;
}

const CompanyDashboard = () => {
  const companies: Company[] = Array(12).fill({
    photo: "/api/placeholder/40/40",
    name: "XYZ Pvt Ltd.",
    contactPerson: "Sudhir Sharma",
    contactNumber: "879852538",
    email: "xyz@gmail.com",
    address: "Ramgaarh, Sector 50, Gurgaon, Haryana",
  });

  return (
    <div className="p-4 space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Total Company (12)</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input placeholder="Search Company" className="pl-8 w-64" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            PDF Download
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Excel Download
          </Button>
          <Select defaultValue="10">
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Company
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-md">
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Photo</TableHead>
                <TableHead className="w-[200px]">Name</TableHead>
                <TableHead className="w-[200px]">Contact Person</TableHead>
                <TableHead className="w-[200px]">Email/Phone No.</TableHead>
                <TableHead>Address</TableHead>
                <TableHead className="w-[120px]">View Details</TableHead>
                <TableHead className="w-[120px] text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {companies.map((company, index) => (
                <TableRow key={index}>
                  <TableCell className="w-[80px]">
                    <img
                      src={company.photo}
                      alt={company.name}
                      className="w-10 h-10 rounded-full bg-gray-200"
                    />
                  </TableCell>
                  <TableCell className="w-[200px] font-medium">
                    {company.name}
                  </TableCell>
                  <TableCell className="w-[200px]">
                    <div>{company.contactPerson}</div>
                    <div className="text-sm text-gray-500">
                      {company.contactNumber}
                    </div>
                  </TableCell>
                  <TableCell className="w-[200px]">
                    <div className="text-blue-600">{company.email}</div>
                    <div>{company.contactNumber}</div>
                  </TableCell>
                  <TableCell>{company.address}</TableCell>
                  <TableCell className="w-[120px]">
                    <Button variant="link" className="text-blue-600 p-0">
                      View Details
                    </Button>
                  </TableCell>
                  <TableCell className="text-right w-[100px]">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Grid className="h-4 w-4 mr-2" />
                          Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <PenSquare className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
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
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">Showing 1-10 of 12 entries</div>
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
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default CompanyDashboard;
