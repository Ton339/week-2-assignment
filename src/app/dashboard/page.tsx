import nextDynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { MonthlyViewData } from "@/components/monthly-view-chart";

const MonthlyViewChart = nextDynamic(
  () => import("@/components/monthly-view-chart"),
);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const dynamic = "force-dynamic";

// นี่คือ Server Component ที่รับจบเรื่อง Data Fetching
async function ChartDataFetcher() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // จำลองความช้าให้เห็นผลลัพธ์ของ Suspense
  await sleep(2000);

  const res = await fetch(`${apiUrl}/dashboardStats-monthlyViews`);

  if (!res.ok) {
    // ถ้าพัง Next.js จะส่ง Error ทะลุไปยังหน้า error.tsx อัตโนมัติ
    throw new Error(`Failed to fetch user data (Status: ${res.status})`);
  }

  const data = await res.json();
  const chartData: MonthlyViewData[] = data[0].monthlyViews;
  const chartTrending: number = data[0].TrendingPercentage;
  const chartDescription: string = data[0].Description;

  // โยนข้อมูลลงไปเป็น Props ให้ Component ลูก
  return (
    <MonthlyViewChart
      chartData={chartData}
      chartTrending={chartTrending}
      chartDescription={chartDescription}
    />
  );
}

export default function DashboardPage() {
  return (
    <>
      <title>Dashboard</title>
      <meta name="description" content="Dashboard" />
      <link rel="icon" href="/favicon.ico" />
      <h1 className="text-4xl font-bold pb-6 ">Dashboard</h1>
      <div className="justify-self-center w-full max-w-4xl mx-auto">
        {/* Suspense จะทำงานตอน ChartDataFetcher กำลังโหลดข้อมูล (await) */}
        <Suspense
          fallback={<Skeleton className="h-[400px] w-full rounded-xl" />}
        >
          <ChartDataFetcher />
        </Suspense>
      </div>
    </>
  );
}
