import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { TeacherData } from "@/constant/userData";
import { Pencil, Trash2 } from "lucide-react";

export default function TeacherTable({ users }: { users: TeacherData }) {
  return (
    <div className="mx-3">
      {/* Wrap table in a bordered container */}
      <div className="border rounded-md">
        {/* Fixed Header Section */}
        <div className="w-full">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="w-[80px] text-xs">Photo</TableHead>
                <TableHead className="w-[200px] text-xs">User Name</TableHead>
                <TableHead className="w-[150px] text-xs">Role</TableHead>
                <TableHead className="w-[150px] text-xs">Type</TableHead>
                <TableHead className="w-[150px] text-xs">Date</TableHead>
                <TableHead className="w-[120px] text-xs">Status</TableHead>
                <TableHead className="w-[120px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body Section */}
        <div className="max-h-[calc(100vh-280px)] overflow-auto">
          <Table>
            <TableBody>
              {Array(25)
                .fill(users)
                .map((user, index) => (
                  <TableRow key={index}>
                    <TableCell className="w-[80px] p-4">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={user.photo} />
                      </Avatar>
                    </TableCell>
                    <TableCell className="w-[200px] p-4 text-sm font-medium">
                      {user.name}
                    </TableCell>
                    <TableCell className="w-[150px] p-4 text-sm">
                      {user.role}
                    </TableCell>
                    <TableCell className="w-[150px] p-4 text-sm">
                      {user.type}
                    </TableCell>
                    <TableCell className="w-[150px] p-4 text-sm">
                      {user.date}
                    </TableCell>
                    <TableCell className="w-[120px] p-4 text-sm">
                      {user.status}
                    </TableCell>
                    <TableCell className="w-[120px] p-4 text-right">
                      <span className="flex justify-end space-x-4">
                        <Pencil className="h-4 w-4 cursor-pointer" stroke="blue" />
                        <Trash2 className="h-4 w-4 cursor-pointer" stroke="red" />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}