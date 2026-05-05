import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Card className="w-lg flex-row items-center p-4 gap-4">
      <Skeleton className="w-50 h-50 rounded-full shrink-0" />
      <div className="flex-1">
        <CardHeader>
          <Skeleton className="h-8 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent className="flex gap-2">
          <div className="gap-2 mt-2 w-full">
            <div className="flex gap-2 items-center mb-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <div className="flex gap-2 items-center mb-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <Skeleton className="h-4 w-full mb-2 mt-4" />
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
