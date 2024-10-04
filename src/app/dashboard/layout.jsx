"use client";
import { useState } from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

export const dynamic = "force-dynamic";

export default function DashboardLayout({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <main className='relative flex gap-1 items-start'>
      <Sidebar toggle={toggle} setToggle={setToggle} />
      <article className='w-full'>
        <Header toggle={toggle} setToggle={setToggle} />
        <div className='h-screen overflow-y-scroll'>{children}</div>
      </article>
      ;
    </main>
  );
}
