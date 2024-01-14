import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { useRecoilValue } from "recoil";
import { Span } from "next/dist/trace";
import { TestDataAtom } from "@/app/_config/atoms";

export default function Selections() {
  const testValue = useRecoilValue(TestDataAtom);
  return (
    <div className="flex max-md:flex-col gap-2">
      <Card className="outline-secondary">
        <CardHeader className="flex text-gray-500">
          <span>
            {testValue.nature === "ordinal"
              ? "Ordinal"
              : testValue.nature === "nominal"
              ? "Nominal"
              : "Interval"}{" "}
            Data
          </span>
        </CardHeader>
      </Card>
      <Card className="outline-secondary">
        <CardHeader className="flex gap-2 text-gray-500">
          {testValue.param === "parametric" ? (
            <span>Parametric</span>
          ) : (
            <span>Non-Parametric</span>
          )}
        </CardHeader>
      </Card>
      <Card className="outline-secondary">
        <CardHeader className="flex gap-2 text-gray-500">
          <span>{testValue.iv_number} Independent Variable</span>
        </CardHeader>
      </Card>
      <Card className="outline-secondary">
        <CardHeader className="flex gap-2 text-gray-500">
          <span>{testValue.iv_levels} Levels of IV</span>
        </CardHeader>
      </Card>
      <Card className="outline-secondary">
        <CardHeader className="flex gap-2 text-gray-500">
          {testValue.subjects_rel === "between_subjects" ? (
            <span>Between Subjects</span>
          ) : (
            <span>Within Subjects</span>
          )}
        </CardHeader>
      </Card>
    </div>
  );
}
