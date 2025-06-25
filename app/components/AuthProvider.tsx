"use client";

import { ReactNode } from "react";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

