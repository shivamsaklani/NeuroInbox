import { Mail, MenuIcon, Settings } from "lucide-react";
import * as motion  from "motion/react-client";
import Link from "next/link";
import { ModeToggle } from "./themebtn";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { MenuBar } from "./MenuBar";
import { twJoin } from "tailwind-merge";

type HeaderProps = {
  variant?: "landing" | "dashboard";
  onMenuClick?: () => void;
};

//Landing Page 
const LandingHeader = () => {
  const router = useRouter();

  return (
    <>
      <div className="hidden items-center gap-8 md:flex">
        <Link href="#features" className="text-sm text-foreground transition-colors hover:text-foreground/80">
          Features
        </Link>
        <Link href="#how-it-works" className="text-sm text-foreground transition-colors hover:text-foreground/80">
          How it Works
        </Link>
        <Link href="#pricing" className="text-sm text-foreground transition-colors hover:text-foreground/80">
          Pricing
        </Link>
      </div>
      <div className=" hidden md:flex md:flex-row gap-4">
        <Button variant="secondary" onClick={() => router.push("/signup")}>Get Started</Button>
        <Button  variant="default" onClick={() => router.push("/signin")}>Signin</Button>
      </div>
    </>
  )
}
//Main Dashboard Page 
const DashboardHeader = ({ className }: React.ComponentProps<"div">) => {
  const [search, setsearch] = useState<string>("");
  return (
    <>
      <div className={twJoin(className,"gap-2")}>


        <div className="w-6/12 mx-auto">
          <Input className="rounded-full" value={search} onChange={(e) => { setsearch(e.currentTarget.value) }} placeholder="Search Mail" />
        </div>
        <div className="flex flex-row justify-between items-center gap-2">

          <ModeToggle />
          <Settings />
          <UserButton />
        </div>
      </div>
    </>
  )
}

const Header = ({ variant = "landing", onMenuClick }: HeaderProps) => {
  const [scroll, setscroll] = useState<Boolean>(false);

  useEffect(() => {
    const onscroll = () => {
      setscroll(window.scrollY > 100);
    }
    window.addEventListener("scroll", onscroll);
    () => {
      window.removeEventListener("scroll", onscroll);
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 ${scroll ? "background" : "bg-transparent"}`}
    >
      <div className="px-2 flex max-w-full items-center justify-between py-4">

        <div className="flex items-center gap-3">
          {variant === "dashboard" && onMenuClick && (
            <MenuBar onMenuClick={onMenuClick} />
          )}

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366f1] to-[#14b8a6]">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-balance">NeuroInbox</span>
        </div>
        {variant === "landing" ? <LandingHeader /> : <DashboardHeader className="hidden sm:flex w-full justify-between px-3" />}
      </div>
    </motion.nav>
  )
}


export { Header };