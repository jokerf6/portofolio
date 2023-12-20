import { github } from "@/static/contact";
import Link from "next/link";
import React from "react";

export default function Github() {
  return (
    <Link
      target="blank"
      href={github}
      className="hover:shadow-orange hover:shadow-lg hover:bg-orange hover:text-white  xl:flex lg:flex hidden cursor-pointer  border border-orange h-fit p-3 rounded-3xl text-orange text-xl px-6   "
    >
      Github Profile
    </Link>
  );
}
