import { currentUser } from '@clerk/nextjs/server';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import KBar from '@/shared/components/kbar';
import Header from '@/shared/components/layout/header';
import AppSidebar from '@/shared/components/layout/sidebar/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/shared/components/ui/sidebar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';

  const user = await currentUser();

  return (
    <KBar>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar
          firstName={user?.firstName ?? ''}
          lastName={user?.lastName ?? ''}
          imageUrl={user?.imageUrl ?? ''}
          emailAddresses={user?.primaryEmailAddress?.emailAddress ?? 'john.doe@example.com'}
        />
        <SidebarInset>
          <Header />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </KBar>
  );
}
