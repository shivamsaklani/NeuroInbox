"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import * as motion from "motion/react-client";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 animated-bg">
      {/* Mesh Gradient Background */}
      <div className="mesh-gradient" />

      {/* Floating Particles */}
      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />

      {/* Top Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 text-sm font-medium"
          >
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Zap className="h-4 w-4 text-[#6366f1]" fill="#6366f1" />
            </motion.div>
            <span className="bg-gradient-to-r from-[#6366f1] to-[#14b8a6] bg-clip-text text-transparent font-semibold">
              AI-Powered Email Revolution
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="mb-6 text-6xl font-bold leading-tight text-balance md:text-8xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Master Your{" "}
            <span className="gradient-text">
              Inbox
            </span>
            <br />
            With AI Intelligence
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-balance text-foreground/70 md:text-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Transform your email workflow with cutting-edge AI automation and MCP protocol integration.
            Manage multiple accounts seamlessly while AI handles the complexity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/dashboard">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="secondary" className="btn-glow group px-8 py-6 text-lg font-semibold shadow-2xl">
                  Start Building Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </Link>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="default" className="glass-card px-8 py-6 text-lg font-semibold">
                <Sparkles className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">10K+</div>
              <div className="text-sm text-foreground/60 mt-2">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">99.9%</div>
              <div className="text-sm text-foreground/60 mt-2">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">50M+</div>
              <div className="text-sm text-foreground/60 mt-2">Emails Processed</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image/Dashboard Preview */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative mt-24"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent blur-3xl" />

          {/* Preview Card */}
          <motion.div
            className="overflow-hidden rounded-2xl glass-card p-3 shadow-2xl scale-hover"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="aspect-video rounded-xl bg-gradient-to-br from-[#1a1a2e] via-[#2d2d44] to-[#1a1a2e] relative overflow-hidden">
              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

              {/* Centered Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#6366f1]/30 to-[#14b8a6]/30 rounded-full blur-3xl" />

              {/* Mock UI Elements */}
              <div className="absolute inset-0 p-8 flex flex-col gap-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <motion.div
                  className="h-12 bg-white/5 rounded-lg backdrop-blur-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="grid grid-cols-3 gap-4 flex-1">
                  <motion.div
                    className="bg-white/5 rounded-lg backdrop-blur-sm"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="col-span-2 bg-white/5 rounded-lg backdrop-blur-sm"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;