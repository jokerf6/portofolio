import React from "react";
import Point from "./point.component";
import { experience } from "@/static/experience";

export default function Points() {
  return (
    <div className=" flex flex-col  w-fit  xl:px-40  lg:px-30 px-10 mb-10 mt-10">
      {experience.map((item: any) => {
        return (
          <Point
            date={item["date"]}
            text={item["brief"]}
            title={item["text"]}
            link={item["link"]}
            image={item["image"]}
          />
        );
      })}
    </div>
  );
}
