
"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Globe, MessageCircle, ShieldCheck, Heart } from "lucide-react"

export default function VirtualNumbersPage() {
  const countries = [
    { name: "United States", code: "US", price: "$0.50", flag: "🇺🇸" },
    { name: "United Kingdom", code: "UK", price: "$0.80", flag: "🇬🇧" },
    { name: "Indonesia", code: "ID", price: "$0.30", flag: "🇮🇩" },
    { name: "Germany", code: "DE", price: "$1.20", flag: "🇩🇪" },
    { name: "Japan", code: "JP", price: "$2.50", flag: "🇯🇵" },
    { name: "France", code: "FR", price: "$1.10", flag: "🇫🇷" },
    { name: "Canada", code: "CA", price: "$0.90", flag: "🇨🇦" },
    { name: "Singapore", code: "SG", price: "$1.80", flag: "🇸🇬" },
  ]

  const [searchTerm, setSearchTerm] = React.useState("")
  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
            <Badge className="bg-cyan-500/10 text-cyan-600 border-none font-bold">CONNECT ANYWHERE</Badge>
            <h1 className="text-5xl font-headline font-bold">Global Virtual Numbers</h1>
            <p className="text-xl text-muted-foreground">Get instant SMS verification and international calling capability from 85+ countries.</p>
            
            <div className="relative max-w-2xl mx-auto group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Search for a country..." 
                className="pl-12 h-14 text-lg rounded-2xl border-none shadow-lg focus-visible:ring-4 focus-visible:ring-primary/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCountries.map((country, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
                <CardContent className="p-0">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl">{country.flag}</span>
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-red-50 hover:text-red-500">
                        <Heart className="w-5 h-5" />
                      </Button>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{country.name}</h3>
                      <p className="text-sm text-muted-foreground">Code: +{country.code}</p>
                    </div>
                    <div className="pt-4 border-t flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-muted-foreground uppercase">Starts at</span>
                        <span className="text-xl font-bold text-primary">{country.price}</span>
                      </div>
                      <Button className="rounded-xl shadow-lg shadow-primary/20 bg-primary px-6">
                        Get Number
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white shadow-sm border space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Instant SMS Verification</h3>
              <p className="text-muted-foreground">Receive activation codes for WhatsApp, Telegram, Google, and 500+ other services instantly.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white shadow-sm border space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Privacy First</h3>
              <p className="text-muted-foreground">Protect your real identity by using temporary or permanent virtual numbers for online registrations.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white shadow-sm border space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Global Presence</h3>
              <p className="text-muted-foreground">Establish a local presence in countries across Europe, Asia, and the Americas without physical offices.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
