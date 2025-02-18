"use client";

import {
  CircleUserRound,
  GraduationCap,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./themeMode";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const headerTitle = [
    { name: "My School", link: "/" },
    { name: "Dashboard", link: "/" },
    { name: "Buses", link: "/" },
    { name: "Fee", link: "/" },
    { name: "User", link: "/" },
    { name: "Complaint", link: "/" },
    { name: "SchoolEG", link: "/" },
    { name: "Payroll", link: "/" },
  ];

  return (
    <nav
      className={cn(
        "flex items-center justify-between px-6 py-4 border-b shadow-sm relative z-20"
      )}
    >
      {/* Left Section with Logo and Menu */}
      <div className="flex items-center space-x-4">
        {/* Mobile Menu Button for Sidebar */}
        <button className="md:hidden" onClick={toggleSidebar}>
          <LayoutDashboard className={cn("w-6 h-6")} />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className={cn("w-6 h-6")} />
          <span className={cn("text-lg font-semibold")}>School Name</span>
        </Link>
      </div>

      {/* Mobile Header Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X className={cn("w-6 h-6")} />
        ) : (
          <Menu className={cn("w-6 h-6")} />
        )}
      </button>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {headerTitle.map((val, index) => (
          <Link
            key={index}
            href={val.link}
            className={cn(
              "hover:border-b-2 hover:text-blue-700 hover:border-blue-700 focus:border-b-2 focus:border-blue-700 transition"
            )}
          >
            {val.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "absolute top-16 left-0 w-full shadow-md md:hidden flex flex-col space-y-4 p-4 z-30"
            )}
          >
            {headerTitle.map((val, index) => (
              <Link
                key={index}
                href={val.link}
                className={cn("hover:text-blue-700 transition")}
                onClick={() => setIsOpen(false)}
              >
                {val.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Section */}
      <div className="md:flex items-center space-x-4">
        <ThemeToggle />
        <div className="flex items-center space-x-2">
          <CircleUserRound
            className="w-6 h-6 text-blue-700"
            stroke="currentColor"
          />
          <span className="hidden sm:flex text-blue-700">User Name</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
