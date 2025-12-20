"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Sparkles, Zap, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {

  const workItems = [
              {
                step: "01",
                title: "Connect Your Accounts",
                description: "Add your email accounts with secure API tokens. We support all major providers.",
              },
              {
                step: "02",
                title: "Chat with AI",
                description: "Use natural language to manage emails. Execute MCP commands for advanced workflows.",
              },
              {
                step: "03",
                title: "Stay Organized",
                description: "Let AI prioritize and categorize. Focus on what matters most.",
              },
            ];
  const FeatureItems = [
              {
                icon: Sparkles,
                title: "AI-Powered Chat",
                description:
                  "Interact with your emails using natural language. Let AI draft, organize, and prioritize for you.",
                gradient: "from-[#6366f1] to-[#8b5cf6]",
              },
              {
                icon: Zap,
                title: "MCP Integration",
                description:
                  "Execute powerful commands through Model Context Protocol. The true strength of NeuroInbox.",
                gradient: "from-[#14b8a6] to-[#06b6d4]",
              },
              {
                icon: Mail,
                title: "Multiple Accounts",
                description: "Manage unlimited email accounts in one unified interface. Switch contexts effortlessly.",
                gradient: "from-[#8b5cf6] to-[#d946ef]",
              },
              {
                icon: Shield,
                title: "Secure by Design",
                description: "Your API tokens are encrypted and stored securely. Complete control over your data.",
                gradient: "from-[#f59e0b] to-[#ef4444]",
              },
              {
                icon: Users,
                title: "Custom Profiles",
                description: "Personalize your workspace with custom avatars, themes, and preferences.",
                gradient: "from-[#06b6d4] to-[#3b82f6]",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Built on modern architecture for instant responses and smooth animations.",
                gradient: "from-[#ef4444] to-[#f59e0b]",
              },
            ];



  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366f1] to-[#14b8a6]">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-balance">NeuroInbox</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="#features" className="text-sm text-gray-300 transition-colors hover:text-white">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-gray-300 transition-colors hover:text-white">
              How it Works
            </Link>
            <Link href="#pricing" className="text-sm text-gray-300 transition-colors hover:text-white">
              Pricing
            </Link>
          </div>

          <Link href="/dashboard">
            <Button className="bg-white text-black hover:bg-gray-100">Get Started</Button>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
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
              The fastest and most{" "}
              <span className="bg-gradient-to-r from-[#6366f1] to-[#14b8a6] bg-clip-text text-transparent">
                intelligent
              </span>
              <br />
              email platform
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-400 text-balance md:text-xl">
              Transform your email workflow with AI-powered automation and MCP protocol integration. Manage multiple
              accounts seamlessly while letting AI handle the complexity.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/dashboard">
                <Button size="lg" className="group bg-white text-black hover:bg-gray-100">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
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

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-balance md:text-5xl">Everything you need to master email</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400 text-balance">
              Built for professionals who demand intelligence, speed, and seamless integration
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FeatureItems.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.gradient}`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-balance md:text-5xl">Simple to start. Powerful to master.</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400 text-balance">
              Get up and running in minutes with our streamlined onboarding
            </p>
          </motion.div>


          <div className="grid gap-5 md:grid-cols-3">
            {workItems.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="mb-4 text-5xl font-bold text-white/10">{step.step}</div>
                <h3 className="mb-2 text-2xl font-bold">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
                {index < 2 && (
                  <div className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-white/20 to-transparent md:block" />
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#6366f1]/20 to-[#14b8a6]/20 p-12 text-center backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#14b8a6]/10" />
            <div className="relative">
              <h2 className="mb-4 text-4xl font-bold text-balance md:text-5xl">Ready to transform your inbox?</h2>
              <p className="mb-8 text-lg text-gray-300 text-balance">
                Join thousands of professionals using AI to master their email workflow
              </p>
              <Link href="/dashboard">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366f1] to-[#14b8a6]">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold">NeuroInbox</span>
            </div>

            <div className="flex gap-8 text-sm text-gray-400">
              <Link href="#" className="transition-colors hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                Terms
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                Contact
              </Link>
            </div>

            <p className="text-sm text-gray-400">© 2025 NeuroInbox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
