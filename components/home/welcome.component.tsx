import React from "react";
import Left from "./main/left.component";
import Right from "./main/right.component";

export default function Welcome() {
  return (
    <div className="    w-scrren    flex flex-1     items-center xl:justify-between lg:justify-between justify-center  xl:flex-row lg:flex-row md:flex-col-reverse flex-col-reverse  xl:px-40 lg:px-30 px-10 xl:gap-0 lg:gap-0 md:gap-8 gap-6  ">
      <Left />
      <Right />
    </div>
  );
}
