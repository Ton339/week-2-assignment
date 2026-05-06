"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function UserLayout({
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
