import React from "react";
import Title from "../default/title.component";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { codeforces, facebook, github, linkedin } from "@/static/contact";

export default function Contact() {
  return (
    <div className=" w-full mt-10 xl:px-40  lg:px-30 px-10 mb-10">
      <Title title="Contact Me" />
      <div className=" flex xl:flex-row lg:flex-row  flex-col justify-between items-center">
        <div className=" xl:w-1/2 lg:w-1/2 w-full flex xl:flex-row lg:flex-row  flex-col items-center justify-between mt-10">
          <div className=" flex flex-col">
            <h1 className=" text-2xl text-orange">Address</h1>
            <span className=" text-sm">Egypt, Cairo</span>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <h1 className=" text-2xl text-orange">Contact</h1>
            <span className=" text-sm">Email: fhakem75@gmail.com</span>
            <span className=" text-sm">Tel: +201148478628</span>
          </div>
        </div>
        <div className=" xl:w-1/2 lg:w-1/2 w-full flex items-center justify-between xl:pl-10 lg:pl-10 mt-10">
          <Link target="blank" href={facebook}>
            <Icon
              icon={"ri:facebook-fill"}
              className=" text-5xl  text-main2 cursor-pointer hover:text-blue-700"
            />
          </Link>
          <Link href={linkedin} target="blank">
            <Icon
              icon={"jam:linkedin"}
              className=" text-5xl  text-main2 cursor-pointer hover:text-blue-300"
            />
          </Link>
          <Link href={github} target="blank">
            <Icon
              icon={"bytesize:github"}
              className=" text-5xl  text-main2 cursor-pointer hover:text-black"
            />
          </Link>
          <Link href={codeforces} target="blank">
            <Icon
              icon={"simple-icons:codeforces"}
              className=" text-5xl  text-main2 cursor-pointer hover:text-red-500"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
