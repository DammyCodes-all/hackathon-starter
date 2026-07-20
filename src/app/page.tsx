import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hackathon Starter
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Production-ready template with auth, database, AI, and UI components.
          Clone, configure, and start building.
        </p>
        <div className="flex gap-4">
          <Link href="/sign-in" className={buttonVariants({ size: "lg" })}>
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Sign Up
          </Link>
        </div>
      </main>
    </div>
  );
}
