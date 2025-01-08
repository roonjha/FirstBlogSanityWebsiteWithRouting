"use client";

import { useRouter } from "next/navigation";
import { useSyncExternalStore, useTransition } from "react";

import { disableDraftMode } from "./actions";

const emptySubscribe = () => () => {};

export default function AlertBanner() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div
      className= "fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur"
    >
      <div className=" text-center text-sm">
      GIAIC Project: Creating a Blog Website with Sanity
      </div>

      {/* Separator Line */}
<hr className="border-t-2 border-gray-300 my-1" />

{/* Navbar */}
<div className="bg-gray-100 text-black font-serif flex justify-between items-center shadow-md">

  {/* Centered Navbar Links */}
  <div className="flex space-x-6 mx-auto">
    <a href="/" className="hover:text-gray-600">Home</a>
    <a href="/about" className="hover:text-gray-600">About</a>
    <a href="/contact" className="hover:text-gray-600">Contact</a>
  </div>
</div>

</div>
  
  );
}
