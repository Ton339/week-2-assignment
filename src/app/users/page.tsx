"use client";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  if (users.length === 0) return <p>No users found</p>;

  return (
    <div className="card">
      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <button className="btn" onClick={handleRefresh}>
        Refresh
      </button>
    </div>
  );
}
