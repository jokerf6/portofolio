import React from "react";

export default function Title(props: { title: string }) {
  const { title } = props;
  return (
    <div className=" w-full flex items-center  justify-center">
      <h1
        className=" text-4xl font-bold overflow-hidden w-fit"
        style={{ borderBottom: "10px solid #ffb000" }}
      >
        {title}
      </h1>
    </div>
  );
}
