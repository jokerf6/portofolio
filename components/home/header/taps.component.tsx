import Link from "next/link";
import React from "react";

export default function Taps(props: { now: number }) {
  const { now } = props;
  return (
    <div className=" xl:flex lg:flex hidden  gap-6">
      <Link
        href={"/"}
        className={`${
          now === 0 ? "text-orange" : "text-white"
        }  text-xl cursor-pointer hover:text-orange`}
      >
        About
      </Link>
      <Link
        href={"/experience"}
        className={` ${
          now === 1 ? "text-orange" : "text-white"
        } text-xl cursor-pointer hover:text-orange`}
      >
        Experience
      </Link>
      <Link
        href={"/projects"}
        className={` ${
          now === 2 ? "text-orange" : "text-white"
        } text-xl cursor-pointer hover:text-orange`}
      >
        Projects
      </Link>
    </div>
  );
}
