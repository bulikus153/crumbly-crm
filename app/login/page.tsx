"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Bot, Eye, EyeOff, Sparkles, Shield, Zap } from 'lucide-react'
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LoginPage() {
const [showPassword, setShowPassword] = useState(false)
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 dark:from-slate-950 dark:via-purple-950/50 dark:to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div className="absolute top-6 right-6">
      <ThemeToggle />
    </div>
    
    <Card className="w-full max-w-md backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500 rounded-3xl">
      <CardHeader className="text-center space-y-6 pb-8">
        <div className="flex items-center justify-center space-x-3 group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105">
              <Bot className="w-6 h-6 text-white" />
            </div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Crumbly</span>
        </div>
        
        <div className="space-y-2">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Welcome back
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-white/70 text-lg">
            Sign in to your AI-powered CRM
          </CardDescription>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center space-x-6 pt-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-white/70">
            <Shield className="w-4 h-4 text-green-500" />
            <span>Secure</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-white/70">
            <Zap className="w-4 h-4 text-purple-500" />
            <span>Fast</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-white/70">
            <Bot className="w-4 h-4 text-blue-500" />
            <span>AI-Powered</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6 px-8 pb-8">
        <Button 
          variant="outline" 
          className="w-full border-2 border-white/20 dark:border-white/10 text-gray-900 dark:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105 py-6 rounded-2xl backdrop-blur-sm group"
        >
          <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </Button>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
          <div className="relative flex justify-center text-sm uppercase">
            <span className="bg-transparent px-4 text-gray-600 dark:text-white/70 font-medium">Or continue with email</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-900 dark:text-white font-medium">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 dark:bg-black/10 border-2 border-white/20 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-white/50 rounded-2xl py-6 px-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-900 dark:text-white font-medium">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 dark:bg-black/10 border-2 border-white/20 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-white/50 rounded-2xl py-6 px-4 pr-12 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-600 dark:text-white/70" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-600 dark:text-white/70" />
                )}
              </Button>
            </div>
            <div className="flex justify-start">
                <Link href="/forgot-password" className="text-sm text-purple-500 hover:text-purple-400 transition-colors duration-300 font-medium">
                    Forgot password?
                </Link>
            </div>
          </div>
        </div>

        <Link href="/dashboard">
          <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 py-6 rounded-2xl text-lg font-medium group">
            Login
            <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </Link>

        <div className="text-center text-gray-600 dark:text-white/70">
          Don't have an account?{" "}
          <Link href="/register" className="text-purple-500 hover:text-purple-400 transition-colors duration-300 font-medium">
            Sign up for free
          </Link>
        </div>
      </CardContent>
    </Card>
  </div>
)
}
