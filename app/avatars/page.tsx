"use client";
import React, { useState } from "react";
import Avatar from "avatar-generator";
import Avatar2 from "../avatar2/avatar";

const Page = () => {
  const [color, setColor] = useState("red");
  const [seed, setSeed] = useState("");
  const emailMap = ["blex@gmail.com", "hose@yahoo.mail", "coho@gmail.com"];

  const generateColor = (type: string, seed: string) => {
    // A simple hash function to get consistent colors based on seed and type
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8 + type.charCodeAt(0))) & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }
    setColor(color);
  };

  return (
    <div className="flex gap-2 items-center justify-center h-screen">
      <div>
        <Avatar seed="alex" />
        seed: alex
      </div>
      <div>
        <Avatar seed="roho" />
        seed: roho
      </div>

      <div style={{ backgroundColor: color }} className="h-5 w-5"></div>
      <input
        type="text"
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
      />
      <button onClick={() => generateColor("hair", seed)}>Change Color</button>

      <div className="">
        <Avatar2 />
      </div>
    </div>
  );
};

export default Page;
