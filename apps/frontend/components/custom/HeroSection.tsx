import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import * as motion  from "motion/react-client";
const HeroSection =()=>{


    return(
              <section className="relative overflow-hidden px-6 pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-4 py-2 text-sm text-[#a5b4fc]"
            >
              <Sparkles className="h-4 w-4" />
              <span>Powered by MCP Integration</span>
            </motion.div>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-balance md:text-7xl">
              The Fastest And Most{" "}
              <span className="bg-gradient-to-r from-[#6366f1] to-[#14b8a6] bg-clip-text text-transparent">
                Intelligent
              </span>
              <br />
              Email Platform
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-balance text-foreground/30 md:text-xl">
              Transform your email workflow with AI-powered automation and MCP protocol integration. Manage multiple
              accounts seamlessly while letting AI handle the complexity.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/dashboard">
                <Button size="lg"  variant="secondary">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="default">
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Hero Image/Dashboard Preview */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mt-20"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 p-2 shadow-2xl backdrop-blur-sm">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a]" />
            </div>
            
          </motion.div>
        </div>
      </section>
    )
}

export default HeroSection;