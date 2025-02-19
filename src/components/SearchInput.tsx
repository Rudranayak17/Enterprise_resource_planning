"use client";
import React, { useState } from "react";

import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`flex items-center border py-1 max-w-[30rem] px-2 rounded-md transition-all ${
        isFocused ? "border-2 border-black" : "border-gray-300"
      }`}
    >
      <Search size={18} className="text-gray-500" />
      <Input
        placeholder="Search"
        type="search"
        className="max-w-[25rem] border-none outline-none focus:ring-0 focus:border-transparent ml-2"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default SearchInput;
