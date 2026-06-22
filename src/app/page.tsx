
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/home/Hero"
import { Stats } from "@/components/home/Stats"
import { Footer } from "@/components/layout/Footer"
import { AiConfigurator } from "@/components/ai/AiConfigurator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Server, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  Search,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  const features = [
    {
      title: "Global Hosting",
      description: "Enterprise-grade hosting from shared to dedicated servers.",
      icon: Server,
      color: "bg-indigo-500/10 text-indigo-500",
    },
    {
      title: "International Virtual Numbers",
      description: "Acquire numbers from 85+ countries with instant activation.",
      icon: Globe,
      color: "bg-cyan-500/10 text-cyan-500",
    },
    {
      title: "Scalable VPS",
      description: "Customize your resources and scale effortlessly as you grow.",
      icon: Cpu,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      title: "SSL Protection",
      description: "Keep your data secure with premium SSL certificates.",
      icon: ShieldCheck,
      color: "bg-emerald-500/10 text-emerald-500",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />

      {/* Main Features Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">One Platform, Endless Possibilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to build, scale, and connect your business globally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border floating-card space-y-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <Link href="#" className="inline-flex items-center text-primary font-bold text-sm hover:underline">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Configurator Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-none mb-4 font-bold">SMART CONFIGURATION</Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Unsure which plan fits? Let AI decide.</h2>
          </div>
          <AiConfigurator />
        </div>
      </section>

      {/* Domain Search UI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] translate-y-1/2 translate-x-1/2" />
            
            <div className="max-w-3xl space-y-8 relative z-10">
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">Secure your perfect domain name today</h2>
              <p className="text-primary-foreground/80 text-lg">
                Choose from hundreds of extensions and get your business online in seconds.
              </p>
              
              <div className="relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <input 
                  type="text" 
                  placeholder="findyourdomain.com"
                  className="w-full h-18 py-6 pl-16 pr-44 rounded-2xl text-lg font-medium text-foreground bg-white border-none shadow-xl focus:ring-4 focus:ring-primary/20 transition-all outline-none"
                />
                <Button className="absolute right-3 top-3 bottom-3 px-8 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all">
                  Search
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 font-bold text-sm">.com - $9.99</div>
                <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 font-bold text-sm">.online - $1.99</div>
                <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 font-bold text-sm">.store - $4.99</div>
                <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 font-bold text-sm">.id - $12.50</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">Ready to launch globally?</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Join 150,000+ businesses worldwide using DEP HOST GLOBAL for their mission-critical infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-10 rounded-2xl text-lg font-bold shadow-xl shadow-primary/30">
              Create Free Account
            </Button>
            <Button size="lg" variant="ghost" className="h-14 px-10 rounded-2xl text-lg font-bold">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
