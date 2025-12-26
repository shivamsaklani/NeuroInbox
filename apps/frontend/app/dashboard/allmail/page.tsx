"use client";

import CustomTable from "@/components/custom/customTable";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const emails = [
  {
    id: 1,
    sender: "alerts@github.com",
    subject: "New sign-in detected",
    preview: "A new login was detected from a Linux device.",
    time: "10:32 AM",
  },
  {
    id: 2,
    sender: "noreply@amazon.in",
    subject: "Your order has been shipped",
    preview: "Your package is on the way and will arrive soon.",
    time: "9:10 AM",
  },
  {
    id: 3,
    sender: "newsletter@vercel.com",
    subject: "What’s new in Next.js",
    preview: "Explore the latest performance and DX improvements.",
    time: "Yesterday",
  },
  {
    id: 4,
    sender: "hr@startup.io",
    subject: "Interview scheduled",
    preview: "Your interview is scheduled for Monday at 11:00 AM.",
    time: "Yesterday",
  },
];

const AllMails = () => {
  return (
    <Card className="flex h-full w-full flex-col overflow-hidden p-0">
      {/* Top toolbar */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-background px-4 py-2">
        <div className="text-sm font-medium">Inbox</div>
        <div className="text-xs text-muted-foreground">Search / Filters</div>
      </div>

      {/* Mail list */}
      <div className="flex-1 overflow-y-auto">
       <CustomTable emails={emails} />
      </div>
    </Card>
  );
};

export default AllMails;
