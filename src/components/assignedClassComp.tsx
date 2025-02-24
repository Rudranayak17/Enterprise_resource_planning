import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { UserData } from "@/types/utils";
import { Pencil, Trash2 } from "lucide-react";

export default function AssignedComp({ users }: { users: UserData }) {
  return (
    <div className="mx-3">
      {/* Wrap table in a bordered container like CompanyDashboard */}
      <div className="border rounded-md">
        {/* Fixed Header Section */}
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px] text-xs">Photo</TableHead>
                <TableHead className="w-[180px] text-xs">Name</TableHead>
                <TableHead className="w-[180px] text-xs">Admission No</TableHead>
                <TableHead className="w-[180px] text-xs">Father Name</TableHead>
                <TableHead className="w-[180px] text-xs">Mother Name</TableHead>
                <TableHead className=" w-[180px]  text-xs">Address</TableHead>
                <TableHead className="w-[120px] text-xs">Status</TableHead>
                <TableHead className="w-[120px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body Section */}
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {Array(25)
                .fill(users)
                .map((user, index) => (
                  <TableRow key={index}>
                    <TableCell className="w-[80px] p-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={user.photo} />
                      </Avatar>
                    </TableCell>
                    <TableCell className="w-[200px] p-2 text-sm font-medium">
                      {user.name}
                    </TableCell>
                    <TableCell className="w-[200px] p-2">
                      <p className="text-sm">{user.admission.id}</p>
                      <p className="text-xs text-blue-700">{user.admission.date}</p>
                    </TableCell>
                    <TableCell className="w-[200px] p-2">
                      <p className="text-sm">{user.guardian.name}</p>
                      <p className="text-xs text-blue-700">{user.guardian.phone}</p>
                    </TableCell>
                    <TableCell className="w-[200px] p-2">
                      <p className="text-sm">{user.guardian.name}</p>
                      <p className="text-xs text-blue-700">{user.guardian.phone}</p>
                    </TableCell>
                    <TableCell className="p-2 text-sm">{user.address}</TableCell>
                    <TableCell className="w-[120px] p-2 text-sm">{user?.status}</TableCell>
                    <TableCell className="w-[120px] p-2 text-right">
                      <span className="flex justify-end space-x-4">
                        <Pencil className="h-4 w-4 cursor-pointer" stroke="blue" />
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