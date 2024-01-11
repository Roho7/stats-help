import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { TestDataType } from "./page";
import { TestResults } from "@/app/config/testResult";
import Selections from "./Selections";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { TestDataAtom } from "@/app/config/atoms";

export default function Result() {
  const router = useRouter();
  const testData = useRecoilValue(TestDataAtom);
  const [result, setResult] = useState<string | null>("");

  const findMatchingTest = (userData: TestDataType): string | null => {
    for (const testResult of TestResults) {
      if (
        testResult.nature === userData.nature &&
        testResult.param === userData.param &&
        testResult.iv_number === userData.iv_number &&
        testResult.iv_levels === userData.iv_levels &&
        testResult.subjects_rel === userData.subjects_rel
      ) {
        return testResult.name;
      } else if (userData.nature === "nominal") {
        return "Chi-Square Test";
      }
    }
    return null; // No match found
  };

  useEffect(() => {
    setResult(findMatchingTest(testData));
  }, []);

  const handleRestartClick = () => {
    router.push(`/`);
  };

  return (
    <Card className="flex flex-col items-center">
      <CardHeader>
        <Selections />
      </CardHeader>
      <CardHeader className="">
        <h1>{result}</h1>
      </CardHeader>
      <CardFooter>
        <Button onClick={handleRestartClick}>Restart</Button>
      </CardFooter>
    </Card>
  );
}
