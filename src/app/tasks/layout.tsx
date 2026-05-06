"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function TasksLayout({
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
      <h1 className="text-4xl font-bold">Tasks</h1>
      <div className="container w-full px-12 py-4 justify-items-center mb-8">
        {children}
      </div>
    </>
  );
}
