"use client"

import { BarChart3, Bot, Calendar, Home, Mail, Settings, Users, Target, Bell, FileText } from 'lucide-react'
import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
{
title: "Dashboard",
url: "/dashboard",
icon: Home,
},
{
title: "Contacts",
url: "/contacts",
icon: Users,
},
{
title: "Deals",
url: "/deals",
icon: Target,
},
{
title: "Calendar",
url: "/calendar",
icon: Calendar,
},
{
title: "Analytics",
url: "/analytics",
icon: BarChart3,
},
{
title: "Messages",
url: "/messages",
icon: Mail,
},
{
title: "Tasks",
url: "/tasks",
icon: FileText,
},
{
title: "Notifications",
url: "/notifications",
icon: Bell,
},
]

export function AppSidebar() {
const pathname = usePathname()

return (
<>
  <style>{`
    :root {
      --sidebar-width: 200px;
    }
  `}</style>
  <Sidebar collapsible="icon" className="border-r border-border/50">
    <SidebarContent className="flex flex-col h-full p-1">
      <div className="flex items-center space-x-2 p-2 h-14">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-foreground group-data-[state=collapsed]:hidden">Crumbly</span>
      </div>

      <div className="flex-grow overflow-y-auto">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname.startsWith(item.url)} className="h-9 text-sm">
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </div>

      <div className="mt-auto p-1">
        <SidebarGroup className="p-0">
          <SidebarMenu className="gap-0.5">
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname.startsWith('/settings')} className="h-9 text-sm">
                <Link href="/settings">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <div className="flex items-center space-x-2 p-2 h-auto">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/avatars/olivia-johnson.png" />
                  <AvatarFallback>OJ</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0 group-data-[state=collapsed]:hidden">
                  <p className="text-sm font-medium text-foreground truncate">Olivia Johnson</p>
                  <p className="text-xs text-muted-foreground truncate">Admin</p>
                </div>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </div>
    </SidebarContent>
  </Sidebar>
</>
)
}
