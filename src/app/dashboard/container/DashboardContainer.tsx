import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';
import { Button } from '@/shared/container/ui/button';

const DashboardContainer = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-semibold text-destructive">RUMAH MAHAL</h1>
      <Button>Test Button</Button>
      <ClerkLoaded>
        <UserButton />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </>
  );
};

export default DashboardContainer;
