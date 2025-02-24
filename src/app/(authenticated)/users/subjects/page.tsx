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
  Download,
  MoreVertical,
  UserCircle2,
  Link2,
  Mail,
  Edit,
  Trash,
} from "lucide-react";

interface User {
  name: string;
  role: string;
  roleType: string;
  email: string;
  phone: string;
  address: string;
}

const UserManagementDashboard = () => {
  const users: User[] = Array(18).fill({
    name: "Ravi Dubey",
    role: "Teacher",
    roleType: "PGT",
    email: "xyz@gmail.com",
    phone: "9852365896",
    address: "Rangpeth, Sector 50, Gurgaon Haryana",
  });

  return (
    <div className="p-4 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="text-lg font-medium p-3 rounded-sm">
            Total Staff: 15
          </div>
     
    
        </div>
        <div className="flex items-center gap-2">
        <div className="relative">
            <Input placeholder="Search User" className="w-64 pl-8" />
            <svg
              className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"
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

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Download" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="excel">Excel</SelectItem>
              <SelectItem value="pdf">PDF</SelectItem>
            
            </SelectContent>
          </Select>
       
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

      {/* Table */}
      <div className="border rounded-md">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader>
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
              {users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="w-[80px] p-4">
                    <UserCircle2 className="h-10 w-10 text-gray-400" />
                  </TableCell>
                  <TableCell className="w-[180px] p-4 font-medium">
                    <div>
                      <div>{user.name}</div>
                      <div className="text-sm text-gray-500">Male</div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[150px] p-4">
                    <div>
                      <div>{user.role}</div>
                      <div className="text-sm text-blue-500">
                        {user.roleType}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[200px] p-4">
                    <div>
                      <div className="text-blue-500">{user.email}</div>
                      <div>{user.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell className="p-4 text-sm">
                    <div>{user.address}</div>
                  </TableCell>
                  <TableCell className="w-[100px] p-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Mail className="h-4 w-4" /> Email
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Link2 className="h-4 w-4" /> Copy Link
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Edit className="h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                          <Trash className="h-4 w-4" /> Delete
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
  );
};

export default UserManagementDashboard;
