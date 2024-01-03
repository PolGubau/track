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
    <main className="flex h-full flex-col items-center justify-center bg-sky-400">
      <div className="space-y-6 text-center">
        <h1
          className={cn("text-6xl font-semibold text-sky-50", font.className)}
        >
          🔐 Auth
        </h1>
        <p className="text-sky-100 text-lg">A simple authentication service</p>
        <div>
          <Link href={"/auth/login"} className={buttonVariants()}>
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
