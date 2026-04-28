// app/dashboard/page.tsx
"use client";
import dynamic from "next/dynamic";
// นำเข้า Skeleton จาก shadcn/ui (ต้องรัน npx shadcn@latest add skeleton ก่อน)
import { Skeleton } from "@/components/ui/skeleton";

// 1. นำเข้า Component แบบ Lazy Load
const HeavyChart = dynamic(() => import("@/components/HeavyChart"), {
  // 2. ใส่ Skeleton เป็นหน้าจอโหลดชั่วคราว
  loading: () => <Skeleton className="h-40 w-full" />,

  // 💡 ทริคเสริม: ถ้ากราฟของน้องพึ่งพา Window (เช่น วัดขนาดหน้าจอ)
  // ให้ใส่ ssr: false เพื่อป้องกัน Error ฝั่ง Server
  ssr: false,
});

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          ภาพรวมระบบ (Dashboard)
        </h1>
        <p className="text-muted-foreground mt-2">
          กราฟด้านล่างนี้จะถูกโหลดแบบแยกส่วน (Code Splitting)
          เพื่อไม่ให้หน้าเว็บหลักกระตุก
        </p>
      </div>

      {/* 3. เรียกใช้งานเหมือน Component ปกติได้เลย */}
      <div className="mt-8">
        <HeavyChart />
      </div>
    </div>
  );
}
