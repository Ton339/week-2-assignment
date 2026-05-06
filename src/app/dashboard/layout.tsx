"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <>
      <Button className="mb-4" onClick={() => router.back()}>
        Back
      </Button>
      {children}
    </>
  );
}
