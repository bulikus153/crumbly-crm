"use client"

import React, { useState } from "react" // Import React
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  FunnelChart,
  Funnel,
  LabelList,
  ScatterChart, // Add ScatterChart
  Scatter, // Add Scatter
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { DollarSign, Users, Target, TrendingUp, BarChart3, Users2, PieChartIcon, Filter, LayoutGrid } from 'lucide-react' // Add LayoutGrid

// Mock Data
const revenueData = [
  { month: "Jan", revenue: 45000, profit: 12000 },
  { month: "Feb", revenue: 52000, profit: 15000 },
  { month: "Mar", revenue: 68000, profit: 21000 },
  { month: "Apr", revenue: 61000, profit: 18000 },
  { month: "May", revenue: 75000, profit: 25000 },
  { month: "Jun", revenue: 82000, profit: 28000 },
]

const salesByRegionData = [
  { region: "NA", sales: 125000 },
  { region: "EU", sales: 98000 },
  { region: "APAC", sales: 76000 },
  { region: "LATAM", sales: 45000 },
]

const funnelData = [
  { stage: "Leads", value: 1200, fill: "#8884d8" },
  { stage: "Qualified", value: 850, fill: "#83a6ed" },
  { stage: "Proposal", value: 500, fill: "#8dd1e1" },
  { stage: "Negotiation", value: 350, fill: "#82ca9d" },
  { stage: "Won", value: 210, fill: "#a4de6c" },
]

const leadSourceData = [
  { source: "Organic", value: 400, fill: "#0088FE" },
  { source: "Referral", value: 300, fill: "#00C49F" },
  { source: "Paid Ads", value: 250, fill: "#FFBB28" },
  { source: "Social", value: 200, fill: "#FF8042" },
]

const salesRepData = [
  { name: "John S.", sales: 55000, deals: 12 },
  { name: "Sarah W.", sales: 72000, deals: 18 },
  { name: "Mike C.", sales: 48000, deals: 10 },
  { name: "Emily R.", sales: 61000, deals: 15 },
]

// New Data for Advanced Visuals
const dealActivityData = [
  { day: "Sun", hours: Array.from({ length: 24 }, () => Math.floor(Math.random() * 5)) },
  { day: "Mon", hours: Array.from({ length: 24 }, (_, i) => i > 7 && i < 18 ? Math.floor(Math.random() * 20) : Math.floor(Math.random() * 5)) },
  { day: "Tue", hours: Array.from({ length: 24 }, (_, i) => i > 7 && i < 18 ? Math.floor(Math.random() * 25) : Math.floor(Math.random() * 5)) },
  { day: "Wed", hours: Array.from({ length: 24 }, (_, i) => i > 7 && i < 18 ? Math.floor(Math.random() * 30) : Math.floor(Math.random() * 5)) },
  { day: "Thu", hours: Array.from({ length: 24 }, (_, i) => i > 7 && i < 18 ? Math.floor(Math.random() * 28) : Math.floor(Math.random() * 5)) },
  { day: "Fri", hours: Array.from({ length: 24 }, (_, i) => i > 7 && i < 18 ? Math.floor(Math.random() * 22) : Math.floor(Math.random() * 5)) },
  { day: "Sat", hours: Array.from({ length: 24 }, () => Math.floor(Math.random() * 10)) },
];

const dealCycleData = Array.from({ length: 50 }, () => ({
  dealValue: Math.floor(Math.random() * 45000) + 5000,
  closeTimeDays: Math.floor(Math.random() * 80) + 10,
}));

const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-2))" },
  profit: { label: "Profit", color: "hsl(var(--chart-1))" },
  sales: { label: "Sales", color: "hsl(var(--chart-3))" },
  deals: { label: "Deals", color: "hsl(var(--chart-4))" },
}

// Heatmap Component
const DealActivityHeatmap = ({ data }: { data: typeof dealActivityData }) => {
  const getColor = (value: number) => {
    if (value === 0) return "bg-muted/20";
    if (value < 5) return "bg-purple-500/20";
    if (value < 10) return "bg-purple-500/40";
    if (value < 15) return "bg-purple-500/60";
    if (value < 20) return "bg-purple-500/80";
    return "bg-purple-500";
  };

  const groupedData = data.map(d => ({
    day: d.day,
    hours: Array.from({ length: 12 }, (_, i) => d.hours[i * 2] + d.hours[i * 2 + 1])
  }));

  const hourLabels = ["12am", "2am", "4am", "6am", "8am", "10am", "12pm", "2pm", "4pm", "6pm", "8pm", "10pm"];

  return (
    <div className="w-full">
      <div className="grid grid-cols-[auto_1fr] gap-x-4">
        <div>{/* Empty corner */}</div>
        <div className="grid grid-cols-12 gap-1">
          {hourLabels.map(label => (
            <div key={label} className="text-center text-xs text-muted-foreground">{label}</div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 mt-1">
        {groupedData.map(({ day, hours }) => (
          <React.Fragment key={day}>
            <div className="text-right text-sm text-muted-foreground pt-1">{day}</div>
            <div className="grid grid-cols-12 gap-1">
              {hours.map((value, i) => (
                <div
                  key={i}
                  className={`h-8 rounded-sm ${getColor(value)}`}
                  title={`Activity: ${value} deals`}
                />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


export default function AnalyticsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="p-4 space-y-4">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Analytics & Reporting</h1>
              <p className="text-muted-foreground">
                Deep dive into your sales, leads, and performance metrics.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <DateRangePicker align="end" />
              <Button variant="outline" className="border-border/50">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">$383,000</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">+15.2%</span> vs previous period
                </p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">210</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">+12.1%</span> vs previous period
                </p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">17.5%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-red-500">-1.8%</span> vs previous period
                </p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-card/50 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Deal Size</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">$1,823</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">+5.4%</span> vs previous period
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="sales">
            <TabsList className="grid w-full grid-cols-4 lg:w-fit">
              <TabsTrigger value="sales" className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>Sales</span>
              </TabsTrigger>
              <TabsTrigger value="leads" className="flex items-center space-x-2">
                <Users2 className="w-4 h-4" />
                <span>Leads</span>
              </TabsTrigger>
              <TabsTrigger value="performance" className="flex items-center space-x-2">
                <PieChartIcon className="w-4 h-4" />
                <span>Performance</span>
              </TabsTrigger>
              <TabsTrigger value="advanced" className="flex items-center space-x-2">
                <LayoutGrid className="w-4 h-4" />
                <span>Advanced</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sales" className="space-y-6 mt-6">
              <Card className="backdrop-blur-md bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle>Revenue Over Time</CardTitle>
                  <CardDescription>Monthly revenue and profit trends.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-80">
                    <AreaChart data={revenueData}>
                      <CartesianGrid vertical={false} />
                      <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                      <YAxis tickFormatter={(value) => `$${Number(value) / 1000}k`} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Area dataKey="profit" type="natural" fill="var(--color-profit)" fillOpacity={0.4} stroke="var(--color-profit)" stackId="a" />
                      <Area dataKey="revenue" type="natural" fill="var(--color-revenue)" fillOpacity={0.4} stroke="var(--color-revenue)" stackId="a" />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="backdrop-blur-md bg-card/50 border-border/50">
                  <CardHeader>
                    <CardTitle>Sales by Region</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-64">
                      <BarChart data={salesByRegionData} layout="vertical">
                        <CartesianGrid horizontal={false} />
                        <YAxis dataKey="region" type="category" tickLine={false} axisLine={false} />
                        <XAxis type="number" hide />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="sales" fill="var(--color-sales)" radius={4}>
                          <LabelList dataKey="sales" position="right" offset={8} className="fill-foreground" formatter={(value: number) => `$${(value / 1000).toFixed(0)}k`} />
                        </Bar>
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-card/50 border-border/50">
                  <CardHeader>
                    <CardTitle>Deal Stage Conversion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{}} className="h-64">
                      <FunnelChart data={funnelData}>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Funnel dataKey="value" nameKey="stage">
                          <LabelList position="right" fill="#000" dataKey="stage" className="fill-foreground" />
                        </Funnel>
                      </FunnelChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="leads" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="backdrop-blur-md bg-card/50 border-border/50">
                  <CardHeader>
                    <CardTitle>Lead Source Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{}} className="h-64">
                      <PieChart>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Pie data={leadSourceData} dataKey="value" nameKey="source" cx="50%" cy="50%" outerRadius={80}>
                          {leadSourceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <ChartLegend content={<ChartLegendContent />} />
                      </PieChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-card/50 border-border/50">
                  <CardHeader>
                    <CardTitle>Leads Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-64">
                      <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="profit" stroke="var(--color-profit)" name="New Leads" />
                      </LineChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6 mt-6">
              <Card className="backdrop-blur-md bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle>Sales Rep Leaderboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-80">
                    <BarChart data={salesRepData}>
                      <CartesianGrid vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" orientation="left" stroke="var(--color-sales)" />
                      <YAxis yAxisId="right" orientation="right" stroke="var(--color-deals)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Bar yAxisId="left" dataKey="sales" fill="var(--color-sales)" name="Sales" />
                      <Bar yAxisId="right" dataKey="deals" fill="var(--color-deals)" name="Deals Won" />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="advanced" className="space-y-6 mt-6">
              <Card className="backdrop-blur-md bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle>Deal Activity Heatmap</CardTitle>
                  <CardDescription>Peak deal activity times by day and hour.</CardDescription>
                </CardHeader>
                <CardContent>
                  <DealActivityHeatmap data={dealActivityData} />
                </CardContent>
              </Card>
              <Card className="backdrop-blur-md bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle>Deal Value vs. Close Time</CardTitle>
                  <CardDescription>Relationship between deal value and the time taken to close.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{}} className="h-80">
                    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                      <CartesianGrid />
                      <XAxis 
                        type="number" 
                        dataKey="closeTimeDays" 
                        name="Close Time" 
                        unit=" days" 
                        tickLine={false} 
                        axisLine={false} 
                        tickMargin={8}
                      />
                      <YAxis 
                        type="number" 
                        dataKey="dealValue" 
                        name="Deal Value" 
                        tickFormatter={(value) => `$${value / 1000}k`} 
                        tickLine={false} 
                        axisLine={false} 
                        tickMargin={8}
                      />
                      <ChartTooltip 
                        cursor={{ strokeDasharray: '3 3' }} 
                        content={<ChartTooltipContent />} 
                      />
                      <Scatter name="Deals" data={dealCycleData} fill="var(--color-revenue)" />
                    </ScatterChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
