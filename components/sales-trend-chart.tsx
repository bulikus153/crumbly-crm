"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface SalesTrendChartProps {
  data: {
    month_name: string;
    sales: number;
  }[] | null;
}

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-2))",
  },
}

export function SalesTrendChart({ data }: SalesTrendChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-muted-foreground">Not enough data to display chart.</p>
      </div>
    )
  }

  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: -10,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="month_name"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => `$${Number(value) / 1000}k`}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <defs>
            <linearGradient id="salesGradientArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-sales)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="var(--color-sales)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="sales"
            stroke="var(--color-sales)"
            fillOpacity={1}
            fill="url(#salesGradientArea)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
