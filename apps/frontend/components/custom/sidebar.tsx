"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Brain, Inbox, LucideMails, Pencil } from "lucide-react";

export function Sidebar({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  const sidebarItems = [
    { icon: Inbox, title: "Inbox", link: "/" },
    { icon: LucideMails, title: "All Mails", link: "/" },
    { icon: Brain, title: "AI", link: "/" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      <div
        onClick={onClick}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity ",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 bg-background transition-all duration-300 mr-2",
          // mobile
          "md:static",
          // width control
          open ? "w-64 translate-x-0" : "w-16 -translate-x-full md:translate-x-0"
        )}
      >
       {/* Compose (desktop only) */}
<div className="hidden md:flex justify-center mt-6">
  <Button variant="ghost"
    className="
      group flex items-center gap-2
      rounded-full bg-accent
      p-3
      transition-all duration-300
    "
  >
    <Pencil className="h-5 w-5" />

    {/* Text appears only on hover */}
  { open && <span>
      Compose
    </span>}
  </Button>
</div>

        {/* Menu items */}
        <div className="mt-6 flex flex-col gap-1">
          {sidebarItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 px-4 py-2 hover:bg-accent rounded-r-full cursor-pointer"
              >
                <Icon className="shrink-0" />

                {/* TEXT VISIBILITY LOGIC */}
                <span
                  className={cn(
                    "whitespace-nowrap transition-opacity duration-200",
                    open ? "opacity-100" : "opacity-0 md:hidden"
                  )}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
