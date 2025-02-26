import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileDown, Pencil, Trash2, Plus } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ChapterDashboard = () => {
  // Sample data for chapters (increased to 25 for scrolling demo)
  const chapters = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    subjectName: 'Maths',
    subjectType: 'Compulsory',
    chapterNumber: `${i + 1}`,
    chapterName: 'Colligative Property',
    status: {
      completed: true,
      date: '14/02/2025'
    },
    revision: {
      completed: true,
      date: '14/02/2025'
    }
  }));

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-blue-50 px-4 py-2 rounded-md">
          <span className="text-sm">Total Chapters: 50</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Input 
            className="w-48"
            placeholder="Search Class"
            type="search"
          />
          
          <Button variant="outline" className="flex items-center gap-2">
            <FileDown size={16} className="text-red-500" />
            Download
          </Button>

          <Button variant="outline" className="flex items-center gap-2">
            <FileDown size={16} className="text-green-500" />
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
            <Plus size={16} />
            Add Chapter
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
                <TableHead className="w-[200px] text-xs">Subject Name</TableHead>
                <TableHead className="w-[200px] text-xs">Chapter /Name</TableHead>
                <TableHead className="w-[150px] text-xs">Status</TableHead>
                <TableHead className="w-[150px] text-xs">Revision</TableHead>
                <TableHead className="w-[150px] text-xs">Notes</TableHead>
                <TableHead className="w-[150px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[calc(100vh-280px)] overflow-auto">
          <Table>
            <TableBody>
              {chapters.map((chapter) => (
                <TableRow key={chapter.id} className="hover:bg-gray-50">
                  <TableCell className="w-[200px] p-4 text-sm">
                    <div>
                      <div className="font-medium">{chapter.subjectName}</div>
                      <div className="text-sm text-gray-500">{chapter.subjectType}</div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[200px] p-4 text-sm">
                    <div>
                      <div className="font-medium">{chapter.chapterNumber}</div>
                      <div className="text-sm text-gray-500">{chapter.chapterName}</div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    <div>
                      <div className="text-green-600">Completed</div>
                      <div className="text-sm text-gray-500">{chapter.status.date}</div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    <div>
                      <div className="text-green-600">Completed</div>
                      <div className="text-sm text-gray-500">{chapter.revision.date}</div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-sm">
                    <Button 
                      variant="link" 
                      className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal"
                    >
                      View Notes
                    </Button>
                  </TableCell>
                  <TableCell className="w-[150px] p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-700">
                        <Trash2 size={16} />
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

export default ChapterDashboard;