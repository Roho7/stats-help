import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { useRecoilValue } from "recoil";
import { Span } from "next/dist/trace";
import { TestDataAtom } from "@/app/config/atoms";

export default function Selections() {
  const testValue = useRecoilValue(TestDataAtom);
  return (
    <Card className="outline-secondary">
      <CardHeader className="flex gap-2 text-gray-500">
        <div className="flex gap-2">
          <span>
            {testValue.nature === "ordinal"
              ? "Ordinal"
              : testValue.nature === "nominal"
              ? "Nominal"
              : "Interval"}
          </span>
          Data |
          {testValue.param === "parametric" ? (
            <span>Parametric</span>
          ) : (
            <span>Non-Parametric</span>
          )}{" "}
          |<span>{testValue.iv_number} Independent Variable</span> |
          <span>{testValue.iv_levels} Levels of IV</span> |
          {testValue.subjects_rel === "between_subjects" ? (
            <span>Between Subjects</span>
          ) : (
            <span>Within Subjects</span>
          )}
        </div>
      </CardHeader>
    </Card>
  );
}
