"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
type MobileSidebarProps = {};

const MobileSidebar: React.FC<MobileSidebarProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="ghost"
          size="icon"
          className="z-50 text-white"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-56 border-none p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
