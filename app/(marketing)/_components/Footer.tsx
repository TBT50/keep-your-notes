import { Logo } from "@/components/Logo";

import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-4 fixed bottom-0 w-full border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <Logo />
        <div className="space-x-4 flex items-start justify-between w-full md:block md:w-auto">
          <Link
            className={buttonVariants({ variant: "ghost", size: "sm" })}
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className={buttonVariants({ variant: "ghost", size: "sm" })}
            href="#"
          >
            Terms of service
          </Link>
        </div>
      </div>
    </footer>
  );
};
