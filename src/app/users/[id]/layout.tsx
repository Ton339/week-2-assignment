import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UserDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4">
      <Button className="mb-4">
        <Link href="/users">Back</Link>
      </Button>
      <div className="w-full flex items-center justify-center ">{children}</div>
    </div>
  );
}
