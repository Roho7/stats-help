"use client";

import { RecoilRoot } from "recoil";

const StatsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <RecoilRoot>{children}</RecoilRoot>
    </div>
  );
};

export default StatsLayout;
