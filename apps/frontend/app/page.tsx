"use client"

import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Sparkles, Zap, Shield, Users, CircleCheckIcon } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/custom/header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import HeroSection from "@/components/custom/HeroSection"
import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CardSpotlight } from "@/components/ui/card-spotlight";
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
  const pricing = [
    {
      type: "Free",
      monthly: {
        original: 50,
        discounted: 0,
      },
      yearly: {
        original: 100 * 12,
        discounted: 0,
      },
      subtitle: "Essential tools to get started",
      features: [
        "Basic inbox search",
        "Limited inbox analytics",
        "Community support",
      ],
    },
    {
      type: "Pro",
      monthly: {
        original: 299,
        discounted: 149,
      },
      yearly: {
        original: 299 * 12,
        discounted: 149 * 12,
      },
      subtitle: "Advanced features for power users",
      features: [
        "Advanced inbox search",
        "Detailed inbox analytics",
        "AI-assisted email writing prompts",
        "Smart email suggestions",
        "Priority support",
      ],
    },
    {
      type: "Business",
      monthly: {
        original: 599,
        discounted: 299,
      },
      yearly: {
        original: 599 * 12,
        discounted: 299 * 12,
      },
      subtitle: "Scalable solutions for teams and businesses",
      features: [
        "Enterprise-grade inbox search",
        "Advanced analytics and reporting",
        "AI-powered email drafting and optimization",
        "Multi-account email management",
        "Team collaboration tools",
        "Dedicated support",
      ],
    },
  ];




  return (
    <div className="min-h-screen w-full background flex flex-col justify-between animated-bg">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <Wrapper sectionid="features">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Everything you need to master email</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60 text-balance">
            Built for professionals who demand intelligence, speed, and seamless integration
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FeatureItems.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl glass-card p-6 smooth-transition cursor-pointer"
            >
              {/* Hover Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <motion.div
                className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </motion.div>

              <h3 className="mb-3 text-xl text-foreground font-bold">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{feature.description}</p>

              {/* Arrow Icon on Hover */}
              <motion.div
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="h-5 w-5 text-foreground/40" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Wrapper>


      {/* Pricing  */}

      <Wrapper sectionid="pricing">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Simple, Transparent Pricing</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60 text-balance">
            Choose the perfect plan for your needs. All plans include 14-day free trial.
          </p>
        </motion.div>

        <Tabs defaultValue="month" className="w-full">
          <TabsList className="mx-auto  p-2">
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>

          {/* Monthly */}
          <TabsContent value="month" className="mt-10">
            <div className="grid gap-6 md:grid-cols-3">
              {pricing.map((plan, index) => {
                const isPopular = index === 1; // center card

                return (
                  <motion.div
                    key={plan.type}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="smooth-transition h-full"
                  >
                    <CardSpotlight
                      className={cn(
                        "relative flex flex-col gap-4 rounded-xl p-6 h-full glass-card",
                        isPopular
                          ? "scale-105 ring-2 ring-primary shadow-2xl"
                          : "ring-1 ring-primary/40 shadow-lg"
                      )}
                    >
                      {isPopular && (
                        <motion.span
                          className="absolute -top-3 -right-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-1.5 text-xs font-semibold text-black shadow-lg"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Most Popular
                        </motion.span>
                      )}

                      <h3 className="text-2xl font-bold">{plan.type}</h3>

                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold gradient-text">
                          ${plan.monthly.discounted}
                        </span>
                        <span
                          className={cn(
                            "text-sm line-through",
                            isPopular
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          )}
                        >
                          ${plan.monthly.original}
                        </span>
                        <span className="text-sm opacity-70">/month</span>
                      </div>

                      <p
                        className={cn(
                          "text-sm",
                          isPopular
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground"
                        )}
                      >
                        {plan.subtitle}
                      </p>

                      <ul className="mt-4 space-y-3 text-sm flex-1">
                        {plan.features.map((f, i) => (
                          <motion.li
                            key={i}
                            className="flex gap-2 items-center"
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <CircleCheckIcon className="text-green-500 flex-shrink-0" size={18} />
                            <span>{f}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <Button
                        variant={isPopular ? "secondary" : "default"}
                        className="w-full mt-4 font-semibold"
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </CardSpotlight>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>

          {/* Yearly */}
          <TabsContent value="year" className="mt-10">
            <div className="grid gap-6 md:grid-cols-3">
              {pricing.map((plan, index) => {
                const isPopular = index === 1;

                return (
                  <motion.div
                    key={plan.type}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="smooth-transition h-full"
                  >
                    <CardSpotlight
                      className={cn(
                        "relative flex flex-col gap-4 rounded-xl p-6 h-full glass-card",
                        isPopular
                          ? "scale-105 ring-2 ring-primary shadow-2xl"
                          : "ring-1 ring-primary/40 shadow-lg"
                      )}
                    >
                      {isPopular && (
                        <motion.span
                          className="absolute -top-3 -right-3 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 px-4 py-1.5 text-xs font-semibold text-black shadow-lg"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Best Value
                        </motion.span>
                      )}

                      <h3 className="text-2xl font-bold">{plan.type}</h3>

                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold gradient-text">
                          ${plan.yearly.discounted}
                        </span>
                        <span
                          className={cn(
                            "text-sm line-through",
                            isPopular
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          )}
                        >
                          ${plan.yearly.original}
                        </span>
                        <span className="text-sm opacity-70">/year</span>
                      </div>

                      <p
                        className={cn(
                          "text-sm",
                          isPopular
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground"
                        )}
                      >
                        {plan.subtitle}
                      </p>

                      <ul className="mt-4 space-y-3 text-sm flex-1">
                        {plan.features.map((f, i) => (
                          <motion.li
                            key={i}
                            className="flex gap-2 items-center"
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <CircleCheckIcon className="text-green-500 flex-shrink-0" size={18} />
                            <span>{f}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <Button
                        variant={isPopular ? "secondary" : "default"}
                        className="w-full mt-4 font-semibold"
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </CardSpotlight>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </Wrapper>



      {/* How it Works Section */}
      <Wrapper sectionid="how-it-works">

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Simple to start. Powerful to master.</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/50 text-balance">
            Get up and running in minutes with our streamlined onboarding
          </p>
        </motion.div>


        <div className="grid gap-8 md:grid-cols-3">
          {workItems.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative glass-card p-8 rounded-xl smooth-transition"
            >
              <motion.div
                className="mb-6 text-6xl font-bold gradient-text"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {step.step}
              </motion.div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">{step.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{step.description}</p>
              {index < 2 && (
                <motion.div
                  className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-primary/50 to-transparent md:block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </Wrapper>


      {/* CTA Section */}
      <Wrapper>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -6 }}
          className="relative overflow-hidden rounded-3xl glass-card p-16 text-center"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/20 via-[#14b8a6]/20 to-[#8b5cf6]/20 mesh-gradient" />

          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#6366f1]/30 to-[#14b8a6]/30 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.h2
              className="mb-4 text-5xl font-bold text-foreground md:text-6xl"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Ready to transform{" "}
              <span className="gradient-text">your inbox?</span>
            </motion.h2>

            <motion.p
              className="mb-10 text-xl text-foreground/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Join thousands of professionals using AI to master their email workflow
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/dashboard">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="secondary" className="btn-glow px-10 py-7 text-lg font-semibold shadow-2xl">
                    Get Started for Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Wrapper>
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

            <div className="flex gap-8 text-sm text-foreground">
              <Link href="#" className="transition-colors hover:text-foreground/40">
                Privacy
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground/40">
                Terms
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground/40">
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

const Wrapper = ({ children, sectionid }: {
  children: ReactNode,
  sectionid?: string
}) => {

  return (
    <section id={sectionid} className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  )
}