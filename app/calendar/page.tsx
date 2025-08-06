"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { CalendarIcon, Clock, Plus, ChevronLeft, ChevronRight, Video, Phone, MapPin } from 'lucide-react'

const tasks = [
{
  id: 1,
  title: "Follow up with TechCorp",
  type: "Call",
  time: "10:00 AM",
  duration: "30 min",
  priority: "High",
  assignee: "John Smith",
  avatar: "/avatars/john-smith.png"
},
{
  id: 2,
  title: "Proposal review meeting",
  type: "Meeting",
  time: "2:00 PM",
  duration: "1 hour",
  priority: "Medium",
  assignee: "Sarah Wilson",
  avatar: "/avatars/sarah-wilson.png"
},
{
  id: 3,
  title: "Demo preparation",
  type: "Task",
  time: "4:00 PM",
  duration: "45 min",
  priority: "Low",
  assignee: "Mike Chen",
  avatar: "/avatars/mike-chen.png"
}
]

const meetings = [
{
  id: 1,
  title: "Client Discovery Call",
  client: "TechCorp",
  time: "9:00 AM - 10:00 AM",
  type: "video",
  attendees: 3
},
{
  id: 2,
  title: "Team Standup",
  client: "Internal",
  time: "11:00 AM - 11:30 AM",
  type: "meeting",
  attendees: 8
},
{
  id: 3,
  title: "Product Demo",
  client: "Innovate Inc",
  time: "3:00 PM - 4:00 PM",
  type: "video",
  attendees: 5
}
]

const getPriorityColor = (priority: string) => {
switch (priority) {
  case "High": return "bg-red-500/20 text-red-400 border-red-500/30"
  case "Medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
  case "Low": return "bg-green-500/20 text-green-400 border-green-500/30"
  default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
}
}

export default function CalendarPage() {
const [currentDate, setCurrentDate] = useState(new Date())
const [view, setView] = useState<'day' | 'week' | 'month'>('day')

return (
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <DashboardHeader />
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Calendar & Tasks</h1>
            <p className="text-muted-foreground">Manage your schedule and track tasks</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar View */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calendar Header */}
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <h2 className="text-xl font-semibold text-foreground">
                      {currentDate.toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric',
                        year: 'numeric' 
                      })}
                    </h2>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant={view === 'day' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setView('day')}
                    >
                      Day
                    </Button>
                    <Button 
                      variant={view === 'week' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setView('week')}
                    >
                      Week
                    </Button>
                    <Button 
                      variant={view === 'month' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setView('month')}
                    >
                      Month
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Today's Schedule */}
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {meetings.map((meeting) => (
                  <div key={meeting.id} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/20 border border-border/50">
                    <div className="flex-shrink-0">
                      {meeting.type === 'video' ? (
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <Video className="w-5 h-5 text-blue-400" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-purple-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{meeting.title}</h3>
                      <p className="text-sm text-muted-foreground">{meeting.client}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{meeting.time}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {meeting.attendees} attendees
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Join
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Tasks Sidebar */}
          <div className="space-y-6">
            {/* My Tasks */}
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">My Tasks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {tasks.map((task) => (
                  <div key={task.id} className="p-3 rounded-lg bg-muted/20 border border-border/50">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm text-foreground">{task.title}</h4>
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                      <Clock className="w-3 h-3" />
                      <span>{task.time}</span>
                      <span>•</span>
                      <span>{task.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={task.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="text-xs">
                            {task.assignee.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">{task.assignee}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                        Complete
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Team Tasks */}
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Team Tasks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg bg-muted/20 border border-border/50">
                  <h4 className="font-medium text-sm text-foreground mb-2">Prepare Q4 Report</h4>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                    <CalendarIcon className="w-3 h-3" />
                    <span>Due: Dec 20, 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-1">
                      <Avatar className="w-6 h-6 border-2 border-background">
                        <AvatarImage src="/avatars/john-smith.png" />
                        <AvatarFallback className="text-xs">JS</AvatarFallback>
                      </Avatar>
                      <Avatar className="w-6 h-6 border-2 border-background">
                        <AvatarImage src="/avatars/sarah-wilson.png" />
                        <AvatarFallback className="text-xs">SW</AvatarFallback>
                      </Avatar>
                    </div>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                      In Progress
                    </Badge>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-muted/20 border border-border/50">
                  <h4 className="font-medium text-sm text-foreground mb-2">Update CRM Database</h4>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                    <CalendarIcon className="w-3 h-3" />
                    <span>Due: Dec 18, 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="/avatars/mike-chen.png" />
                      <AvatarFallback className="text-xs">MC</AvatarFallback>
                    </Avatar>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Completed
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Add */}
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Add</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start border-border/50">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button variant="outline" className="w-full justify-start border-border/50">
                  <Phone className="w-4 h-4 mr-2" />
                  Add Call
                </Button>
                <Button variant="outline" className="w-full justify-start border-border/50">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Task
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
)
}
