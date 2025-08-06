"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/components/ui/select"
import {
Tabs,
TabsContent,
TabsList,
TabsTrigger,
} from "@/components/ui/tabs"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { ThemeToggle } from "@/components/theme-toggle"
import { User, Building, Shield, Palette, Bell, Zap, Mail, Slack, Calendar, Database, Save, Upload } from 'lucide-react'

const teamMembers = [
{
  id: 1,
  name: "John Smith",
  email: "john@company.com",
  role: "Admin",
  status: "Active",
  avatar: "/avatars/john-smith.png"
},
{
  id: 2,
  name: "Sarah Wilson",
  email: "sarah@company.com",
  role: "Sales Manager",
  status: "Active",
  avatar: "/avatars/sarah-wilson.png"
},
{
  id: 3,
  name: "Mike Chen",
  email: "mike@company.com",
  role: "Customer Support",
  status: "Active",
  avatar: "/avatars/mike-chen.png"
}
]

const integrations = [
{
  name: "Google Workspace",
  description: "Sync emails, calendar, and contacts",
  icon: Mail,
  connected: true,
  color: "text-blue-500"
},
{
  name: "Slack",
  description: "Get notifications and updates in Slack",
  icon: Slack,
  connected: false,
  color: "text-purple-500"
},
{
  name: "Google Calendar",
  description: "Sync meetings and events",
  icon: Calendar,
  connected: true,
  color: "text-green-500"
},
{
  name: "Database Backup",
  description: "Automated daily backups",
  icon: Database,
  connected: true,
  color: "text-orange-500"
}
]

export default function SettingsPage() {
const [notifications, setNotifications] = useState({
  email: true,
  push: true,
  ai: true,
  marketing: false
})

return (
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <DashboardHeader />
      <div className="p-4 space-y-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your account and application preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-fit">
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="company" className="flex items-center space-x-2">
              <Building className="w-4 h-4" />
              <span className="hidden sm:inline">Company</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Team</span>
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center space-x-2">
              <Palette className="w-4 h-4" />
              <span className="hidden sm:inline">Preferences</span>
            </TabsTrigger>
            <TabsTrigger value="integrations" className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Integrations</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Profile Information</CardTitle>
                <CardDescription>Update your personal information and profile settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/avatars/olivia-johnson.png" />
                    <AvatarFallback className="text-2xl">OJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" className="border-border/50">
                      <Upload className="w-4 h-4 mr-2" />
                      Change Photo
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      JPG, PNG or GIF. Max size 2MB.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Olivia" className="bg-muted/50 border-border/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Johnson" className="bg-muted/50 border-border/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="olivia@company.com" className="bg-muted/50 border-border/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" className="bg-muted/50 border-border/50" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Tell us about yourself..."
                    className="bg-muted/50 border-border/50"
                    defaultValue="Sales Director with 8+ years of experience in B2B software sales. Passionate about building relationships and driving revenue growth."
                  />
                </div>
                
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="company" className="space-y-6">
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Company Information</CardTitle>
                <CardDescription>Manage your company details and settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" defaultValue="Acme Corporation" className="bg-muted/50 border-border/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select defaultValue="technology">
                      <SelectTrigger className="bg-muted/50 border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="https://acme.com" className="bg-muted/50 border-border/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employees">Number of Employees</Label>
                    <Select defaultValue="50-100">
                      <SelectTrigger className="bg-muted/50 border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10</SelectItem>
                        <SelectItem value="11-50">11-50</SelectItem>
                        <SelectItem value="50-100">50-100</SelectItem>
                        <SelectItem value="100-500">100-500</SelectItem>
                        <SelectItem value="500+">500+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea 
                    id="address" 
                    placeholder="Company address..."
                    className="bg-muted/50 border-border/50"
                    defaultValue="123 Business Ave, Suite 100, San Francisco, CA 94105"
                  />
                </div>
                
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-foreground">Team Members</CardTitle>
                    <CardDescription>Manage roles and permissions for your team</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Invite Member
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border/50">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-foreground">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={member.role === 'Admin' ? 'default' : 'secondary'}>
                          {member.role}
                        </Badge>
                        <Badge variant="outline" className="text-green-500 border-green-500/30">
                          {member.status}
                        </Badge>
                        <Button variant="outline" size="sm" className="border-border/50">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Appearance</CardTitle>
                <CardDescription>Customize the look and feel of your application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Theme</Label>
                    <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
                  </div>
                  <ThemeToggle />
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Notifications</CardTitle>
                <CardDescription>Configure how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch 
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive push notifications in browser</p>
                  </div>
                  <Switch 
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">AI Suggestions</Label>
                    <p className="text-sm text-muted-foreground">Get AI-powered insights and recommendations</p>
                  </div>
                  <Switch 
                    checked={notifications.ai}
                    onCheckedChange={(checked) => setNotifications({...notifications, ai: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Marketing Updates</Label>
                    <p className="text-sm text-muted-foreground">Receive product updates and marketing emails</p>
                  </div>
                  <Switch 
                    checked={notifications.marketing}
                    onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Integrations</CardTitle>
                <CardDescription>Connect Crumbly with your favorite tools and services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border/50">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg bg-muted/20 ${integration.color}`}>
                          <integration.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{integration.name}</h3>
                          <p className="text-sm text-muted-foreground">{integration.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {integration.connected ? (
                          <>
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                              Connected
                            </Badge>
                            <Button variant="outline" size="sm" className="border-border/50">
                              Configure
                            </Button>
                          </>
                        ) : (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-border/50 hover:bg-purple-500/10"
                          >
                            Connect
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  </SidebarProvider>
)
}
