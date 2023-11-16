import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "./../public/fonts/font.woff2",
  display: "swap",
});

export const Logo = () => {
  return (
    <Link
      href="/"
      className="hover:opacity-75 transition hidden md:flex items-center"
    >
      <Image src="/logo.svg" alt="" width="80" height="40" />
      <p className={cn("text-lg text-neutral-700 pl-2", headingFont.className)}>
        TaskTrek
      </p>
    </Link>
  );
};
