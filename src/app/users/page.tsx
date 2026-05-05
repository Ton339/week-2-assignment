"use client";
import { useState, useEffect } from "react";
import { UserCard } from "@/components/user-card";
import { User } from "./user";
import Link from "next/link";
import { ErrorCard } from "@/components/error-card";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${apiUrl}/users`);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // กรณีที่ 1: กำลังโหลด (Pending)
  if (loading) {
    return (
      <div className="container w-full px-12 py-4 justify-items-center">
        <div className="grid grid-cols-3  gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <UserCard key={i} user={null} />
          ))}
        </div>
      </div>
    );
  }

  // กรณีที่ 2: เกิดข้อผิดพลาด (Rejected)
  if (error) {
    return (
      <div className="flex justify-center items-center h-dvh">
        <ErrorCard />
      </div>
    );
  }

  return (
    <div className="container w-full px-12 py-4 justify-items-center">
      <div className="grid grid-cols-3  gap-4">
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
}
