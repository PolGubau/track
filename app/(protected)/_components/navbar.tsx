"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 w-full bg-teal-500 justify-center">
      <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl max-w-[600px] shadow-sm">
        <div className="flex gap-x-2">
          <Button
            asChild
            variant={pathname === "/server" ? "default" : "outline"}
          >
            <Link href="/server">Server</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/client" ? "default" : "outline"}
          >
            <Link href="/client">Client</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/admin" ? "default" : "outline"}
          >
            <Link href="/admin">Admin</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/settings" ? "default" : "outline"}
          >
            <Link href="/settings">Settings</Link>
          </Button>
        </div>
        <UserButton />
      </nav>
    </div>
  );
};
