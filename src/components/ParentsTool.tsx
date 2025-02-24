import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Download, FileText, Plus } from "lucide-react";

export default function ParentToolBar() {
  return (
    <div className="flex flex-wrap items-center justify-between   rounded-lg p-5 mb-2 ">
      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
        <Card className="p-2  text-blue-500 font-semibold">
          Total Parents <span className="font-bold">50</span>
        </Card>
        <Input placeholder="Search" className="w-full md:w-40" />
      </div>
      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
        <Select>
          <SelectTrigger className="w-full md:w-40">
            <SelectValue placeholder="Download" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pdf">
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

        <Button className="bg-blue-700 hover:bg-blue-800">
          <Plus />
          add Parents
        </Button>
      </div>
    </div>
  );
}
