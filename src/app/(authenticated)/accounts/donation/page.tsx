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
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, Download, Plus } from "lucide-react";

interface Donation {
  photo: string;
  companyName: string;
  amount: string;
  modeMethod: string;
  paymentId: string;
  transactionId: string;
  status: string;
}

const DonationDashboard = () => {
  const donations: Donation[] = Array(12).fill({
    photo: "/api/placeholder/40/40",
    companyName: "XYZ Pvt Ltd.",
    amount: "Rs 34,000",
    modeMethod: "Offline & Cash",
    paymentId: "#345544345",
    transactionId: "#895544345",
    status: "Paid"
  });

  return (
    <div className="p-4 space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Total Donation (12)</h2>
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
            Add Donation
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
                <TableHead className="w-[200px]">Company Name</TableHead>
                <TableHead className="w-[150px]">Amount</TableHead>
                <TableHead className="w-[200px]">Mode & Method</TableHead>
                <TableHead className="w-[150px]">Payment ID</TableHead>
                <TableHead className="w-[150px]">Transaction ID</TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead className="w-[120px] text-right">View Detail</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {donations.map((donation, index) => (
                <TableRow key={index}>
                  <TableCell className="w-[80px]">
                    <img
                      src={donation.photo}
                      alt={donation.companyName}
                      className="w-10 h-10 rounded-full bg-gray-200"
                    />
                  </TableCell>
                  <TableCell className="w-[200px] font-medium">
                    {donation.companyName}
                  </TableCell>
                  <TableCell className="w-[150px]">{donation.amount}</TableCell>
                  <TableCell className="w-[200px]">{donation.modeMethod}</TableCell>
                  <TableCell className="w-[150px]">{donation.paymentId}</TableCell>
                  <TableCell className="w-[150px]">{donation.transactionId}</TableCell>
                  <TableCell className="w-[100px]">
                    <span className="px-2 py-1 rounded-full text-sm text-green-700 bg-green-100">
                      {donation.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right w-[120px]">
                    <Button variant="link" className="text-blue-600 p-0">
                      View Detail
                    </Button>
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

export default DonationDashboard;