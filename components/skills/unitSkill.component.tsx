import React from "react";

export default function UnitSkill(props: { src: string }) {
  const { src } = props;
  return <img src={src} className=" w-10 h-fit " />;
}
