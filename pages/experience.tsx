import Contact from "@/components/contact/main.component";
import Experience from "@/components/experience/main.component";
import HeaderMain from "@/components/home/header.component";
import Head from "next/head";
import React from "react";

export default function ExperiencePage() {
  return (
    <main
      className={`flex overflow-x-hidden min-h-screen w-full flex-col  m-0 p-0`}
    >
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <title>Experience</title>
      </Head>
      <HeaderMain now={1} />
      <Experience />
      <Contact />
    </main>
  );
}
