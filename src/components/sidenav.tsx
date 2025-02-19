import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  School,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { navItems } from "@/constant/sideNav";

interface NavItemProps {
  item: {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    subItems?: {
      label: string;
      href: string;
      icon?: React.ComponentType<{ className?: string }>;
    }[];
    href?: string;
  };
  isExpanded: boolean;
  isHovered: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ item, isExpanded, isHovered }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.subItems) {
    return (
      <Link
        href={item.href || "#"}
        className={cn(
          "flex items-center space-x-3 px-3 py-2 rounded-md",
          "hover:bg-gray-100 hover:text-primary",
          "transition-colors duration-200"
        )}
      >
        <item.icon className="h-5 w-5" />
        {(isExpanded || isHovered) && (
          <span className="text-sm">{item.label}</span>
        )}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-between",
            "hover:bg-gray-100 hover:text-primary",
            "transition-colors duration-200"
          )}
        >
          <div className="flex items-center space-x-3">
            <item.icon className="h-5 w-5" />
            {(isExpanded || isHovered) && (
              <span className="text-sm">{item.label}</span>
            )}
          </div>
          {(isExpanded || isHovered) && (
            <div>
              {isOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </div>
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-8">
        {(isExpanded || isHovered) &&
          item.subItems?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={cn(
                "flex items-center space-x-3 rounded-md px-2 py-1.5",
                "text-sm text-gray-600 hover:text-primary hover:bg-gray-100",
                "transition-colors duration-200"
              )}
            >
              {subItem.icon && <subItem.icon className="h-4 w-4" />}
              <span>{subItem.label}</span>
            </Link>
          ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
  isExpanded: boolean;
  onExpandChange: (expanded: boolean) => void;
}

const SideNav: React.FC<SideNavProps> = ({
  isOpen,
  onClose,
  isExpanded,
  onExpandChange,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => !isExpanded && setIsHovered(false);
  const toggleExpand = () => {
    onExpandChange(!isExpanded);
    setIsHovered(!isExpanded);
  };
  const NavContent = () => (
    <div className="flex  flex-col h-full">
      <div className="p-4 border-b  flex justify-between items-center">
        {(isExpanded || isHovered) && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <School className="h-5 w-5 text-primary" />
            </div>
            <span className="font-semibold">School Portal</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "hidden md:flex rounded-full",
            isExpanded || isHovered ? "ml-auto" : "mx-auto"
          )}
          onClick={toggleExpand}
        >
          {isExpanded || isHovered ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="flex flex-col space-y-1 p-2">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              item={item}
              isExpanded={isExpanded}
              isHovered={isHovered}
            />
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <Button
          variant="ghost"
          className="w-full justify-start space-x-3"
          onClick={() => {
            /* Add logout logic here */
          }}
        >
          <LogOut className="h-5 w-5" />
          {(isExpanded || isHovered) && <span className="text-sm">Logout</span>}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <nav
        className={`h-screen bg-white border-r transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "w-64" : "w-16"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavContent />
      </nav>

      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-0 w-64">
          <NavContent />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideNav;
