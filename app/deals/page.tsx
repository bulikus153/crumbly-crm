"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
Dialog,
DialogContent,
DialogDescription,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { Plus, DollarSign, Calendar, User } from 'lucide-react'

const deals = [
{
  id: 1,
  title: "Enterprise Software License",
  company: "TechCorp",
  value: "$15,000",
  stage: "proposal",
  assignee: "John Smith",
  dueDate: "Dec 15, 2024",
  avatar: "/avatars/john-smith.png"
},
{
  id: 2,
  title: "Marketing Automation Setup",
  company: "Innovate Inc",
  value: "$8,500",
  stage: "negotiation",
  assignee: "Sarah Wilson",
  dueDate: "Dec 20, 2024",
  avatar: "/avatars/sarah-wilson.png"
},
{
  id: 3,
  title: "Cloud Migration Project",
  company: "Growth Co",
  value: "$25,000",
  stage: "qualified",
  assignee: "Mike Chen",
  dueDate: "Jan 10, 2025",
  avatar: "/avatars/mike-chen.png"
},
{
  id: 4,
  title: "CRM Integration",
  company: "Startup.io",
  value: "$3,200",
  stage: "discovery",
  assignee: "Emily Rodriguez",
  dueDate: "Dec 30, 2024",
  avatar: "/avatars/emily-rodriguez.png"
},
{
  id: 5,
  title: "Data Analytics Platform",
  company: "DataCorp",
  value: "$18,000",
  stage: "closed-won",
  assignee: "Alex Johnson",
  dueDate: "Dec 5, 2024",
  avatar: "/avatars/alex-johnson.png"
}
]

const stages = [
{ id: "discovery", title: "Discovery", color: "bg-blue-500" },
{ id: "qualified", title: "Qualified", color: "bg-yellow-500" },
{ id: "proposal", title: "Proposal", color: "bg-purple-500" },
{ id: "negotiation", title: "Negotiation", color: "bg-orange-500" },
{ id: "closed-won", title: "Closed Won", color: "bg-green-500" },
{ id: "closed-lost", title: "Closed Lost", color: "bg-red-500" }
]

export default function DealsPage() {
const [selectedDeal, setSelectedDeal] = useState<typeof deals[0] | null>(null)
const [isAddingDeal, setIsAddingDeal] = useState(false)

const getDealsByStage = (stageId: string) => {
  return deals.filter(deal => deal.stage === stageId)
}

const getTotalValue = (stageId: string) => {
  return getDealsByStage(stageId).reduce((total, deal) => {
    return total + parseInt(deal.value.replace(/[$,]/g, ''))
  }, 0)
}

return (
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <DashboardHeader />
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Deals & Opportunities</h1>
            <p className="text-muted-foreground">Track your sales pipeline and manage deals</p>
          </div>
          <Dialog open={isAddingDeal} onOpenChange={setIsAddingDeal}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Plus className="w-4 h-4 mr-2" />
                Add Deal
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Deal</DialogTitle>
                <DialogDescription>
                  Create a new deal opportunity
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="deal-title">Deal Title</Label>
                  <Input id="deal-title" placeholder="Enter deal title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Company name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="value">Deal Value</Label>
                    <Input id="value" placeholder="$0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stage">Stage</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select stage" />
                      </SelectTrigger>
                      <SelectContent>
                        {stages.map((stage) => (
                          <SelectItem key={stage.id} value={stage.id}>
                            {stage.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assignee">Assignee</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select assignee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Smith</SelectItem>
                      <SelectItem value="sarah">Sarah Wilson</SelectItem>
                      <SelectItem value="mike">Mike Chen</SelectItem>
                      <SelectItem value="emily">Emily Rodriguez</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Add any notes about this deal" />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsAddingDeal(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Create Deal
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Pipeline Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stages.map((stage) => (
            <Card key={stage.id} className="backdrop-blur-md bg-card/50 border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                  <h3 className="font-medium text-sm text-foreground">{stage.title}</h3>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {getDealsByStage(stage.id).length}
                </p>
                <p className="text-sm text-muted-foreground">
                  ${getTotalValue(stage.id).toLocaleString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 min-h-[600px]">
          {stages.map((stage) => (
            <div key={stage.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                  <h3 className="font-semibold text-foreground">{stage.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {getDealsByStage(stage.id).length}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                {getDealsByStage(stage.id).map((deal) => (
                  <Dialog key={deal.id}>
                    <DialogTrigger asChild>
                      <Card 
                        className="backdrop-blur-md bg-card/50 border-border/50 cursor-pointer hover:bg-card/70 transition-colors"
                        onClick={() => setSelectedDeal(deal)}
                      >
                        <CardContent className="p-4">
                          <h4 className="font-medium text-foreground mb-2 text-sm">
                            {deal.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-3">
                            {deal.company}
                          </p>
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-1">
                              <DollarSign className="w-3 h-3" />
                              <span className="font-medium text-foreground">{deal.value}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{deal.dueDate}</span>
                            </div>
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={deal.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="text-xs">
                                {deal.assignee.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Deal Details</DialogTitle>
                        <DialogDescription>
                          View and manage deal information
                        </DialogDescription>
                      </DialogHeader>
                      {selectedDeal && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium">Deal Title</label>
                              <p className="text-lg font-semibold">{selectedDeal.title}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Company</label>
                              <p className="text-muted-foreground">{selectedDeal.company}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Value</label>
                              <p className="text-2xl font-bold text-green-500">{selectedDeal.value}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Stage</label>
                              <Badge className={`${stages.find(s => s.id === selectedDeal.stage)?.color} text-white`}>
                                {stages.find(s => s.id === selectedDeal.stage)?.title}
                              </Badge>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Assignee</label>
                              <div className="flex items-center space-x-2">
                                <Avatar className="w-8 h-8">
                                  <AvatarImage src={selectedDeal.avatar || "/placeholder.svg"} />
                                  <AvatarFallback>
                                    {selectedDeal.assignee.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <span>{selectedDeal.assignee}</span>
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Due Date</label>
                              <p className="text-muted-foreground">{selectedDeal.dueDate}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Recent Activity</h4>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2 text-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>Proposal sent to client</span>
                                <span className="text-muted-foreground">2 days ago</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span>Discovery call completed</span>
                                <span className="text-muted-foreground">1 week ago</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span>Deal created</span>
                                <span className="text-muted-foreground">2 weeks ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline">Edit Deal</Button>
                            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                              Update Stage
                            </Button>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
)
}
