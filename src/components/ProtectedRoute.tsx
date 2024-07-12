import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { Route } from "next";

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
        console.log('to be signed in');
      // router.push("/sign-in");
      router.push('/sign-in' as Route);
    }
    else{
        console.log('alredy signed in')
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
