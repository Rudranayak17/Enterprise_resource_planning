import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, MoreVertical, UserCircle2, Link2, Mail, Edit, Trash } from "lucide-react";

interface User {
  name: string;
  role: string;
  roleType: string;
  email: string;
  phone: string;
  address: string;
}

const UserManagementDashboard = () => {
  const users: User[] = Array(8).fill({
    name: 'Ravi Dubey',
    role: 'Teacher',
    roleType: 'PGT',
    email: 'xyz@gmail.com',
    phone: '9852365896',
    address: 'Rangpeth, Sector 50, Gurgaon Haryana'
  });

  return (
    <div className="p-4 bg-white rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium">
            Total Staff: <span className="bg-blue-100 px-2 py-1 rounded">15</span>
          </div>
          <div className="relative">
            <Input
              placeholder="Search User"
              className="w-64 pl-8"
            />
            <svg
              className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"
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
              <SelectValue placeholder="Select Rule" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Rules</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="staff">Staff</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download size={16} />
            Download
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download size={16} />
            Download
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

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role/Type</TableHead>
            <TableHead>Email/Phone No.</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>
                <UserCircle2 className="h-10 w-10 text-gray-400" />
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-gray-500">Male</div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div>{user.role}</div>
                  <div className="text-sm text-blue-500">{user.roleType}</div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className="text-blue-500">{user.email}</div>
                  <div>{user.phone}</div>
                </div>
              </TableCell>
              <TableCell>
                <div>{user.address}</div>
              </TableCell>
              <TableCell>
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
  );
};

export default UserManagementDashboard;