"use client";

import { RecoilRoot, useRecoilValue } from "recoil";

import Homepage from "./Homepage";

export default function Home() {
  return (
    <RecoilRoot>
      <Homepage />
    </RecoilRoot>
  );
}
