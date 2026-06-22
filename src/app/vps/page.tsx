
"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { AiConfigurator } from "@/components/ai/AiConfigurator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, Info, Cpu, Server, HardDrive, Zap } from "lucide-react"

export default function VPSPage() {
  const vpsPlans = [
    { name: "Starter VPS", cpu: "1 Core", ram: "2 GB", storage: "50 GB NVMe", bandwidth: "1 TB", price: "$5.99" },
    { name: "Pro VPS", cpu: "2 Cores", ram: "4 GB", storage: "100 GB NVMe", bandwidth: "2 TB", price: "$12.99" },
    { name: "Elite VPS", cpu: "4 Cores", ram: "8 GB", storage: "200 GB NVMe", bandwidth: "5 TB", price: "$24.99" },
    { name: "Ultimate VPS", cpu: "8 Cores", ram: "16 GB", storage: "400 GB NVMe", bandwidth: "10 TB", price: "$49.99" },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/20 text-primary border-primary/30 py-1.5 px-4 font-bold text-sm">ULTRA FAST NVMe STORAGE</Badge>
              <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">Next-Gen VPS Hosting</h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Full root access, dedicated resources, and instant provisioning. Powered by AMD EPYC processors and ultra-fast NVMe storage.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 font-bold text-lg">Deploy Now</Button>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl border-white/20 hover:bg-white/10 text-white font-bold text-lg">Compare Plans</Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <span className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> Weekly Backups</span>
                <span className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> DDoS Protection</span>
                <span className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> Global Datacenters</span>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4 animate-float">
              {[
                { label: "vCPU Cores", value: "AMD EPYC", icon: Cpu },
                { label: "Storage", value: "PCIe 4.0 NVMe", icon: HardDrive },
                { label: "Port Speed", value: "10 Gbps", icon: Zap },
                { label: "Network", value: "Tier 1 Global", icon: Server },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 space-y-3">
                  <item.icon className="w-8 h-8 text-primary" />
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{item.label}</p>
                  <p className="text-xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-none">AI POWERED PROVISIONING</Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Not sure what specs you need?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our AI Assistant can analyze your project requirements and recommend the perfect VPS configuration in seconds.
            </p>
          </div>
          <AiConfigurator />
        </div>
      </section>

      {/* Traditional Table Comparison */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Standard VPS Instances</h2>
            <p className="text-muted-foreground">Reliable performance for every workload.</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="py-6 px-8 font-bold text-slate-900">Plan</TableHead>
                  <TableHead className="py-6 px-8 font-bold text-slate-900">CPU</TableHead>
                  <TableHead className="py-6 px-8 font-bold text-slate-900">RAM</TableHead>
                  <TableHead className="py-6 px-8 font-bold text-slate-900">Storage</TableHead>
                  <TableHead className="py-6 px-8 font-bold text-slate-900">Bandwidth</TableHead>
                  <TableHead className="py-6 px-8 font-bold text-slate-900 text-right">Pricing</TableHead>
                  <TableHead className="py-6 px-8"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vpsPlans.map((plan, i) => (
                  <TableRow key={i} className="hover:bg-slate-50 transition-colors">
                    <TableCell className="py-8 px-8 font-bold text-lg">{plan.name}</TableCell>
                    <TableCell className="py-8 px-8">{plan.cpu}</TableCell>
                    <TableCell className="py-8 px-8">{plan.ram}</TableCell>
                    <TableCell className="py-8 px-8">{plan.storage}</TableCell>
                    <TableCell className="py-8 px-8 font-medium">{plan.bandwidth}</TableCell>
                    <TableCell className="py-8 px-8 text-right font-bold text-xl text-primary">{plan.price}<span className="text-xs text-muted-foreground">/mo</span></TableCell>
                    <TableCell className="py-8 px-8 text-right">
                      <Button className="rounded-xl shadow-lg shadow-primary/20 bg-primary">Order</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-2 text-muted-foreground text-sm">
            <Info className="w-4 h-4" />
            <span>Prices are exclusive of applicable taxes. Custom configurations available upon request.</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
