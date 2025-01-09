"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function AlertBanner() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur">
      <div className="text-center text-sm">
        GIAIC Project: Creating a Blog Website with Sanity
      </div>

     
      <hr className="border-t-2 border-gray-300 my-1" />

      {/* Navbar */}
      <div className="bg-gray-100 text-black font-serif flex justify-between items-center shadow-md">
        {/* Centered Navbar Links */}
        <div className="flex space-x-6 mx-auto">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            Contact
          </Link>
        </div>
      </div>
    </div>  );
}

