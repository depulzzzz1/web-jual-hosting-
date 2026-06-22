
"use client"

import Link from "next/link"
import { Globe, Twitter, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const categories = [
    {
      title: "Solutions",
      links: [
        { name: "Shared Hosting", href: "/hosting" },
        { name: "VPS Hosting", href: "/vps" },
        { name: "Cloud Servers", href: "/hosting" },
        { name: "Game Hosting", href: "/hosting" },
      ],
    },
    {
      title: "Connectivity",
      links: [
        { name: "Virtual Numbers", href: "/virtual-numbers" },
        { name: "SMS Verification", href: "/virtual-numbers" },
        { name: "API Access", href: "/api" },
        { name: "International Rates", href: "/pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Uptime SLA", href: "/sla" },
      ],
    },
  ]

  return (
    <footer className="bg-slate-900 text-slate-300 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span className="font-headline font-bold text-xl tracking-tight text-white">
                DEP HOST<span className="text-primary"> GLOBAL</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Providing next-generation cloud infrastructure and global connectivity for businesses that demand excellence. Reliable, fast, and scalable.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {categories.map((cat, i) => (
            <div key={i} className="space-y-6">
              <h4 className="font-headline font-bold text-white uppercase tracking-wider text-sm">{cat.title}</h4>
              <ul className="space-y-4">
                {cat.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <p>© 2026 DEP HOST GLOBAL Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-success mr-2" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
