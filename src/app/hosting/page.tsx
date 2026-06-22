
"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Shield, Zap, Globe, Cpu, Layout, Server, Users } from "lucide-react"

export default function HostingPage() {
  const categories = [
    {
      title: "Shared Hosting",
      description: "Perfect for startups and personal blogs.",
      icon: Server,
      price: "$2.99",
      features: ["1 Website", "10 GB NVMe Storage", "Unmetered Bandwidth", "Free SSL"],
    },
    {
      title: "Business Hosting",
      description: "Optimized for high-performance businesses.",
      icon: Shield,
      price: "$8.99",
      features: ["100 Websites", "100 GB NVMe Storage", "Daily Backups", "Enhanced Security"],
      popular: true,
    },
    {
      title: "Cloud Hosting",
      description: "Enterprise scale with 100% reliability.",
      icon: Globe,
      price: "$19.99",
      features: ["300 Websites", "200 GB NVMe Storage", "Dedicated IP", "24/7 Priority Support"],
    },
    {
      title: "WordPress Hosting",
      description: "Tuned specifically for WordPress speed.",
      icon: Zap,
      price: "$4.99",
      features: ["Managed Updates", "Pre-installed Plugins", "Staging Environment", "Expert WP Support"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-none">PREMIUM WEB HOSTING</Badge>
            <h1 className="text-5xl font-headline font-bold">Choose your hosting plan</h1>
            <p className="text-xl text-muted-foreground">Lightning-fast speeds and enterprise-grade security for any size of project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className={`p-8 rounded-[2rem] bg-white border floating-card flex flex-col relative ${cat.popular ? 'border-primary shadow-2xl scale-105 z-10' : ''}`}>
                {cat.popular && (
                  <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white py-1 px-4">Most Popular</Badge>
                )}
                <div className="mb-6">
                  <cat.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-headline font-bold mb-2">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold">{cat.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <div className="space-y-4 mb-8 flex-grow">
                  {cat.features.map((feature, j) => (
                    <div key={j} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className={`w-full h-12 rounded-xl font-bold ${cat.popular ? 'bg-primary' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  Select Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
