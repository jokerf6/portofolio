import Link from "next/link";
import React from "react";

export default function ViewCode(props: { button: boolean; link: string }) {
  const { button, link } = props;
  return (
    <>
      {" "}
      {button ? (
        <Link
          target="blank"
          href={link}
          className=" bg-orange text-center rounded-md  mt-2 mb-2 text-white w-full hover:shadow-orange hover:shadow-lg"
        >
          View Code
        </Link>
      ) : (
        <div className=" text-orange border text-center rounded-md mt-2 mb-2 border-orange w-full">
          Freelance
        </div>
      )}
    </>
  );
}
