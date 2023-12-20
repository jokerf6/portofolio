import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Taps from "@/components/home/header/taps.component";
import Github from "@/components/home/header/github.component";
import Link from "next/link";

export default function HeaderMain(props: { now: number }) {
  const { now } = props;
  const [show, setShow] = useState(false);
  return (
    <div className="pt-8 xl:px-40  lg:px-30 px-10  flex flex-row justify-between items-center h-fit z-10 w-screen">
      <img src="/images/logo.png" style={{ width: "50px", height: "50px" }} />
      <Taps now={now} />

      <Github />
      <span className=" relative xl:hidden lg:hidden ">
        <Icon
          onClick={() => setShow((pre) => !pre)}
          icon={"pepicons-print:menu"}
          className=" text-4xl cursor-pointer text-white "
        />
        {show && (
          <div className=" p-2 bg-main2 flex gap-1 flex-col absolute -bottom-30 rounded-md right-0">
            <Link href={"/"} className={`${now === 0 ? "text-orange" : ""}`}>
              About
            </Link>
            <hr className=" border-orange" />
            <Link
              href={"/experience"}
              className={`${now === 1 ? "text-orange" : ""}`}
            >
              Experience
            </Link>
            <hr className=" border-orange" />

            <Link
              href={"/projects"}
              className={`${now === 2 ? "text-orange" : ""}`}
            >
              Projects
            </Link>
          </div>
        )}
      </span>
    </div>
  );
}
