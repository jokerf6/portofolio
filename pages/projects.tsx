import Contact from "@/components/contact/main.component";
import HeaderMain from "@/components/home/header.component";
import Projects from "@/components/projects/main.component";
import Head from "next/head";
import React from "react";

export default function ProjectsPage() {
  return (
    <main
      className={`flex overflow-x-hidden min-h-screen w-full flex-col  m-0 p-0`}
    >
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <title>Projects</title>
      </Head>
      <HeaderMain now={2} />
      <Projects />
      <Contact />
    </main>
  );
}
