import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs';
import { Loader2Icon } from 'lucide-react';
import Image from 'next/image';

const SigninContainer = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="h-full flex-col items-center justify-center px-4 lg:flex">
        <div className="mt-8 flex h-full items-center justify-center">
          <ClerkLoaded>
            <SignIn />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2Icon className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="hidden h-full p-4 lg:block">
        <div className="relative flex h-full flex-col items-center justify-center rounded-2xl bg-primary">
          <div>
            <h1 className="mb-4 text-center text-4xl font-semibold text-white">
              Buat Beli Rumah 5M
            </h1>
            <p className="px-10 text-center text-white">
              Your Comprehensive Financial Command Center: Seamlessly Track, Analyze, and Optimize
              Every Aspect of Your Financial Journey
            </p>
            <p className="text-center text-xs italic text-gray-100 opacity-20">-claude</p>
            <div className="relative mx-auto mt-16 h-[500px] w-[80%] max-w-[700px] rounded-2xl">
              <Image
                src={'/image/on-boarding-dashboard.png'}
                alt="On Boarding Dashboard"
                fill
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>
          <Image
            src={'/image/background-circle.png'}
            alt="Circle Background"
            width={300}
            height={300}
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SigninContainer;
