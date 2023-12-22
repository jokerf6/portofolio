import React from "react";

export default function UnitSkill(props: { src: string }) {
  const { src } = props;
  return (
    <img src={src} className=" w-10 h-10 " style={{ objectFit: "cover" }} />
  );
}
