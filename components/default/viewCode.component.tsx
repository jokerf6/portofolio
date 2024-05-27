import Link from "next/link";
import React from "react";

export default function ViewCode(props: {
  freelance: boolean;
  internship: boolean;
  link: string;
}) {
  const { freelance, link, internship } = props;
  return (
    <>
      {" "}
      {!freelance && !internship ? (
        <Link
          target="blank"
          href={link}
          className=" bg-orange text-center rounded-md  mt-2 mb-2 text-white w-full hover:shadow-orange hover:shadow-lg"
        >
          View Code
        </Link>
      ) : freelance ? (
        link !== "" ? (
          <Link
            target="blank"
            href={link}
            className=" text-orange border text-center rounded-md mt-2 mb-2 border-orange w-full"
          >
            Freelance
          </Link>
        ) : (
          <div className=" text-orange border text-center rounded-md mt-2 mb-2 border-orange w-full">
            Freelance
          </div>
        )
      ) : (
        <div className=" text-orange border text-center rounded-md mt-2 mb-2 border-orange w-full">
          Internship
        </div>
      )}
    </>
  );
}
