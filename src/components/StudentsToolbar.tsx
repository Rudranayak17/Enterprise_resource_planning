
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

export default function StudentsToolbar() {
  return (
    <div className="flex flex-wrap items-center justify-between space-x-5 border rounded-lg p-5 mb-2 ">
      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
        <Card className="p-2 bg-blue-100 text-blue-900 font-semibold">
          Total Students <span className="font-bold">15</span>
        </Card>
        <Input placeholder="Search" className="w-full md:w-40" />
      </div>
      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
        <Select>
          <SelectTrigger className="w-full md:w-40">
            <SelectValue placeholder="Select Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="class1">Class 1</SelectItem>
            <SelectItem value="class2">Class 2</SelectItem>
            <SelectItem value="class3">Class 3</SelectItem>
          </SelectContent>
        </Select>

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
  );
}