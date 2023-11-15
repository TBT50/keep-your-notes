import Link from "next/link";

import { Medal } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});
// Font files can be colocated inside of `app`
const headingFont = localFont({
  src: "./../../public/fonts/font.woff2",
  display: "swap",
});

export default function MarketingPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={cn(
          "flex flex-col justify-center items-center",
          headingFont.className
        )}
      >
        <div className="flex items-center gap-2 border shadow mb-4 p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="w-6 h-6" />
          <p>No 1 task management</p>
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Elevate Collaboration with TaskTrek
        </h1>
        <p className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-2 px-4 rounded-md w-fit mb-6">
          work forward.
        </p>
      </div>
      <div
        className={cn(
          "flex flex-col justify-center items-center",
          textFont.className
        )}
      >
        <p className="text-sm md:text-lg text-neutral-400 text-center max-w-xs md:max-w-2xl mx-auto mb-6">
          Empower your team's journey to peak productivity with TaskTrek.
          <br />
          Designed for any workspace, TaskTrek simplifies project management and
          fuels collaborative success
        </p>
        <Link
          className={buttonVariants({ variant: "default", size: "lg" })}
          href="/sign-up"
        >
          Get TaskTrek for free
        </Link>
      </div>
    </div>
  );
}
