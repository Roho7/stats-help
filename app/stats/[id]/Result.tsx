import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { TestDataType } from "./page";
import { TestResults } from "@/app/config/testResult";
import Selections from "./Selections";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { TestDataAtom } from "@/app/config/atoms";

type ResultType = {
  name: string;
  link?: string;
  video?: string;
};

export default function Result() {
  const router = useRouter();
  const testData = useRecoilValue(TestDataAtom);
  const [result, setResult] = useState<ResultType | null>(null);

  const findMatchingTest = (userData: TestDataType): ResultType | null => {
    for (const testResult of TestResults) {
      if (
        testResult.nature === userData.nature &&
        testResult.param === userData.param &&
        testResult.iv_number === userData.iv_number &&
        testResult.iv_levels === userData.iv_levels &&
        testResult.subjects_rel === userData.subjects_rel
      ) {
        return {
          name: testResult.name,
          link: testResult.link,
          video: testResult.video,
        };
      } else if (userData.nature === "nominal") {
        return { name: "Chi-Square Test" };
      }
    }
    return { name: "Nothing found" }; // No match found
  };

  useEffect(() => {
    setResult(findMatchingTest(testData));
  }, []);

  const handleRestartClick = () => {
    router.push(`/`);
  };

  return (
    <Card className="flex flex-col items-center text-center">
      <CardHeader>
        <Selections />
      </CardHeader>
      <CardHeader className="">
        <h2>The correct test for your data is:</h2>
        <h1>{result?.name}</h1>
        {result?.link && (
          <Button
            variant="secondary"
            onClick={() => {
              router.push(`${result?.link}`);
            }}
          >
            Perform Test
          </Button>
        )}
      </CardHeader>
      {result?.video && (
        <CardContent className="w-full h-full flex justify-center">
          <iframe
            width="100%"
            height="200px"
            src={result?.video?.replace("watch?v=", "embed/")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
        </CardContent>
      )}
      <CardFooter>
        <Button onClick={handleRestartClick}>Restart</Button>
      </CardFooter>
    </Card>
  );
}
