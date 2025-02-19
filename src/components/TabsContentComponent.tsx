import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import StudentInfoCard from "./StudentInfoCard";
import AttendanceOverview from "./AttendanceOverview";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Switch } from "./ui/switch";
import { Download, Eye, FileText, PlusCircle, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

const TabsContentComponent = () => {
  const examData = [
    {
      name: "Half-Yearly Exam",
      subject: "Maths",
      marks: "80/100",
      status: "Pass",
      date: "14/02/2024",
    },
  ];

  const feeData = [
    {
      id: "#12023556",
      type: "Monthly",
      month: "Apr 2024",
      amount: "Rs 4800",
      status: "Pending",
    },
  ];

  const tuitionData = [
    {
      category: "Monthly",
      type: "Tuition Fee",
      amount: "Rs 12000",
      discount: "Rs 2000",
      payable: "Rs 10000",
      status: "Approved",
    },
  ];

  const paymentData = [
    {
      invoiceId: "#20123589",
      paymentId: "#20123589",
      transactionId: "#20123589",
      date: "14/02/2025",
      amount: "Rs 3000",
      mode: "Online",
      method: "Bank Transfer",
    },
  ];
  return (
    <>
      <TabsContent value="attendance">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StudentInfoCard />
          <AttendanceOverview />
        </div>
      </TabsContent>

      <TabsContent value="exams">
        <div className="grid grid-cols-[30%_70%] gap-6">
          <StudentInfoCard />
          <div className="max-h-[600px] border rounded-lg shadow-md overflow-auto">
         
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead>Exam Name</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Marks</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Show Parents</TableHead>
                  <TableHead>Attachments</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody   >
                {Array.from({ length: 100 }, (_, index) => ({
                  name: `Exam ${index + 1}`,
                  subject: "Mathematics",
                  marks: Math.floor(Math.random() * 100), // Random marks
                  status: Math.random() > 0.5 ? "Pass" : "Fail",
                  date: new Date().toLocaleDateString(),
                })).map((exam, index) => (
                  <TableRow key={index}>
                    <TableCell>{exam.name}</TableCell>
                    <TableCell>{exam.subject}</TableCell>
                    <TableCell>{exam.marks}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          exam.status === "Pass"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {exam.status}
                      </span>
                    </TableCell>
                    <TableCell>{exam.date}</TableCell>
                    <TableCell>
                      <Switch />
                    </TableCell>
                    <TableCell>
                      <FileText className="w-4 h-4" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="invoices">
        <div className="grid grid-cols-[30%_70%] gap-6">
          <StudentInfoCard />
          <div className="max-h-[600px] overflow-auto border rounded-lg shadow-md">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Fee Type</TableHead>
                <TableHead>Month</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Fee Details</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeData.map((fee, index) => (
                <TableRow key={index}>
                  <TableCell>{fee.id}</TableCell>
                  <TableCell>{fee.type}</TableCell>
                  <TableCell>{fee.month}</TableCell>
                  <TableCell>{fee.amount}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        fee.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {fee.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="link" className="text-blue-600">
                      View Details
                    </Button>
                  </TableCell>
                  <TableCell>
                    {fee.status === "Pending" ? (
                      <Button variant="default">Pay Now</Button>
                    ) : (
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Fees Slip
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="fees">
        <div className="grid grid-cols-[30%_70%] gap-6">
          <StudentInfoCard />
          <div className="max-h-[600px] overflow-auto border rounded-lg shadow-md">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Fee Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Payble Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tuitionData.map((fee, index) => (
                <TableRow key={index}>
                  <TableCell>{fee.category}</TableCell>
                  <TableCell>{fee.type}</TableCell>
                  <TableCell>{fee.amount}</TableCell>
                  <TableCell>{fee.discount}</TableCell>
                  <TableCell>{fee.payable}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        fee.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {fee.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="link" className="text-blue-600">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="payment">
        <div className="grid grid-cols-[30%_70%] gap-6">
          <StudentInfoCard />
          <div className="max-h-[600px] overflow-auto border rounded-lg shadow-md">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Payment ID</TableHead>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Mode</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentData.map((fee, index) => (
                <TableRow key={index}>
                  <TableCell>{fee.invoiceId}</TableCell>
                  <TableCell>{fee.paymentId}</TableCell>
                  <TableCell>{fee.transactionId}</TableCell>
                  <TableCell>{fee.date}</TableCell>
                  <TableCell>{fee.amount}</TableCell>
                  <TableCell>{fee.mode}</TableCell>
                  <TableCell>{fee.method}</TableCell>

                  <TableCell>
                    <Button variant="link" className="text-blue-600">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="documents">
        <div className="grid grid-cols-[30%_70%] gap-6">
          <StudentInfoCard />
          <div className="max-h-[600px] overflow-auto border rounded-lg shadow-md">
          <div className="grid grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((doc) => (
              <Card key={doc} className="p-4">
                <div className="flex  flex-col items-center space-y-2">
                  <FileText className="w-8 h-8 text-gray-400" />
                  <span className="text-sm">Document Name</span>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4 text-blue-500" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Download className="w-4 h-4 text-green-500" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
            <Card className="p-4 border-dashed">
              <Button
                variant="ghost"
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <PlusCircle className="w-8 h-8 mb-2" />
                <span>Add Document</span>
              </Button>
            </Card>
          </div>
          </div>
        </div>
      </TabsContent>
    </>
  );
};

export default TabsContentComponent;
