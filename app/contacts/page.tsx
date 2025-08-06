"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
Table,
TableBody,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "@/components/ui/table"
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/components/ui/select"
import { 
Dialog,
DialogContent,
DialogDescription,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "@/components/ui/dialog"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Search, Filter, Plus, Mail, Phone, MoreHorizontal } from 'lucide-react'

const contacts = [
{
  id: 1,
  name: "John Doe",
  email: "john@techcorp.com",
  company: "TechCorp",
  status: "Hot Lead",
  value: "$15,000",
  region: "North America",
  lastContact: "2 days ago",
  avatar: "/avatars/john-doe.png"
},
{
  id: 2,
  name: "Sarah Wilson",
  email: "sarah@innovate.com",
  company: "Innovate Inc",
  status: "Qualified",
  value: "$8,500",
  region: "Europe",
  lastContact: "1 week ago",
  avatar: "/avatars/sarah-wilson.png"
},
{
  id: 3,
  name: "Mike Chen",
  email: "mike@startup.io",
  company: "Startup.io",
  status: "Cold Lead",
  value: "$3,200",
  region: "Asia",
  lastContact: "3 weeks ago",
  avatar: "/avatars/mike-chen.png"
},
{
  id: 4,
  name: "Emily Rodriguez",
  email: "emily@growth.co",
  company: "Growth Co",
  status: "Proposal Sent",
  value: "$12,000",
  region: "North America",
  lastContact: "5 days ago",
  avatar: "/avatars/emily-rodriguez.png"
}
]

const getStatusColor = (status: string) => {
switch (status) {
  case "Hot Lead": return "bg-red-500/20 text-red-400 border-red-500/30"
  case "Qualified": return "bg-green-500/20 text-green-400 border-green-500/30"
  case "Cold Lead": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
  case "Proposal Sent": return "bg-purple-500/20 text-purple-400 border-purple-500/30"
  default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
}
}

export default function ContactsPage() {
const [searchTerm, setSearchTerm] = useState("")
const [statusFilter, setStatusFilter] = useState("all")
const [selectedContact, setSelectedContact] = useState<typeof contacts[0] | null>(null)

const filteredContacts = contacts.filter(contact => {
  const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       contact.company.toLowerCase().includes(searchTerm.toLowerCase())
  const matchesStatus = statusFilter === "all" || contact.status === statusFilter
  return matchesSearch && matchesStatus
})

return (
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <DashboardHeader />
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Contacts & Leads</h1>
            <p className="text-muted-foreground">Manage your contacts and track lead progress</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            <Plus className="w-4 h-4 mr-2" />
            Add Contact
          </Button>
        </div>

        {/* Filters */}
        <Card className="backdrop-blur-md bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-muted/50 border-border/50"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48 bg-muted/50 border-border/50">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Hot Lead">Hot Lead</SelectItem>
                  <SelectItem value="Qualified">Qualified</SelectItem>
                  <SelectItem value="Cold Lead">Cold Lead</SelectItem>
                  <SelectItem value="Proposal Sent">Proposal Sent</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-border/50">
                Bulk Actions
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contacts Table */}
        <Card className="backdrop-blur-md bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Contacts ({filteredContacts.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Contact</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead>Last Contact</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContacts.map((contact) => (
                  <TableRow key={contact.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={contact.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{contact.name}</p>
                          <p className="text-sm text-muted-foreground">{contact.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-foreground">{contact.company}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(contact.status)}>
                        {contact.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium text-foreground">{contact.value}</TableCell>
                    <TableCell className="text-foreground">{contact.region}</TableCell>
                    <TableCell className="text-muted-foreground">{contact.lastContact}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setSelectedContact(contact)}
                            >
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Contact Details</DialogTitle>
                              <DialogDescription>
                                View and manage contact information
                              </DialogDescription>
                            </DialogHeader>
                            {selectedContact && (
                              <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                  <Avatar className="w-16 h-16">
                                    <AvatarImage src={selectedContact.avatar || "/placeholder.svg"} />
                                    <AvatarFallback>{selectedContact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <h3 className="text-xl font-semibold">{selectedContact.name}</h3>
                                    <p className="text-muted-foreground">{selectedContact.company}</p>
                                    <Badge className={getStatusColor(selectedContact.status)}>
                                      {selectedContact.status}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium">Email</label>
                                    <p className="text-muted-foreground">{selectedContact.email}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Value</label>
                                    <p className="text-muted-foreground">{selectedContact.value}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Region</label>
                                    <p className="text-muted-foreground">{selectedContact.region}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Last Contact</label>
                                    <p className="text-muted-foreground">{selectedContact.lastContact}</p>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">Activity Timeline</h4>
                                  <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-sm">
                                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                      <span>Email sent - Follow up proposal</span>
                                      <span className="text-muted-foreground">2 days ago</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                      <span>Phone call - Initial discussion</span>
                                      <span className="text-muted-foreground">1 week ago</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm">
                                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                      <span>Contact added to CRM</span>
                                      <span className="text-muted-foreground">2 weeks ago</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </SidebarInset>
  </SidebarProvider>
)
}
