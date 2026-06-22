
"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Star, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-dashboard")

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-primary/10 text-primary border-none text-sm font-medium animate-fade-in">
            <Zap className="w-4 h-4 mr-2 inline" />
            The Future of Global Infrastructure
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tight text-foreground">
            Powerful Hosting & <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Global Virtual Numbers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get reliable hosting, cloud servers, domains, and international virtual numbers from one trusted platform. Built for developers, startups, and global businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/hosting">
              <Button size="lg" className="h-14 px-8 rounded-2xl text-lg font-semibold shadow-xl shadow-primary/25 bg-primary hover:bg-primary/90">
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl text-lg font-semibold bg-white/50 backdrop-blur-sm">
                View Pricing
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 text-sm font-medium text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-success mr-2" />
              Instant Activation
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-success mr-2" />
              24/7 Premium Support
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-success mr-2" />
              99.9% Uptime Guarantee
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mx-auto max-w-5xl rounded-3xl p-4 bg-white/30 backdrop-blur-sm border border-white/50 shadow-2xl animate-float">
          <div className="rounded-2xl overflow-hidden border border-border shadow-inner relative aspect-[16/9]">
            <Image
              src={heroImage?.imageUrl || "https://picsum.photos/seed/123/1200/800"}
              alt="Dashboard Preview"
              fill
              className="object-cover"
              data-ai-hint="dashboard software"
            />
            
            {/* Overlay stats cards */}
            <div className="absolute top-8 left-8 p-4 glass rounded-2xl shadow-xl space-y-2 max-w-[200px] hidden md:block">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Active Services</p>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold">1,284</span>
                <span className="text-xs text-success font-medium">+12%</span>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 p-4 glass rounded-2xl shadow-xl space-y-2 max-w-[240px] hidden md:block">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs font-semibold">System Online</span>
              </div>
              <p className="text-sm font-medium">Uptime: 99.99%</p>
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[99.99%] bg-success" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
