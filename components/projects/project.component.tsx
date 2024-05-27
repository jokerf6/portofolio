import React from "react";
import ViewCode from "../default/viewCode.component";

export default function Project(props: {
  image: string;
  tools: string[];
  title: string;
  brief: string;
  freelance: boolean;
  link: string;
  internship: boolean;
}) {
  const { image, tools, title, brief, freelance, link, internship } = props;
  return (
    <div
      className=" px-2 flex flex-col rounded-md  bg-main2 h-fit "
      style={{ width: "300px" }}
    >
      <div className=" py-2">
        <img
          src={image}
          className="rounded-md w-full"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </div>
      <div className=" flex flex-col">
        <div className=" flex flex-row gap-2 flex-wrap">
          {tools.map((item: string, idx: number) => {
            return (
              <span
                key={idx}
                className=" py-1 px-1 text-orange bg-main3 rounded-md text-sm"
              >
                {item}
              </span>
            );
          })}
        </div>
        <h1 className=" mt-3 text-xl font-bold ">{title}</h1>
        <p className=" w-full break-words text-sm pb-2">{brief}</p>

        <ViewCode freelance={freelance} internship={internship} link={link} />
      </div>
    </div>
  );
}
