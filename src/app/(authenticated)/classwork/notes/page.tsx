import React from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Eye, Download, Plus } from 'lucide-react';

const DocumentDashboard = () => {
  // Sample documents data
  const documents = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: 'Document Name',
    type: 'pdf'
  }));

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="bg-blue-50 px-4 py-2 rounded-md">
          <span className="text-sm">Total Notes: 50</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11">11th Class</SelectItem>
              <SelectItem value="12">12th Class</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="maths">Maths</SelectItem>
              <SelectItem value="physics">Physics</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Chapter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Chapter 1</SelectItem>
              <SelectItem value="2">Chapter 2</SelectItem>
            </SelectContent>
          </Select>

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
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="border rounded-lg p-4 flex flex-col items-center text-center hover:border-blue-200 transition-colors"
          >
            <div className="relative mb-2">
              <FileText size={48} className="text-gray-400" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full" />
            </div>
            <p className="text-sm font-medium mb-3">{doc.name}</p>
            <div className="flex items-center justify-center gap-2 w-full">
              <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                PDF
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                <Eye size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                <Download size={16} />
              </Button>
            </div>
          </div>
        ))}

        {/* Add Document Card */}
        <div className="border border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-center hover:border-blue-200 transition-colors cursor-pointer">
          <Plus size={24} className="text-blue-600 mb-2" />
          <p className="text-sm text-blue-600">Add Document</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentDashboard;