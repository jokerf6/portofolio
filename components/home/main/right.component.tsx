import Image from "next/image";
import React from "react";

export default function Right() {
  return (
    <div className="   rounded-full shadow-lg shadow-orange">
      <Image
        width={500}
        height={450}
        alt={"my self"}
        src="/images/me2.png"
        className="rounded-full xl:flex lg:flex hidden w-w-500 h-h-450 "
      />
      <Image
        width={300}
        height={300}
        alt={"my self"}
        src="/images/me2.png"
        className="rounded-full xl:hidden lg:hidden md:flex hidden  md:w-w-300  md:h-h-300 "
      />
      <Image
        width={200}
        height={200}
        alt={"my self"}
        src="/images/me2.png"
        className="rounded-full  xl:hidden lg:hidden md:hidden flex w-w-200 h-h-200"
      />
    </div>
  );
  //xl:w-w-500 lg:w-w-500 md:w-w-300h-h-200 xl:h-h-450 lg:h-h-450 md:h-h-300 h-h-200
}
