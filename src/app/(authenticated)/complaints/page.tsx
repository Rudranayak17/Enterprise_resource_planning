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
import { Download } from 'lucide-react';

const ComplaintInterface = () => {
  const complaints = Array(9).fill({
    photo: "/api/placeholder/32/32",
    studentName: "Ravi Pal",
    rollNo: "Roll No - 211",
    class: "Class - 9th B",
    date: "15/10/2024",
    parent: "Amit Verma",
    complainFor: "School",
    issue: "For Long time of School assembly on Summer Days...",
    status: "Pending",
    attachments: "View Attachments"
  });

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md">
            Complain: 20
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="September" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="september">September</SelectItem>
              <SelectItem value="october">October</SelectItem>
            </SelectContent>
          </Select>

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
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Photo</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Parent</TableHead>
              <TableHead>Complain for</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Attachements</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {complaints.map((complaint, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img
                    src={complaint.photo}
                    alt="Student"
                    className="w-8 h-8 rounded-full"
                  />
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium text-blue-600">
                      {complaint.studentName}
                    </div>
                    <div className="text-xs text-gray-500">
                      {complaint.rollNo}
                    </div>
                    <div className="text-xs text-blue-600">
                      {complaint.class}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{complaint.date}</TableCell>
                <TableCell>{complaint.parent}</TableCell>
                <TableCell>{complaint.complainFor}</TableCell>
                <TableCell className="max-w-xs truncate">
                  {complaint.issue}
                </TableCell>
                <TableCell>
                  <span className="text-red-500">{complaint.status}</span>
                </TableCell>
                <TableCell>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    {complaint.attachments}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    Resolved
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ComplaintInterface;