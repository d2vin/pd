"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SmartphoneIcon, HomeIcon, MapIcon, PaperclipIcon } from "lucide-react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
// import { Popover, Transition } from "@headlessui/react";

const routes = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "/",
    color: "text-neutral-500",
  },
  {
    label: "Mobile",
    icon: SmartphoneIcon,
    href: "/m",
    color: "text-neutral-500",
  },
  {
    label: "Map",
    icon: MapIcon,
    href: "/p",
    color: "text-neutral-500",
  },
  {
    label: "Solutions",
    icon: PaperclipIcon,
    href: "solutions",
    color: "text-neutral-500",
  },
];

// eslint-disable-next-line @typescript-eslint/ban-types
type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <div className="flex h-full flex-col space-y-4 border-r-2 border-neutral-400/10 bg-black py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/">
          <div className="mb-14 flex items-center space-x-2 pl-3">
            <div className="flex">
              <Image width={24} height={24} alt="Logo" src="/productive.png" />
            </div>
            <h1 className="font-mono">Almost Done</h1>
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <div
              className={`
                group flex w-full cursor-pointer justify-start rounded-xl p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white
                ${
                  pathname === route.href
                    ? "bg-white/10 text-white"
                    : "text-zinc-400"
                }
              `}
              key={route.href}
            >
              <Link key={route.href} href={route.href}>
                <div className="flex flex-1 items-center">
                  <route.icon className={cn("mr-3 h-5 w-5", route.color)} />
                  {route.label}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
