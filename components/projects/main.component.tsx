import React, { useEffect, useState } from "react";
import Title from "../default/title.component";
import Project from "./project.component";
import { projects } from "@/static/projects";

export default function Projects(props: { now: number }) {
  const { now } = props;
  const [list, setList] = useState<any>();
  useEffect(() => {
    console.log(now);
    if (now === 1) {
      const temp = projects.slice(0, 6);
      setList(temp);
    } else {
      const temp = projects.slice(6, 12);
      setList(temp);
    }
  }, [list]);
  //
  return (
    <div className="w-screen  flex flex-col  mt-10 xl:px-40  lg:px-30 px-10">
      <Title title="Projects" />
      <div className=" flex overflow-x-auto flex-wrap relative justify-center w-full gap-2  hide-scrollbar overflow mt-5">
        {list &&
          list.map((item: any, idx: number) => {
            return (
              <Project
                key={idx}
                image={item["image"]}
                tools={item["tools"]}
                title={item["title"]}
                brief={item["brief"]}
                freelance={item["freelance"]}
                link={item["link"]}
              />
            );
          })}
      </div>
    </div>
  );
}
