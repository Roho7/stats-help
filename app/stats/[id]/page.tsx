"use client";

import { DarkModeAtom } from "@/app/_config/atoms";
import IVLevels from "./IVLevels";
import IVNumber from "./IVNumber";
import NatureOfData from "./NatureOfData";
import Parametric from "./Parametric";
import Result from "./Result";
import Subjects from "./Subjects";
import { RecoilRoot, atom, useRecoilValue } from "recoil";
import { cn } from "@/lib/utils";

export interface TestDataType {
  name: string;
  nature: "ordinal" | "interval" | "nominal";
  param: "parametric" | "non_parametric";
  iv_number: number;
  iv_levels: number;
  subjects_rel: "between_subjects" | "within_subjects";
  link?: string;
  video?: string;
}

const componentMap = {
  "1": NatureOfData,
  "2": Parametric,
  "3": IVNumber,
  "4": IVLevels,
  "5": Subjects,
  "6": Result,
};

export default function Page({ params }: { params: { id: string } }) {
  const Component = componentMap[params.id as keyof typeof componentMap];
  const dark = useRecoilValue(DarkModeAtom);

  return (
    <RecoilRoot>
      <div className={dark ? "dark" : ""}>
        <div className="w-screen min-h-screen p-2 flex flex-col gap-8 justify-center items-center dark:bg-black">
          {Component && <Component />}
        </div>
      </div>
    </RecoilRoot>
  );
}
