"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Card className="w-lg p-4 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-2 text-red-500">
            <AlertCircle size={40} />
          </div>
          <CardTitle className="text-red-700 dark:text-red-400">
            Something went wrong!
          </CardTitle>
          <CardDescription className="text-red-600/80 dark:text-red-400/80">
            {error.message ||
              "An unexpected error occurred while fetching user data."}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center pt-4">
          <Button
            variant="destructive"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
