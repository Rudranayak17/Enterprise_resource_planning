import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  School,
  LogOut,
  PanelRight,
  PanelLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { navItems } from "@/constant/sideNav";
import { usePathname } from "next/navigation";

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
  isDarkTheme: boolean;
  activeItem: string;
  openDropdowns: string[];
  onDropdownChange: (label: string) => void;
  onActiveChange: (label: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  item,
  isExpanded,
  isHovered,
  isDarkTheme,
  activeItem,
  openDropdowns,
  onDropdownChange,
  onActiveChange,
}) => {
  const isActive = activeItem === item.label;
  const isOpen = openDropdowns.includes(item.label);

  const activeStyles = cn(
    isDarkTheme ? "bg-gray-800 text-primary-light" : "bg-gray-100 text-primary"
  );

  if (!item.subItems) {
    return (
      <Link
        href={item.href || "#"}
        className={cn(
          "flex items-center space-x-3 px-3 py-2 rounded-md",
          isDarkTheme
            ? "hover:bg-gray-800 hover:text-primary-light"
            : "hover:bg-gray-100 hover:text-primary",
          "transition-colors duration-200",
          isActive && activeStyles
        )}
        onClick={() => onActiveChange(item.label)}
      >
        <item.icon className="h-5 w-5" />
        {(isExpanded || isHovered) && (
          <span className="text-sm">{item.label}</span>
        )}
      </Link>
    );
  }

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={() => onDropdownChange(item.label)}
    >
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-between",
            isDarkTheme
              ? "hover:bg-gray-800 hover:text-primary-light"
              : "hover:bg-gray-100 hover:text-primary",
            "transition-colors duration-200",
            isActive && activeStyles
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
          item.subItems?.map((subItem, index) => {
            const isSubItemActive = activeItem === subItem.label;
            return (
              <Link
                key={index}
                href={subItem.href}
                className={cn(
                  "flex items-center space-x-3 rounded-md px-2 py-1.5",
                  "text-sm",
                  isDarkTheme
                    ? "text-gray-300 hover:text-primary-light hover:bg-gray-800"
                    : "text-gray-600 hover:text-primary hover:bg-gray-100",
                  "transition-colors duration-200",
                  isSubItemActive && activeStyles
                )}
                onClick={() => onActiveChange(subItem.label)}
              >
                {subItem.icon && <subItem.icon className="h-4 w-4" />}
                <span>{subItem.label}</span>
              </Link>
            );
          })}
      </CollapsibleContent>
    </Collapsible>
  );
};

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const { theme, systemTheme } = useTheme();
  const pathname = usePathname();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const currentPath = pathname;
    const findActiveItem = () => {
      for (const item of navItems) {
        if (item.href === currentPath) {
          setActiveItem(item.label);
          return;
        }
        if (item.subItems) {
          const activeSubItem = item.subItems.find(
            (subItem) => subItem.href === currentPath
          );
          if (activeSubItem) {
            setActiveItem(activeSubItem.label);
            setOpenDropdowns([item.label]);
            return;
          }
        }
      }
    };
    findActiveItem();
  }, [pathname]);

  const isDarkTheme =
    mounted &&
    (theme === "dark" || (theme === "system" && systemTheme === "dark"));

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => !isExpanded && setIsHovered(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setIsHovered(!isExpanded);
  };

  const handleDropdownChange = (label: string) => {
    setOpenDropdowns((prev) => {
      if (prev.includes(label)) {
        return prev.filter((item) => item !== label);
      } else {
        return [label];
      }
    });
  };

  const handleActiveChange = (label: string) => {
    const scrollPosition = scrollAreaRef.current?.scrollTop || 0;
    setActiveItem(label);
    setTimeout(() => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTop = scrollPosition;
      }
    }, 0);
  };

  if (!mounted) {
    return <div className="hidden md:block w-16 h-screen" />;
  }

  const NavContent = () => (
    <div
      className={cn(
        "flex flex-col h-full",
        isDarkTheme ? "bg-black text-white" : "bg-white text-black"
      )}
    >
      <div className="px-4 py-[1.45rem] border-b flex justify-between items-center">
        {(isExpanded || isHovered) && (
          <div className="flex items-center space-x-3">
            <div
              className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center",
                isDarkTheme ? "bg-primary-dark/10" : "bg-primary/10"
              )}
            >
              <School
                className={cn(
                  "h-5 w-5",
                  isDarkTheme ? "text-primary-light" : "text-primary"
                )}
              />
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
            <PanelLeft className="h-4 w-4" />
          ) : (
            <PanelRight className="h-4 w-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1" ref={scrollAreaRef}>
        <div className="flex flex-col space-y-1 p-2">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              item={item}
              isExpanded={isExpanded}
              isHovered={isHovered}
              isDarkTheme={isDarkTheme}
              activeItem={activeItem}
              openDropdowns={openDropdowns}
              onDropdownChange={handleDropdownChange}
              onActiveChange={handleActiveChange}
            />
          ))}
        </div>
      </ScrollArea>

      <div
        className={cn(
          "border-t p-4 pt-5",
          isDarkTheme ? "border-gray-800" : "border-gray-200"
        )}
      >
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start space-x-3",
            isDarkTheme
              ? "hover:bg-gray-800 hover:text-primary-light"
              : "hover:bg-gray-100 hover:text-primary"
          )}
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
        className={cn(
          "hidden md:flex flex-col border-r h-screen",
          isDarkTheme
            ? "bg-black text-white border-gray-800"
            : "bg-white text-black border-gray-200",
          "transition-all duration-300 ease-in-out",
          isExpanded || isHovered ? "w-64" : "w-16"
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavContent />
      </nav>

      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="left"
          className={cn(
            "p-0 w-64",
            isDarkTheme
              ? "bg-black text-white border-gray-800"
              : "bg-white text-black border-gray-200"
          )}
        >
          <NavContent />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideNav;