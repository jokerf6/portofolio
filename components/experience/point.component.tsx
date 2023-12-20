import Link from "next/link";
import React from "react";

export default function Point(props: {
  date: string;
  text: string;
  title: string;
  link: string;
  image: string;
}) {
  const { date, text, title, link, image } = props;
  return (
    <>
      <div className=" w-5 bg-orange h-5 rounded-full border-orange flex  border bull ">
        <p className=" xl:ml-12 lg:ml-12 md:ml-8 ml-6 text-orange font-bold whitespace-nowrap">
          {date}
        </p>
      </div>
      <div className="h-fit xl:pl-10 lg:pl-10 md:pl-8 pl-6 border-l border-orange -mt-5 ">
        <div className=" flex justify-between items-center">
          <div className="mt-4 gap-3 flex items-center justify-center">
            <img src={image} style={{ width: "40px", height: "40px" }} />
            <h1 className="  text-orange">{title}</h1>
          </div>
          <Link
            target="blank"
            href={link}
            className=" underline xl:text-lg lg:text-lg text-xs "
          >
            Certificate
          </Link>
        </div>
        <p className="mb-4">{text}</p>
      </div>
    </>
  );
}
