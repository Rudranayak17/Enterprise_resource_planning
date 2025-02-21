"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  GraduationCap,
  UserCircle,
  DollarSign,
  Bus,
  Clock,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const monthlyData = [
  { month: "January", income: 2.4, expenses: 1.8 },
  { month: "February", income: 2.8, expenses: 2.0 },
  { month: "March", income: 2.4, expenses: 1.9 },
  { month: "April", income: 2.6, expenses: 1.7 },
  { month: "May", income: 2.2, expenses: 1.6 },
  { month: "June", income: 2.0, expenses: 1.8 },
  { month: "July", income: 2.4, expenses: 1.9 },
  { month: "August", income: 2.8, expenses: 2.2 },
  { month: "September", income: 2.6, expenses: 2.1 },
];

const academicYears = ["2024-25", "2023-24", "2022-23"];
const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState("2023-24");
  const [selectedMonth, setSelectedMonth] = useState("January");
  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="px-4 py-2 border rounded-md">
              {selectedYear}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {academicYears.map((year) => (
                <DropdownMenuItem
                  key={year}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="px-4 py-2 border rounded-md">
              {selectedMonth}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {monthlyData.map((item) => (
                <DropdownMenuItem
                  key={item.month}
                  onClick={() => setSelectedMonth(item.month)}
                >
                  {item.month}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Students</p>
              <h3 className="text-2xl font-bold">40,689</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <GraduationCap className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Teachers</p>
              <h3 className="text-2xl font-bold">93</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <UserCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Parents</p>
              <h3 className="text-2xl font-bold">40,689</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold">₹ 89,000</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Bus className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Routes</p>
              <h3 className="text-2xl font-bold">40</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Income vs Expenses Chart */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Income vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Line type="monotone" dataKey="income" stroke="#2563eb" />
                  <Line type="monotone" dataKey="expenses" stroke="#dc2626" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Fee Status Card */}
        <Card>
          <CardHeader>
            <CardTitle>Fee Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end h-[300px] pt-4">
              <div className="w-24 bg-green-500 h-[70%]"></div>
              <div className="w-24 bg-red-500 h-[40%]"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Circular */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Circular
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="p-2 bg-yellow-100 rounded">
                    <Clock className="h-4 w-4 text-yellow-600" />
                  </div>
                  <p className="text-sm">
                    Circular for Academics Prayer will held on Hall.
                  </p>
                </div>
              ))}
              <button className="text-sm text-blue-600">View more</button>
            </div>
          </CardContent>
        </Card>

        {/* Holidays */}
        <Card>
          <CardHeader>
            <CardTitle>Holidays</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[15, 15].map((date, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="font-bold text-lg">{date}</div>
                    <div className="text-sm text-gray-500">Wed</div>
                  </div>
                  <div>
                    <p className="font-medium">Independence Day</p>
                    <p className="text-sm text-gray-500">15 Aug 2024</p>
                  </div>
                </div>
              ))}
              <button className="text-sm text-blue-600">View more</button>
            </div>
          </CardContent>
        </Card>

        {/* Activity Cards */}
        {["Co-Circular Activity", "Class Activity"].map((title, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/200"
                  alt="Activity"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <p className="font-medium">Environment Day</p>
                  <button className="text-sm text-blue-400">View more</button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
