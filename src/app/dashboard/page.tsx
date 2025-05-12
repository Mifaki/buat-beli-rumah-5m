import prisma from '@/lib/prisma';
import DashboardContainer from './container/DashboardContainer';

export default async function page() {
  // const users = await prisma.user.findMany();
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <ol className="list-inside list-decimal font-[family-name:var(--font-geist-sans)]">
        {/* {users.map((user) => (
          <li
            key={user.id}
            className="mb-2"
          >
            {user.name}
          </li>
        ))} */}
      </ol>
      <DashboardContainer />
    </main>
  );
}
