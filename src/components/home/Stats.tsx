
"use client"

import { Server, Users, Globe, Zap } from "lucide-react"

export function Stats() {
  const stats = [
    { label: "Active Servers", value: "25k+", icon: Server, color: "text-primary" },
    { label: "Global Users", value: "150k+", icon: Users, color: "text-secondary" },
    { label: "Countries Served", value: "85+", icon: Globe, color: "text-accent" },
    { label: "Delivery Speed", value: "<1s", icon: Zap, color: "text-success" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3 group cursor-default">
              <div className={`p-4 rounded-2xl bg-muted group-hover:bg-white group-hover:shadow-lg transition-all duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-headline font-bold text-foreground">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
