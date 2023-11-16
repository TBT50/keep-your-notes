import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="p-4 fixed top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <Logo />
        <div className="space-x-4 flex items-start justify-between w-full md:block md:w-auto">
          <Link
            className={buttonVariants({ variant: "outline", size: "sm" })}
            href="/sign-in"
          >
            Login
          </Link>
          <Link
            className={buttonVariants({ variant: "default", size: "sm" })}
            href="/sign-up"
          >
            Get StarTrek for free
          </Link>
        </div>
      </div>
    </header>
  );
};
