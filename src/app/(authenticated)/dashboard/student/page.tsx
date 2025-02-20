import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsContentComponent from "@/components/TabsContentComponent";
import StudentInfoCard from "@/components/StudentInfoCard";
import { StudentCrumb } from "@/components/breadCrumb/dashBoard/BreadCrumb";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto p-4">
        <StudentCrumb />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Left sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-4 ">
              <StudentInfoCard />
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9">
            <Tabs defaultValue="attendance" className="h-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full mb-6">
                <TabsTrigger value="attendance">Attendance</TabsTrigger>
                <TabsTrigger value="exams">Exam Result</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
                <TabsTrigger value="fees">Fee Structure</TabsTrigger>
                <TabsTrigger value="payment">Payment History</TabsTrigger>
                <TabsTrigger value="documents">Document</TabsTrigger>
              </TabsList>

              <div className="h-[calc(100vh-12rem)] overflow-hidden">
                <TabsContentComponent />
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
