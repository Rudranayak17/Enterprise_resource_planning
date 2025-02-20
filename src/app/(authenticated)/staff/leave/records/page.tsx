import React from 'react';
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
import { Button } from "@/components/ui/button";
import { Download, FileText, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

const LeaveRequestSimple = () => {
  const requests = Array(8).fill({
    photo: "/api/placeholder/32/32",
    name: "Ravi Singh",
    roleType: "Teacher/PRT",
    date: "14/08/2024",
    leaveType: "Sick Leave"
  });

  return (
    <div className="w-full bg-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-base font-medium">User Leave Request</span>
     
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search User"
              className="pl-8 w-48"
            />
          </div>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="User Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="staff">Staff</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-24">
              <SelectValue placeholder="June" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="june">June</SelectItem>
              <SelectItem value="july">July</SelectItem>
            </SelectContent>
          </Select>

       
          <Select>
          <SelectTrigger className="w-full md:w-40">
            <SelectValue placeholder="Download" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem  value="pdf">
              <div className="flex items-center">
              <FileText className="w-4 h-4 mr-2" /> 
              <p>PDF</p>
              </div>
             </SelectItem>
            <SelectItem value="excel">
            <div className="flex items-center">
              <Download className="w-4 h-4 mr-2" /> 
              <p>Excel</p>
              </div>
              
              </SelectItem>
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
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-medium">Photo</TableHead>
            <TableHead className="font-medium">Name</TableHead>
            <TableHead className="font-medium">Role/Type</TableHead>
            <TableHead className="font-medium">Date</TableHead>
            <TableHead className="font-medium">Leave Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request, index) => (
            <TableRow key={index} className="border-b">
              <TableCell>
                <img
                  src={request.photo}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
              </TableCell>
              <TableCell>{request.name}</TableCell>
              <TableCell className="text-blue-600">{request.roleType}</TableCell>
              <TableCell>{request.date}</TableCell>
              <TableCell>{request.leaveType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaveRequestSimple;