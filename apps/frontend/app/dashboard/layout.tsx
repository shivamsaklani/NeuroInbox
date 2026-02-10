"use client"
import { Header } from "@/components/custom/header"
import { Sidebar } from "@/components/custom/sidebar";
import { Button } from "@/components/ui/button";
import { ReactElement, useState } from "react"

export default function DashboardPage({ children }: {
    children: ReactElement
}) {

    const [open, setOpen] = useState<boolean>(true);
    return (<>
        <div className="min-h-screen w-full pt-16">
            <Header variant="dashboard" onMenuClick={() => setOpen(!open)} />
            {open ? <div className="flex items-center justify-center h-[calc(100vh-4rem)] w-full">
                <Button onClick={()=>setOpen(!open)}>
                    Connect With Email
                </Button>
            </div> : (
                <>

                    <div className="flex p-2 sm:p-0 h-[calc(100vh-4rem)]  ">
                        <Sidebar open={open} onClick={() => setOpen(!open)} />
                        <div className="relative overflow-hidden w-full h-full rounded-lg ">
                            <div className="absolute w-full h-full">
                                {children}
                            </div>
                        </div>
                    </div>
                </>)}

        </div>
    </>
    )
}

