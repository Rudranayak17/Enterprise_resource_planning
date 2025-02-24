"use client";

import {
  Bell,
  CircleUserRound,
  GraduationCap,
  LayoutDashboard,
  Maximize,
  Menu,
  X,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./themeMode";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2023-24");
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const academicYears = ["2024-25", "2023-24", "2022-23"];

  // Sample notifications data
  const notifications = [
    { id: 1, title: "New Assignment", message: "Math homework due tomorrow", time: "2h ago" },
    { id: 2, title: "School Event", message: "Parent meeting at 5 PM", time: "4h ago" },
    { id: 3, title: "Grade Posted", message: "Science test results available", time: "1d ago" },
  ];

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <nav className={cn("flex items-center justify-between px-4 py-5 border-b shadow-sm relative z-20")}>
      {/* Left Section with Logo and Menu */}
      <div className="flex items-center space-x-4">
        <button className="md:hidden" onClick={toggleSidebar}>
          <LayoutDashboard className="w-6 h-6" />
        </button>
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="w-6 h-6" />
          <span className="text-lg font-semibold">School Name</span>
        </Link>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

 

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full shadow-md md:hidden flex flex-col space-y-4 z-30"
          ></motion.div>
        )}
      </AnimatePresence>

      {/* User Section */}
      <div className="md:flex items-center space-x-4">
      <div className="hidden md:flex space-x-6">
          <Input placeholder="Select School" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="px-4 py-2 border rounded-md">
            {selectedYear}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {academicYears.map((year) => (
              <DropdownMenuItem key={year} onClick={() => setSelectedYear(year)}>
                {year}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Maximize className="size-5 cursor-pointer" onClick={toggleFullScreen} />
        
        {/* Notification with Tooltip and Card */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="relative">
                <Bell 
                  className="size-5 cursor-pointer" 
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  onMouseEnter={() => setIsNotificationOpen(true)}
                />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>View Notifications</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Notification Card */}
        <AnimatePresence>
          {isNotificationOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-12 right-0 w-80 z-50"
              onMouseLeave={() => setIsNotificationOpen(false)}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent className="max-h-96 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className=" border-b last:border-b-0 hover:bg-gray-100"
                      >
                        <h4 className="text-sm font-semibold">{notification.title}</h4>
                        <p className="text-sm text-gray-600">{notification.message}</p>
                        <p className="text-xs text-gray-400">{notification.time}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-600">No new notifications</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-2 cursor-pointer">
            <CircleUserRound className="w-6 h-6 text-blue-700" />
            <span className="hidden sm:flex text-blue-700">User Name</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              My Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIsLogoutDialogOpen(true)} className="text-red-500">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Dialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen}>
        <DialogContent>
          <DialogTitle>Confirm Logout</DialogTitle>
          <DialogDescription>Do you want to log out from this device only or all devices?</DialogDescription>
          <DialogFooter className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsLogoutDialogOpen(false)}>Cancel</Button>
            <Button variant="secondary" onClick={() => console.log("Logout from this device")}>Logout Single</Button>
            <Button variant="destructive" onClick={() => console.log("Logout from all devices")}>Logout All</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Header;