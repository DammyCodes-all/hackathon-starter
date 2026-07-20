"use client";

import { useRouter } from "next/navigation";
import { sileo } from "sileo";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          sileo.success({ title: "Signed out" });
          router.push("/");
        },
      },
    });
  }

  return (
    <Button variant="outline" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}
