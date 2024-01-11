"use client";

import IVLevels from "./IVLevels";
import IVNumber from "./IVNumber";
import NatureOfData from "./NatureOfData";
import Parametric from "./Parametric";
import Result from "./Result";
import Selections from "./Selections";
import Subjects from "./Subjects";
import { RecoilRoot, atom } from "recoil";

export interface TestDataType {
  name: string;
  nature: "ordinal" | "interval" | "nominal";
  param: "parametric" | "non_parametric";
  iv_number: number;
  iv_levels: number;
  subjects_rel: "between_subjects" | "within_subjects";
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <RecoilRoot>
      <div className="w-screen h-screen p-2 flex flex-col gap-8 justify-center items-center">
        {/* <Selections /> */}
        {params.id === "1" && <NatureOfData />}
        {params.id === "2" && <Parametric />}
        {params.id === "3" && <IVNumber />}
        {params.id === "4" && <IVLevels />}
        {params.id === "5" && <Subjects />}
        {params.id === "6" && <Result />}
      </div>
    </RecoilRoot>
  );
}
