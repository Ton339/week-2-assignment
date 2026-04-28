"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function UsersPage() {
  // ค่าเริ่มต้นเป็น true อยู่แล้ว (ตอนเปิดหน้าเว็บมาจะได้โชว์ Loading เลย)
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    async function fetchUser() {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await result.json();
        setUsers(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [refreshCount]);

  const handleRefresh = () => {
    setLoading(true);
    setRefreshCount((prev) => prev + 1);
  };

  if (loading)
    return (
      <div className="flex flex-col items-center">
        <Card className="w-min">
          <Table>
            <TableCaption>Users list form jsonplaceholder API</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-5 w-[200px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-[200px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-[200px]" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <div className="mt-2">
          <Button variant={"outline"} disabled>
            Loading...
          </Button>
        </div>
      </div>
    );
  if (error)
    return (
      <>
        <p>Something went wrong</p>
        <div className="mt-2">
          <Button variant={"outline"} onClick={handleRefresh}>
            Refresh
          </Button>
        </div>
      </>
    );
  if (users.length === 0) return;
  <>
    <p>No users found</p>
    <div className="mt-2">
      <Button variant={"outline"} onClick={handleRefresh}>
        Refresh
      </Button>
    </div>
  </>;

  return (
    <div className="flex flex-col items-center">
      <Card className="w-[650px]">
        <Table>
          <TableCaption>Users list form jsonplaceholder API</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="h-5 w-[200px] font-medium">
                  {user.name}
                </TableCell>
                <TableCell className="h-5 w-[200px]">{user.username}</TableCell>
                <TableCell className="h-5 w-[200px]">{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <div className="mt-2">
        <Button variant={"outline"} onClick={handleRefresh}>
          Refresh
        </Button>
      </div>
    </div>
  );
}
