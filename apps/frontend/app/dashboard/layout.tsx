"use client"
import { Header } from "@/components/custom/header"
import { Sidebar } from "@/components/custom/sidebar";
import Splashscreen from "@/components/custom/splash";
import { ReactElement, useEffect, useState } from "react"

export default function DashboardPage({children}:{
    children:ReactElement}) {
    const [loading,setloading] = useState<boolean>(false);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setloading(false);
    //     },5000);
    // });

    const [open,setOpen] = useState<boolean>(false);
    return loading?<Splashscreen/>:(<>
     <div className="min-h-screen w-full pt-16">
   
        <Header variant="dashboard" onMenuClick={()=>setOpen(!open)}/>
            <div  className="flex p-2 sm:p-0 h-[calc(100vh-4rem)]  ">
       <Sidebar open={open} onClick={()=>setOpen(!open)}/>
            <div className="relative overflow-hidden w-full h-full rounded-lg ">
                <div className="absolute w-full h-full">
               {children}
                </div>
            </div>
            </div>
       
    </div>
          </>
    )
}

