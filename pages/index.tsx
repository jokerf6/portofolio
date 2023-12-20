import Image from "next/image";
import { Inter } from "next/font/google";
import HeaderMain from "@/components/home/header.component";
import Right from "@/components/home/main/right.component";
import Left from "@/components/home/main/left.component";
import Skills from "@/components/skills/skills.component";
import Welcome from "@/components/home/welcome.component";
import Title from "@/components/default/title.component";
import Experience from "@/components/experience/main.component";
import Projects from "@/components/projects/main.component";
import Contact from "@/components/contact/main.component";
import Head from "next/head";
import Taps from "@/components/projects/taps.component";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [now, setNow] = useState(1);
  return (
    <main
      className={`flex overflow-x-hidden min-h-screen w-full flex-col  ${inter.className}  m-0 p-0`}
    >
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <title>Home</title>
      </Head>
      <div className=" w-screen h-screen flex flex-col">
        <HeaderMain now={0} />
        <Welcome />
      </div>
      <Skills />
      <Experience />
      <Projects now={now} />
      <Taps now={now} setNow={setNow} />
      <Contact />
    </main>
  );
}
