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

const LeaveRequest = () => {
  const requests = Array(9).fill({
    photo: "/api/placeholder/32/32",
    name: "Ravi Singh",
    role: "Teacher/PRT",
    duration: "14/08/2024 - 18/08/2024",
    leaveType: "Full Day",
    reason: "For Suffering From Cold..",
    status: "Pending/Expire"
  });

  return (
    <div className="w-full  p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-medium">User Leave Request</h2>
      
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

          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
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
          <TableRow className="bg-gray-50">
            <TableHead>Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Leave Type</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
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
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-blue-600 font-medium">
                    {request.name}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {request.role}
                  </span>
                </div>
              </TableCell>
              <TableCell>{request.duration}</TableCell>
              <TableCell>{request.leaveType}</TableCell>
              <TableCell className="max-w-xs truncate">
                {request.reason}
              </TableCell>
              <TableCell>
                <span className="text-orange-500">{request.status}</span>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button 
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white text-xs"
                  >
                    Approve
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-red-100 hover:bg-red-200 text-red-600 text-xs"
                  >
                    Reject
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaveRequest;