import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import TaskPagination from "@/components/task-pagination";

export default function Loading() {
  return (
    <div className="w-full max-w-5xl">
      <Table>
        <TableCaption>Loading tasks...</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[35%]">Task Name</TableHead>
            <TableHead className="w-[20%]">Status</TableHead>
            <TableHead className="w-[20%]">Priority</TableHead>
            <TableHead className="w-[25%]">Assigned To</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-5 w-3/4" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-9 w-full max-w-[120px] rounded-md" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-9 w-full max-w-[120px] rounded-md" />
              </TableCell>
              <TableCell className="flex items-center gap-2">
                <Skeleton className="w-10 h-10 rounded-full shrink-0" />
                <Skeleton className="h-5 w-24" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TaskPagination
        currentPage={1}
        totalPages={1}
        limit={1}
        hasNext={false}
        hasPrev={false}
      />
    </div>
  );
}
