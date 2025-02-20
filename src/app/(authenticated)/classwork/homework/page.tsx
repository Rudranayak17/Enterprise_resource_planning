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
import { Download, Plus, Edit, Trash } from "lucide-react";

const HomeworkManagement = () => {
  const homeworkList = Array(9).fill({
    date: "14/08/24",
    class: "11th C",
    subject: "Maths",
    teacher: "Ravi Dubey",
    period: "8th",
    student: "All",
    homework: "Biodiversity of Animal Kingdom..",
  });

  return (
    <div className="p-6 bg-white">
      {/* Header Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-blue-50 px-3 py-1 rounded text-sm">
          Total Homework <span className="font-medium">50</span>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search Class"
              className="pl-8 w-64"
            />
            <svg
              className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="14/02/2025" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="14">14/02/2025</SelectItem>
              <SelectItem value="15">15/02/2025</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>

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

          <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Homework</span>
          </Button>
        </div>
      </div>

      {/* Homework Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Teacher</TableHead>
            <TableHead>Period</TableHead>
            <TableHead>Student</TableHead>
            <TableHead>Homework</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {homeworkList.map((homework, index) => (
            <TableRow key={index}>
              <TableCell>{homework.date}</TableCell>
              <TableCell>{homework.class}</TableCell>
              <TableCell>{homework.subject}</TableCell>
              <TableCell>{homework.teacher}</TableCell>
              <TableCell>{homework.period}</TableCell>
              <TableCell>
                <span className="text-blue-600 hover:underline cursor-pointer">
                  {homework.student}
                </span>
              </TableCell>
              <TableCell>{homework.homework}</TableCell>
              <TableCell>
                <div className="flex space-x-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0 text-blue-600"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0 text-green-600"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0 text-red-600"
                  >
                    <Trash className="h-4 w-4" />
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

export default HomeworkManagement;
