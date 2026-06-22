
"use client"

import * as React from "react"
import { configureService, type AiServiceConfiguratorOutput } from "@/ai/flows/ai-service-configurator-flow"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Loader2, Sparkles, Cpu, HardDrive, Zap, Info } from "lucide-react"

export function AiConfigurator() {
  const [description, setDescription] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [recommendation, setRecommendation] = React.useState<AiServiceConfiguratorOutput | null>(null)

  const handleConfigure = async () => {
    if (!description.trim()) return
    setLoading(true)
    try {
      const result = await configureService({ projectDescription: description })
      setRecommendation(result)
    } catch (error) {
      console.error("AI Configuration failed", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <Card className="border-2 border-primary/20 shadow-xl overflow-hidden relative group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Sparkles className="w-24 h-24 text-primary" />
        </div>
        
        <CardHeader className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">AI Powered Assistant</span>
          </div>
          <CardTitle className="text-3xl font-headline font-bold">Smart Infrastructure Configurator</CardTitle>
          <CardDescription className="text-lg">
            Describe your project, expected traffic, and tech stack. Our AI will recommend the perfect configuration for you.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <Textarea 
            placeholder="Example: I'm building a high-traffic e-commerce store using Next.js and PostgreSQL. I expect about 100k visitors monthly and need high availability in the US East region."
            className="min-h-[140px] text-lg rounded-xl border-muted bg-muted/30 focus:bg-white transition-all"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button 
            onClick={handleConfigure} 
            disabled={loading || !description.trim()}
            className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/30"
          >
            {loading ? (
              <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing Requirements...</>
            ) : (
              "Get AI Recommendation"
            )}
          </Button>
        </CardContent>
      </Card>

      {recommendation && (
        <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 border-success/30 shadow-2xl bg-gradient-to-br from-white to-success/5">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge className="bg-success/10 text-success border-none text-xs font-bold px-3 py-1">
                BEST MATCH FOUND
              </Badge>
              <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                <Info className="w-4 h-4" />
                <span>Recommendations based on AI analysis</span>
              </div>
            </div>
            <CardTitle className="text-3xl font-headline flex items-center space-x-3">
              <span>{recommendation.planName || recommendation.recommendationType.replace('_', ' ').toUpperCase()}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="p-6 rounded-2xl bg-white border shadow-sm">
              <h4 className="font-bold text-lg mb-2 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-primary" /> Why this choice?
              </h4>
              <p className="text-muted-foreground leading-relaxed">{recommendation.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {recommendation.cpuCores && (
                <div className="p-4 rounded-xl bg-muted/50 border flex flex-col items-center text-center">
                  <Cpu className="w-6 h-6 text-primary mb-2" />
                  <span className="text-xl font-bold">{recommendation.cpuCores} Cores</span>
                  <span className="text-xs text-muted-foreground uppercase font-semibold">CPU</span>
                </div>
              )}
              {recommendation.ramGb && (
                <div className="p-4 rounded-xl bg-muted/50 border flex flex-col items-center text-center">
                  <Cpu className="w-6 h-6 text-secondary mb-2" />
                  <span className="text-xl font-bold">{recommendation.ramGb} GB</span>
                  <span className="text-xs text-muted-foreground uppercase font-semibold">RAM</span>
                </div>
              )}
              {recommendation.storageGb && (
                <div className="p-4 rounded-xl bg-muted/50 border flex flex-col items-center text-center">
                  <HardDrive className="w-6 h-6 text-accent mb-2" />
                  <span className="text-xl font-bold">{recommendation.storageGb} GB</span>
                  <span className="text-xs text-muted-foreground uppercase font-semibold">SSD/NVMe</span>
                </div>
              )}
              {recommendation.bandwidthTb && (
                <div className="p-4 rounded-xl bg-muted/50 border flex flex-col items-center text-center">
                  <Globe className="w-6 h-6 text-success mb-2" />
                  <span className="text-xl font-bold">{recommendation.bandwidthTb} TB</span>
                  <span className="text-xs text-muted-foreground uppercase font-semibold">Transfer</span>
                </div>
              )}
            </div>

            {recommendation.keyFeatures && (
              <div className="space-y-4">
                <h4 className="font-bold text-lg">Included Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {recommendation.keyFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3 p-3 rounded-xl bg-white border border-success/10">
                      <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                        <Loader2 className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Button size="lg" className="w-full h-14 text-lg font-bold rounded-xl bg-success hover:bg-success/90">
              Provision This Server Now
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
