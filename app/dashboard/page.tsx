import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TrendingUp, Users, Target, Bot, Mail, CheckCircle, UserPlus, AlertTriangle, Plus, FileText, Send, Upload } from 'lucide-react'
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { SalesTrendChart } from "@/components/sales-trend-chart"

export default async function DashboardPage() {
  const supabase = createClient()

  const { data: kpiData } = await supabase.rpc('get_dashboard_kpis').single()
  const { data: recentActivity } = await supabase
    .from('notifications')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(4)
  const { data: salesTrend } = await supabase.rpc('get_monthly_sales_trend')

  const { data: user } = await supabase.from('users').select('name').eq('email', 'olivia@company.com').single()

  const formatCurrency = (amount: number | null | undefined) => {
    if (amount === null || amount === undefined) return '$0.00'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="p-4 space-y-4">
          {/* Welcome Section */}
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, {user?.name?.split(' ')[0] || 'User'}!</h1>
              <p className="text-muted-foreground">Here's your business summary for today.</p>
            </div>

            {/* AI Suggestions */}
            <Card className="backdrop-blur-md bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/avatars/bot.png" />
                    <AvatarFallback className="bg-purple-500">
                      <Bot className="w-5 h-5 text-white" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">AI Suggestions for you</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      You have 3 high-value leads waiting. Prioritize contacting{" "}
                      <span className="text-purple-400 font-medium">John Doe</span> from{" "}
                      <span className="text-purple-400 font-medium">TechCorp</span> to close a potential $15k deal.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-purple-400 hover:text-purple-300">
                      View all suggestions →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{formatCurrency(kpiData?.total_revenue)}</div>
                <p className="text-xs text-muted-foreground mt-2">
                  Total revenue from won deals.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Leads</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{kpiData?.new_leads_count || 0}</div>
                <p className="text-xs text-muted-foreground mt-2">
                  New contacts in the last 30 days.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{kpiData?.conversion_rate?.toFixed(1) || '0.0'}%</div>
                <p className="text-xs text-muted-foreground mt-2">
                  Percentage of deals won.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sales Trend */}
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Sales Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <SalesTrendChart data={salesTrend} />
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity?.map((activity) => {
                  const Icon = {
                    ai: Bot,
                    system: CheckCircle,
                    user: UserPlus,
                    error: AlertTriangle,
                  }[activity.type] || Mail
                  
                  const color = {
                    ai: "text-purple-500",
                    system: "text-green-500",
                    user: "text-blue-500",
                    error: "text-red-500",
                  }[activity.type] || "text-gray-500"

                  return (
                    <div key={activity.id} className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full bg-muted ${color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(activity.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
