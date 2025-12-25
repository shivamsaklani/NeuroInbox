"use client"
import { Header } from "@/components/custom/header"
import { Sidebar } from "@/components/custom/sidebar";
import { ReactElement, useState } from "react"

export default function DashboardPage({children}:{
    children:ReactElement}) {
    const [open,setOpen] = useState<boolean>(false);
    return(<>
     <div className="min-h-screen bg-background w-full pt-16">
   
        <Header variant="dashboard" onMenuClick={()=>setOpen(!open)}/>
            <div  className="flex  h-[calc(100vh-4rem)] py-2 ">
       <Sidebar open={open} onClick={()=>setOpen(!open)}/>
            <div className="relative overflow-hidden w-full h-full bg-secondary rounded-lg ">
                <div className="absolute w-full h-full">
               {children}
                </div>
            </div>
            </div>
       
    </div>
          </>
    )
}

