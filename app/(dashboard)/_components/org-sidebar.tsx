"use client";

import React from "react";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] p-5 bg-muted">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="/abWBsvg.svg" alt="logo" height={40} width={150} />
          {/* <span className={cn("font-semibold text-2xl", font.className)}>
            Board
          </span> */}
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />
      <div className="space-y-1 w-full">
        <Button
          variant={favorites ? "secondary" : "boardActive"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Team boards
          </Link>
        </Button>
        <Button
          variant={favorites ? "boardActive" : "secondary"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link
            href={{
              pathname: "/",
              query: {
                favorites: true,
              },
            }}
          >
            <Star className="h-4 w-4 mr-2" />
            Favorite boards
          </Link>
        </Button>
        <Button
          variant={favorites ? "secondary" : "boardActive"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Upgrade
          </Link>
        </Button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="hidden lg:flex flex-row w-auto p-4 bg-muted">
          <Link href="https://github.com/ajay1214" aria-label="GitHub">
            <GitHubLogoIcon className="w-6 h-6 mr-4 hover:text-gray-400" />
          </Link>
          <Link
            href="https://www.instagram.com/ajay_bind786/"
            aria-label="Instagram"
          >
            <InstagramLogoIcon className="w-6 h-6 mr-4 hover:text-gray-400" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ajaybind/"
            aria-label="LinkedIn"
          >
            <LinkedInLogoIcon className="w-6 h-6 mr-4 hover:text-gray-400" />
          </Link>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Made With ♥ by Ajay
          </p>
        </div>
      </div>
    </div>
  );
};
