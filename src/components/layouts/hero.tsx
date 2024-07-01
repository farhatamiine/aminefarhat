import React from "react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col space-y-8 items-center justify-center">
      <h2 className="text-4xl font-bold">Hi ✌️, I’m Amine Farhat</h2>
      <p className="text-base font-light">
        I'm a{" "}
        <span className="font-bold underline underline-offset-2">
          software engineer
        </span>{" "}
        specializing in crafting robust and efficient software solutions that
        empower businesses to achieve their goals
      </p>
      <Button className="text-lg uppercase">🤙 Hire Me </Button>
    </div>
  );
}
