"use client";
import ParentComponent from "@/components/ParentComponent";
import ParentToolBar from "@/components/ParentsTool";
import { parent } from "@/constant/userData";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { theme, systemTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Ensure theme is only determined after hydration
    setIsDarkTheme(
      theme === "system" ? systemTheme === "dark" : theme === "dark"
    );
  }, [theme, systemTheme]);

  return (
    <div>
  
        <ParentComponent isDarkTheme={isDarkTheme} users={parent} />
  
    </div>
  );
};

export default Page;
