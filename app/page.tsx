import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center ">
      <div className="space-y-6 text-center">
        <h1
          className={cn("text-6xl font-semibold text-primary", font.className)}
        >
          <span className="opacity-75">Pol/</span>Track
        </h1>
        <p className="text-primary-foreground text-lg">
          Log your habits and track your progress
        </p>
        <div>
          <Link href={"/auth/login"} className={buttonVariants()}>
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
