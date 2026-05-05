import { User } from "../user";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch user data using the id
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.tsx` Error Boundary
    throw new Error(`Failed to fetch user data (Status: ${res.status})`);
  }

  const user: User = await res.json();

  return (
    <Card className="w-lg flex-row items-center p-4 gap-4 hover:scale-105 transition-transform">
      <Image
        src={user.avatar}
        alt={user.name}
        width={500}
        height={500}
        loading="eager"
        className="w-50 h-50 rounded-full object-cover"
      />
      <div className="flex-1">
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <div className="gap-4 mt-2">
            <p>
              role :{" "}
              <Badge
                variant={"secondary"}
                className={
                  user.role === "Admin"
                    ? "bg-blue-50 text-blue-700 dark:bg-sky-950 dark:text-sky-300"
                    : user.role === "Editor"
                      ? "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                      : "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300"
                }
              >
                {user.role}
              </Badge>
            </p>
            <p>
              status :{" "}
              <Badge
                variant={"secondary"}
                className={
                  user.status === "Active"
                    ? "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                    : "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
                }
              >
                {user.status}
              </Badge>
            </p>
            <p>address : {user.address}</p>
            <p>birthdate : {user.birthdate}</p>
            <p>phone : {user.phone}</p>
            <p>occupation : {user.occupation}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
