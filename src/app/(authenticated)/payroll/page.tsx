import React from 'react';
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
import { Download, FileText, MoreHorizontal, Pencil, Plus } from 'lucide-react';

const PayrollInterface = () => {
  const payrollData = Array(7).fill({
    name: "Ravi Dubey",
    role: "Teacher (PGT)",
    month: "February 2023",
    attendance: {
      present: "P-23",
      holiday: "H-23",
      leaves: "L-23"
    },
    salary: "Rs 12,000",
    adjustments: "Rs 1,200",
    netPayable: "Rs 10,000",
    status: "Approved",
    generated: "Generated"
  });

  return (
    <div className="p-4 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Payroll</h1>
        <div className="flex items-center gap-4">
          {/* Search */}
          <Input 
            type="search" 
            placeholder="Search User" 
            className="w-64"
          />
          
          {/* Month Select */}
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="january">January</SelectItem>
              <SelectItem value="february">February</SelectItem>
            </SelectContent>
          </Select>
          
          {/* Status Select */}
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          
          {/* Download Button */}
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
          
          {/* Records per page */}
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
          
          {/* Generate Salary Button */}
          <Button className="gap-2">
            <Plus size={16} />
            Generate Salary
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Salary Month</TableHead>
            <TableHead>Attendance</TableHead>
            <TableHead>Generated Salary</TableHead>
            <TableHead>Adjustments</TableHead>
            <TableHead>Net Payable</TableHead>
            <TableHead>Approval</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payrollData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="w-8 h-8 rounded-full bg-gray-200" />
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{row.name}</div>
                  <div className="text-sm text-gray-500">{row.role}</div>
                </div>
              </TableCell>
              <TableCell>{row.month}</TableCell>
              <TableCell>
                <div>
                  <div className="text-blue-600">{row.attendance.present}</div>
                  <div>{row.attendance.holiday} {row.attendance.leaves}</div>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    View Details
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {row.salary}
                  <br />
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    View Details
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {row.adjustments}
                  <br />
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    View Details
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {row.netPayable}
                  <br />
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    View Details
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-green-600">{row.status}</span>
              </TableCell>
              <TableCell>
                <span className="text-blue-600">{row.generated}</span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    Pay
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil size={16} />
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

export default PayrollInterface;