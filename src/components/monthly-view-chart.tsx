"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartConfig = {
  views: {
    label: "views",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export interface MonthlyViewData {
  month: string;
  views: number;
}

export interface MonthlyViewChartProps {
  chartData: MonthlyViewData[];
  chartTrending: number;
  chartDescription: string;
}

export default function MonthlyViewChart({
  chartData,
  chartTrending,
  chartDescription,
}: MonthlyViewChartProps) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Line Chart</CardTitle>
        <CardDescription>
          {chartData[0]?.month} - {chartData[chartData.length - 1]?.month}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              content={<ChartTooltipContent indicator="line" />}
              cursor={false}
              defaultIndex={1}
            />
            <Line
              dataKey="views"
              type="natural"
              stroke="var(--color-views)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {chartTrending >= 0 ? (
            <TrendingUp className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500" />
          )}
          Trending {chartTrending >= 0 ? "up" : "down"} by {chartTrending}% this
          month
        </div>
        <div className="leading-none text-muted-foreground">
          {chartDescription}
        </div>
      </CardFooter>
    </Card>
  );
}
