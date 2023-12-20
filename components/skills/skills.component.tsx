import UnitSkill from "./unitSkill.component";
import { line1, line2, line3 } from "@/static/skills";
import React, { useRef, useEffect, useState } from "react";

export default function Skills() {
  const [items, setItems] = useState<string[]>([...line1]);

  return (
    <div className=" w-screen  overflow-hidden h-fit mt-5">
      <div className="flex  mb-12 w-full  flex-row  xl:gap-40 lg:gap-40 md:gap-28 gap-20 items-center slider">
        {items.map((item, indx) => {
          return <UnitSkill src={item} key={indx} />;
        })}
      </div>
      <div className="flex w-full mb-12  flex-row   xl:gap-40 lg:gap-40 md:gap-28 gap-20 items-center  slider2 ">
        {line2.map((item, indx) => {
          return <UnitSkill key={indx} src={item} />;
        })}
      </div>
      <div className="flex w-full  mb-12 flex-row   xl:gap-40 lg:gap-40 md:gap-28 gap-20 items-center  slider3 ">
        {line3.map((item, indx) => {
          return <UnitSkill key={indx} src={item} />;
        })}
      </div>
    </div>
  );
}
