import React from "react";
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
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Download, MoreHorizontal, FileText, Eye, Trash2 } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Transaction {
  date: string;
  paymentType: string;
  mode: string;
  method: string;
  paymentId: string;
  transactionId: string;
  status: string;
  debitAmount: string;
  creditAmount: string;
}

const TransactionDashboard = () => {
  const transactions: Transaction[] = Array(10).fill({
    date: "14/02/2025",
    paymentType: "Work Order",
    mode: "Offline",
    method: "Cash",
    paymentId: "#34568909",
    transactionId: "#6789046",
    status: "Paid",
    debitAmount: "Rs 0",
    creditAmount: "Rs 10,000",
  });

  return (
    <div className="p-6 space-y-6">
      {/* Company Details Section */}
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Name</h3>
                <Select defaultValue="xyz">
                  <SelectTrigger className="w-[240px]">
                    <SelectValue placeholder="Select Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="xyz">XYZ Pvt Ltd.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h4 className="text-sm text-gray-500">Address</h4>
                <p>Ramgaarh, Sector 50, Gurgaon Haryana</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-gray-500">GST No.</h4>
                  <p>45859658896</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">PAN No.</h4>
                  <p>8545965896</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Contact Person</h3>
              <div>
                <p className="font-medium">Sudhir Sharma</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-500">Phone No.</h4>
                <p>8525896985</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-500">Email</h4>
                <p>XYZ@gmail.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Bank Details</h3>
              <div>
                <h4 className="text-sm text-gray-500">Name</h4>
                <p>Axis Bank</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-500">Branch</h4>
                <p>Gurgaon</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-500">Account No.</h4>
                <p>8796254236586</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-500">IFSC</h4>
                <p>8796254236586</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-500">Account Type</h4>
                <p>Saving</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Amount Section */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Total Amount</p>
            <p className="font-medium">Rs 34000</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Debit</p>
            <p className="font-medium">Rs 34000</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Credit</p>
            <p className="font-medium">Rs 34000</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Session" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="february">February</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="From Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="from">From Date</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="To Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="to">To Date</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Download" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="excel">Excel</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="10">
            <SelectTrigger className="w-[80px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-md">
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Payment Type</TableHead>
                <TableHead>Mode</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Payment ID</TableHead>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Debit Amount</TableHead>
                <TableHead>Credit Amount</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
        <div className="max-h-[400px] overflow-auto">
          <Table>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.paymentType}</TableCell>
                  <TableCell>{transaction.mode}</TableCell>
                  <TableCell>{transaction.method}</TableCell>
                  <TableCell>{transaction.paymentId}</TableCell>
                  <TableCell>{transaction.transactionId}</TableCell>
                  <TableCell>
                    <span className="text-green-600">{transaction.status}</span>
                  </TableCell>
                  <TableCell>{transaction.debitAmount}</TableCell>
                  <TableCell>{transaction.creditAmount}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="h-4 w-4 mr-2" />
                          Download
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
        <div className="text-sm text-gray-500">
          Showing 1-10 of 50 entries
        </div>
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

export default TransactionDashboard;