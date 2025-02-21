import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Search, Download, Plus, Eye, Edit, Trash2 } from 'lucide-react';

const RoutesTable = () => {
  const routes = Array(10).fill(null).map((_, i) => ({
    id: i + 12,
    type: "Pick up & Drop",
    driver: "Rahul Singh\nShubham Singh",
    timeStart: "10:00 AM",
    timeEnd: "04:00 PM",
    activeDays: 5,
    trackingMethod: "GPS"
  }));

  return (
    <div className="p-4 w-full">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex bg-blue-100 text-blue-800 items-center gap-2">
          <span className="font-medium">Total Routes:</span>
          <span className=" px-2 py-1 rounded">23</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
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
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </Select>
          
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Route
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Route No.</TableHead>
            <TableHead>Route Type</TableHead>
            <TableHead>Driver & Helper</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Polyline</TableHead>
            <TableHead>Stoppage Point</TableHead>
            <TableHead>Active Days</TableHead>
            <TableHead>Tracking Method</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {routes.map((route) => (
            <TableRow key={route.id}>
              <TableCell className="text-blue-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Route {route.id}
                </div>
              </TableCell>
              <TableCell>{route.type}</TableCell>
              <TableCell className="whitespace-pre-line">{route.driver}</TableCell>
              <TableCell>
                Start: {route.timeStart}<br />
                End: {route.timeEnd}
              </TableCell>
              <TableCell>
                <Button variant="link" className="text-blue-600 p-0">
                  View on map
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="link" className="text-blue-600 p-0">
                   ({route.activeDays}) View info
                </Button>
              </TableCell>
              <TableCell>{route.activeDays} days</TableCell>
              <TableCell>{route.trackingMethod}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Trash2 className="h-4 w-4" />
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

export default RoutesTable;