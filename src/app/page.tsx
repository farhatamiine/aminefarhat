"use client";
import { ReactLenis, useLenis } from "@/lib/lenis";

import Hero from "@/components/layouts/hero";
import Image from "next/image";

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <ReactLenis root>
      <main className="flex">
        <div className="bg-amber-50 w-full pl-[30rem] h-[190vh]">
          <Hero />
        </div>
        <div className="fixed bg-black h-screen w-[30rem]">
          <p className="text-white">Hello</p>
        </div>
      </main>
    </ReactLenis>
  );
}
