"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { sileo } from "sileo";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export function SignOutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignOut() {
    setIsLoading(true);
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            sileo.success({ title: "Signed out" });
            router.push("/");
          },
          onError: () => {
            sileo.error({ title: "Failed to sign out" });
          },
        },
      });
    } catch {
      sileo.error({ title: "Failed to sign out" });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button variant="outline" disabled={isLoading} onClick={handleSignOut}>
      {isLoading ? "Signing out..." : "Sign Out"}
    </Button>
  );
}
