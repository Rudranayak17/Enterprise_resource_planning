import React from 'react';
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
import { Download, Plus, Check, Edit } from "lucide-react";

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
    status: "Approved"
  });

  return (
    <div className="space-y-4">
      {/* Controls Header */}
      <div className="flex items-center justify-between">
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md">
          Total Authorizer: 50
        </div>
        
        <div className="flex items-center gap-3">
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

          <Select>
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

      {/* Table */}
      <div className="border rounded-lg">
        <div className="min-h-[600px] flex flex-col">
          <Table>
            <TableHeader className="bg-white sticky top-0">
              <TableRow>
                <TableHead>Photo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Parent Details</TableHead>
                <TableHead>Person Details</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
          
          <div className="flex-1 overflow-auto">
            <Table>
              <TableBody>
                {authorizationData.map((auth, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img
                        src={auth.photo}
                        alt={auth.studentName}
                        className="w-10 h-10 rounded-full"
                      />
                    </TableCell>
                    <TableCell>
                      <div>{auth.studentName}</div>
                      <div className="text-sm text-gray-500">{auth.studentClass}</div>
                    </TableCell>
                    <TableCell>
                      <div>{auth.parentName}</div>
                      <div className="text-sm text-gray-500">{auth.parentPhone}</div>
                    </TableCell>
                    <TableCell>
                      <div>{auth.personType}</div>
                      <div>{auth.parentName}</div>
                      <div className="text-sm text-gray-500">{auth.parentPhone}</div>
                    </TableCell>
                    <TableCell>{auth.address}</TableCell>
                    <TableCell className="whitespace-pre-line">{auth.dateTime}</TableCell>
                    <TableCell>
                      <span className="text-green-600 font-medium">{auth.status}</span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPickupTable;