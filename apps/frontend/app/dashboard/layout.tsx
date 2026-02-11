"use client";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: {
    children: ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen w-full h-screen bg-background">
            {children}
        </div>
    );
}
