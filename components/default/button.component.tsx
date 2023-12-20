import { cv } from "@/static/contact";
import Link from "next/link";
import React from "react";

export default function Button() {
  return (
    <Link
      href={cv}
      target="blank"
      className=" text-center  border border-orange h-fit p-3 rounded-3xl text-orange text-xl px-6 w-60 hover:bg-orange hover:text-white hover:shadow-orange hover:shadow-lg"
      style={{ transition: "0.1s" }}
    >
      Download CV
    </Link>
  );
}
