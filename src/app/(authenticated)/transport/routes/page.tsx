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
import { MapPin, Search, Download, Plus, Eye, Edit, Trash2 } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const RoutesTable = () => {
  const routes = Array(25).fill(null).map((_, i) => ({
    id: i + 12,
    type: "Pick up & Drop",
    driver: "Rahul Singh\nShubham Singh",
    timeStart: "10:00 AM",
    timeEnd: "04:00 PM",
    activeDays: 5,
    trackingMethod: "GPS"
  }));

  return (
    <div className="p-4  space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="font-medium">Total Routes:</span>
          <span className="bg-blue-50 px-4 py-2 rounded-md text-sm">
            23
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-8 w-64"
            />
          </div>
          
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
          
          <Select defaultValue="10">
            <SelectTrigger className="w-20">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Route
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        {/* Fixed Header */}
        <div className="w-full">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[150px] text-xs">Route No.</TableHead>
                <TableHead className="w-[150px] text-xs">Route Type</TableHead>
                <TableHead className="w-[200px] text-xs">Driver & Helper</TableHead>
                <TableHead className="w-[150px] text-xs">Time</TableHead>
                <TableHead className="w-[150px] text-xs">Polyline</TableHead>
                <TableHead className="w-[150px] text-xs">Stoppage Point</TableHead>
                <TableHead className="w-[120px] text-xs">Active Days</TableHead>
                <TableHead className="w-[150px] text-xs">Tracking Method</TableHead>
                <TableHead className="w-[150px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {routes.map((route) => (
                <TableRow key={route.id} className="hover:bg-gray-50">
                  <TableCell className="w-[150px] p-4 text-sm text-blue-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Route {route.id}
                    </div>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{route.type}</TableCell>
                  <TableCell className="w-[200px] p-4 text-sm whitespace-pre-line">{route.driver}</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    Start: {route.timeStart}<br />
                    End: {route.timeEnd}
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    <Button 
                      variant="link" 
                      className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal"
                    >
                      View on map
                    </Button>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    <Button 
                      variant="link" 
                      className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal"
                    >
                      ({route.activeDays}) View info
                    </Button>
                  </TableCell>
                  <TableCell className="w-[120px] p-4 text-sm">{route.activeDays} days</TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">{route.trackingMethod}</TableCell>
                  <TableCell className="w-[150px] p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">Showing 1-10 of 25 entries</div>
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

export default RoutesTable;