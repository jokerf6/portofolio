import React from "react";

export default function Taps(props: { now: number; setNow: any }) {
  const { now, setNow } = props;
  return (
    <div className=" w-full mt-5 flex justify-center items-center gap-2">
      <div
        className={` bg-main2 text-orange p-2 text-center px-4 ${
          now === 2 ? "cursor-pointer" : "opacity-25"
        }`}
        onClick={() => {
          if (now === 2) setNow(1);
        }}
      >
        Pre
      </div>
      <div
        onClick={() => setNow(1)}
        className={` ${
          now === 1 ? " bg-orange text-white" : "bg-main2 text-orange"
        } p-2 px-4 text-center rounded-full cursor-pointer hover:bg-orange hover:text-white hover:shadow-xl`}
      >
        1
      </div>
      <div
        onClick={() => setNow(2)}
        className={` ${
          now === 2 ? " bg-orange text-white" : "bg-main2 text-orange"
        } p-2 px-4 text-center rounded-full cursor-pointer hover:bg-orange hover:text-white hover:shadow-xl `}
      >
        2
      </div>
      <div
        onClick={() => {
          if (now === 1) setNow(2);
        }}
        className={` bg-main2 text-orange p-2 text-center px-4 ${
          now === 1 ? "cursor-pointer" : "opacity-25"
        }`}
      >
        Next
      </div>
    </div>
  );
}
