import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileDown, Pencil, Trash2, Plus } from 'lucide-react';

const ChapterDashboard = () => {
  // Sample data for chapters
  const chapters = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    subjectName: 'Maths',
    subjectType: 'Compulsory',
    chapterNumber: '1',
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
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Subject Name</TableHead>
              <TableHead>Chapter /Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Revision</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {chapters.map((chapter) => (
              <TableRow key={chapter.id} className="hover:bg-gray-50">
                <TableCell>
                  <div>
                    <div className="font-medium">{chapter.subjectName}</div>
                    <div className="text-sm text-gray-500">{chapter.subjectType}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{chapter.chapterNumber}</div>
                    <div className="text-sm text-gray-500">{chapter.chapterName}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-green-600">Completed</div>
                    <div className="text-sm text-gray-500">{chapter.status.date}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-green-600">Completed</div>
                    <div className="text-sm text-gray-500">{chapter.revision.date}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button 
                    variant="link" 
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal"
                  >
                    View Notes
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
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
  );
};

export default ChapterDashboard;