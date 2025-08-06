"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Bot, Bell, AlertTriangle, CheckCircle, Info, Mail, Phone, Calendar, Filter, BookMarkedIcon as MarkAsUnread } from 'lucide-react'

const notifications = [
  {
    id: 1,
    type: "ai",
    title: "AI Suggestion: High-value lead detected",
    message: "John Doe from TechCorp shows strong buying signals. Recommend immediate follow-up.",
    time: "5 minutes ago",
    read: false,
    priority: "high",
    icon: Bot,
    color: "text-purple-500"
  },
  {
    id: 2,
    type: "system",
    title: "Deal moved to Negotiation",
    message: "Enterprise Software License deal has been moved to negotiation stage.",
    time: "1 hour ago",
    read: false,
    priority: "medium",
    icon: CheckCircle,
    color: "text-green-500"
  },
  {
    id: 3,
    type: "user",
    title: "New email from Sarah Wilson",
    message: "Re: Marketing Automation Setup - Please review the updated proposal.",
    time: "2 hours ago",
    read: true,
    priority: "medium",
    icon: Mail,
    color: "text-blue-500"
  },
  {
    id: 4,
    type: "ai",
    title: "AI Insight: Optimal contact time",
    message: "Best time to contact Mike Chen is between 2-4 PM PST based on response patterns.",
    time: "3 hours ago",
    read: true,
    priority: "low",
    icon: Bot,
    color: "text-purple-500"
  },
  {
    id: 5,
    type: "system",
    title: "Reminder: Follow-up call scheduled",
    message: "Follow-up call with TechCorp is scheduled for tomorrow at 10:00 AM.",
    time: "4 hours ago",
    read: false,
    priority: "high",
    icon: Phone,
    color: "text-orange-500"
  },
  {
    id: 6,
    type: "error",
    title: "Integration sync failed",
    message: "Google Calendar sync encountered an error. Please check your connection.",
    time: "6 hours ago",
    read: true,
    priority: "high",
    icon: AlertTriangle,
    color: "text-red-500"
  },
  {
    id: 7,
    type: "ai",
    title: "Weekly AI Report Ready",
    message: "Your weekly performance insights and recommendations are now available.",
    time: "1 day ago",
    read: true,
    priority: "low",
    icon: Bot,
    color: "text-purple-500"
  },
  {
    id: 8,
    type: "user",
    title: "Task completed by team member",
    message: "Emily Rodriguez completed 'Update CRM Database' task.",
    time: "1 day ago",
    read: true,
    priority: "low",
    icon: CheckCircle,
    color: "text-green-500"
  }
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "bg-red-500/20 text-red-400 border-red-500/30"
    case "medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    case "low": return "bg-green-500/20 text-green-400 border-green-500/30"
    default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case "ai": return Bot
    case "system": return Info
    case "user": return Bell
    case "error": return AlertTriangle
    default: return Bell
  }
}

export default function NotificationsPage() {
  const [filter, setFilter] = useState("all")
  const [showUnreadOnly, setShowUnreadOnly] = useState(false)

  const filteredNotifications = notifications.filter(notification => {
    const matchesType = filter === "all" || notification.type === filter
    const matchesRead = !showUnreadOnly || !notification.read
    return matchesType && matchesRead
  })

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
              <p className="text-muted-foreground">
                Stay updated with AI suggestions, system alerts, and team activities
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">
                {unreadCount} unread
              </Badge>
              <Button variant="outline" size="sm">
                Mark all as read
              </Button>
            </div>
          </div>

          {/* Filters */}
          <Card className="backdrop-blur-md bg-card/50 border-border/50">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex items-center space-x-4">
                  <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger className="w-48 bg-muted/50 border-border/50">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="ai">AI Suggestions</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                      <SelectItem value="user">User Activity</SelectItem>
                      <SelectItem value="error">Errors</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button
                    variant={showUnreadOnly ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowUnreadOnly(!showUnreadOnly)}
                    className="border-border/50"
                  >
                    <MarkAsUnread className="w-4 h-4 mr-2" />
                    Unread Only
                  </Button>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>Showing {filteredNotifications.length} notifications</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications List */}
          <div className="space-y-3">
            {filteredNotifications.map((notification) => {
              const IconComponent = notification.icon
              return (
                <Card 
                  key={notification.id} 
                  className={`backdrop-blur-md bg-card/50 border-border/50 transition-all hover:bg-card/70 ${
                    !notification.read ? 'border-l-4 border-l-purple-500' : ''
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg bg-muted/20 ${notification.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className={`font-medium text-foreground ${!notification.read ? 'font-semibold' : ''}`}>
                            {notification.title}
                          </h3>
                          <div className="flex items-center space-x-2 ml-4">
                            <Badge className={getPriorityColor(notification.priority)}>
                              {notification.priority}
                            </Badge>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-2">
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {notification.time}
                          </span>
                          
                          <div className="flex items-center space-x-2">
                            {notification.type === "ai" && (
                              <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                                View Details
                              </Button>
                            )}
                            {!notification.read && (
                              <Button variant="ghost" size="sm" className="text-xs">
                                Mark as read
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredNotifications.length === 0 && (
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardContent className="p-12 text-center">
                <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No notifications found</h3>
                <p className="text-muted-foreground">
                  {showUnreadOnly 
                    ? "You're all caught up! No unread notifications." 
                    : "Try adjusting your filters to see more notifications."
                  }
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
