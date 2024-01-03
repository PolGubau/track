import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Track - Log your habits and track your progress",
  description:
    "The habit and life tracker you'll love to use, by Pol Gubau Amores.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${inter.className} bg-background `}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
