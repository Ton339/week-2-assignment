import { User } from "@/app/users/user";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";

export function UserCard({ user }: { user: User | null }) {
  if (user == null) {
    return (
      <Card className="w-full h-full flex-row items-center p-4 gap-4 hover:scale-105 transition-transform">
        <Skeleton className="w-20 h-20 rounded-full shrink-0" />
        <div className="flex-1 min-w-0">
          <CardHeader>
            <CardTitle>
              <Skeleton className="w-32 h-5" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="w-36 h-4" />
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <div className="flex flex-col gap-2 mt-2 w-full">
              <Skeleton className="w-24 h-5" />
              <Skeleton className="w-32 h-5" />
            </div>
          </CardContent>
        </div>
      </Card>
    );
  } else {
    return (
      <Card className="w-full h-full flex-row items-center p-4 gap-4 hover:scale-105 transition-transform">
        <Image
          src={user.avatar}
          alt={user.name}
          width={200}
          height={200}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <div className="gap-2 mt-2">
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
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }
}
