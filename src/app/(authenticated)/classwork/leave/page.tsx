import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, UserCircle2 } from "lucide-react";

const LeaveRequestManagement = () => {
  const leaveRequests = Array(10).fill({
    name: 'Ravi Singh',
    class: '11th C/24',
    duration: '14/08/2024 - 18/08/2024',
    leaveType: 'Sick Leave',
    reason: 'For Suffering From Cold.',
    status: 'Pending/Expire'
  });

  return (
    <div className="p-6 bg-white">
      <div className="text-lg font-semibold mb-4">Student Leave Request</div>
      
      {/* Header Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search User"
              className="pl-8 w-64"
            />
            <svg
              className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
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
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11">11th</SelectItem>
              <SelectItem value="12">12th</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="June" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="june">June</SelectItem>
              <SelectItem value="july">July</SelectItem>
              <SelectItem value="august">August</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4 text-red-500" />
            <span>Download</span>
          </Button>
          
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4 text-green-600" />
            <span>Download</span>
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

      {/* Leave Requests Table */}
      <Table>
        <TableHeader>
          <TableRow>
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
          {leaveRequests.map((request, index) => (
            <TableRow key={index}>
              <TableCell>
                <UserCircle2 className="h-10 w-10 text-gray-400" />
              </TableCell>
              <TableCell>
                <div>{request.name}</div>
                <div className="text-sm text-gray-500">{request.class}</div>
              </TableCell>
              <TableCell>{request.duration}</TableCell>
              <TableCell>{request.leaveType}</TableCell>
              <TableCell>{request.reason}</TableCell>
              <TableCell>
                <span className="text-yellow-500 font-medium">{request.status}</span>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-green-600 border-green-600 hover:bg-green-50"
                  >
                    Approve
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-red-600 border-red-600 hover:bg-red-50"
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

export default LeaveRequestManagement;