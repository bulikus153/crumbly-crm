import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, BarChart3, Users, Zap, Star, Play, CheckCircle, Sparkles, Brain, Shield, Rocket, PlayCircle } from 'lucide-react'
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 dark:from-slate-950 dark:via-purple-950/50 dark:to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-white/20 dark:border-white/10 shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Crumbly</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 dark:text-white/80 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-medium relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#how-it-works" className="text-gray-700 dark:text-white/80 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-medium relative group">
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#testimonials" className="text-gray-700 dark:text-white/80 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-medium relative group">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <ThemeToggle />
              <Link href="/login">
                <Button variant="ghost" className="text-gray-900 dark:text-white hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AI-Powered CRM Revolution</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
                  Smart CRM with AI that
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  actually helps
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-white/70 max-w-2xl leading-relaxed">
                Transform your sales process with next-generation AI automation, predictive insights, and seamless team collaboration. Built for the future of business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 text-lg px-8 py-6 rounded-2xl group">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-purple-200 dark:border-purple-800 text-gray-900 dark:text-white hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-105 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm group">
                  <PlayCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 pt-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white dark:border-gray-900 flex items-center justify-center text-white font-semibold text-sm">
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Trusted by 10,000+ businesses</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 dark:text-white/70 ml-2">4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse"></div>
              <Card className="relative backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 p-8 rounded-3xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 group">
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-200"></div>
                </div>
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XFS1NB8EDfcDjdMOfbI03WWNlLO0vd.png"
                  alt="Crumbly CRM Dashboard" 
                  width={1200}
                  height={780}
                  className="w-full rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
                  Live Demo
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 px-4 py-2 text-sm font-medium">
              <Brain className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Everything you need to
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                grow your business
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              Next-generation features designed to streamline your sales process and boost productivity with AI-driven insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "AI Assistant",
                description: "Get intelligent suggestions, automate tasks, and receive predictive insights to close more deals.",
                color: "from-purple-500 to-pink-500",
                delay: "delay-0"
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Track performance with real-time dashboards, conversion metrics, and revenue forecasting.",
                color: "from-blue-500 to-cyan-500",
                delay: "delay-100"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Seamless role-based access for admins, sales managers, and customer support teams.",
                color: "from-green-500 to-emerald-500",
                delay: "delay-200"
              },
              {
                icon: Zap,
                title: "Smart Automation",
                description: "Automate follow-ups, lead scoring, and task assignments to save time and increase efficiency.",
                color: "from-yellow-500 to-orange-500",
                delay: "delay-300"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security with end-to-end encryption and compliance with industry standards.",
                color: "from-red-500 to-pink-500",
                delay: "delay-400"
              },
              {
                icon: Rocket,
                title: "Lightning Fast",
                description: "Optimized performance with sub-second load times and real-time synchronization.",
                color: "from-indigo-500 to-purple-500",
                delay: "delay-500"
              }
            ].map((feature, index) => (
              <Card key={index} className={`group backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 p-8 rounded-3xl hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${feature.delay} animate-fade-in-up cursor-pointer`}>
                <CardContent className="p-0 space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-white/70 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                How Crumbly
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                transforms your workflow
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              Get started in minutes with our intuitive AI-powered setup process
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {[
              {
                step: "01",
                title: "Import & Analyze",
                description: "AI automatically imports and analyzes your existing data, identifying patterns and opportunities."
              },
              {
                step: "02",
                title: "Smart Setup",
                description: "Our AI customizes your pipeline and workflows based on your business model and industry."
              },
              {
                step: "03",
                title: "Scale & Grow",
                description: "Get AI-powered insights and recommendations to close more deals and grow faster."
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-2xl shadow-purple-500/25 group-hover:shadow-purple-500/40 group-hover:scale-110 transition-all duration-500">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600 dark:text-white/70 leading-relaxed max-w-sm mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Trusted by
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                growing businesses
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Sales Director, TechCorp",
                content: "Crumbly's AI suggestions helped us increase our conversion rate by 40%. The insights are incredibly accurate and actionable.",
                avatar: "/avatars/sarah-johnson.png",
                rating: 5,
                company: "TechCorp"
              },
              {
                name: "Mike Chen",
                role: "CEO, StartupXYZ",
                content: "The best CRM we've used. The 2025 design is beautiful and the AI functionality is game-changing for our sales team.",
                avatar: "/avatars/mike-chen.png",
                rating: 5,
                company: "StartupXYZ"
              },
              {
                name: "Emily Rodriguez",
                role: "Operations Manager, GrowthCo",
                content: "Team collaboration features are amazing. Everyone stays on the same page effortlessly with real-time AI insights.",
                avatar: "/avatars/emily-rodriguez.png",
                rating: 5,
                company: "GrowthCo"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="group backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 p-8 rounded-3xl hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16 rounded-2xl">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-gray-600 dark:text-white/70 text-sm">{testimonial.role}</p>
                      <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-white/80 leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20">
                      Verified Customer
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 p-16 rounded-3xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500">
            <CardContent className="p-0 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-green-500 animate-pulse" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Limited Time Offer</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Ready to transform
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  your sales process?
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
                Join thousands of businesses already using Crumbly to grow faster with AI-powered insights
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 text-lg px-10 py-6 rounded-2xl group">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-purple-200 dark:border-purple-800 text-gray-900 dark:text-white hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-105 text-lg px-10 py-6 rounded-2xl backdrop-blur-sm">
                  Request Demo
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 pt-8 text-sm text-gray-600 dark:text-white/70">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 backdrop-blur-xl bg-white/5 dark:bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Crumbly</span>
            </div>
            <div className="flex space-x-8 text-gray-600 dark:text-white/70">
              <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-medium">Privacy</a>
              <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-medium">Terms</a>
              <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-medium">Support</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-600 dark:text-white/70">
              &copy; 2025 Crumbly. All rights reserved. Built with ❤️ for the future of business.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
