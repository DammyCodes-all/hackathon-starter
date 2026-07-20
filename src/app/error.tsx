"use client";

import { useRouter } from "next/navigation";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <p className="text-6xl font-bold text-destructive">!</p>
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="max-w-md text-muted-foreground">
        An unexpected error occurred. Please try again.
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
        >
          Try again
        </button>
        <button
          type="button"
          onClick={() => router.push("/")}
          className="rounded-md border px-4 py-2 text-sm hover:bg-accent"
        >
          Go home
        </button>
      </div>
    </div>
  );
}
