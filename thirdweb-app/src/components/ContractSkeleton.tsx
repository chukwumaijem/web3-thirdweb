import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { Skeleton } from '~/components/ui/skeleton';

export function ContractSkeleton() {
  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="flex h-[400px] w-[400px] flex-col items-center justify-center !p-0">
        <Skeleton className="aspect-square h-full w-full" />
      </CardContent>

      <CardHeader className="border-t !p-4">
        <Skeleton className="mb-2 h-6 w-[200px]" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[250px]" />
      </CardHeader>
    </Card>
  );
}
