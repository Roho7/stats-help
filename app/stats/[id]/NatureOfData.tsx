import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { TestDataType } from "./page";
import { useState } from "react";
import { TestDataAtom } from "@/app/config/atoms";

export default function NatureOfData() {
  const router = useRouter();
  const params = useParams();
  const [testData, setTestData] = useRecoilState(TestDataAtom);
  const [selected, setSelected] = useState("");

  const paramId = parseInt(params.id[0]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.value);
    setTestData((prev: TestDataType) => ({
      ...prev,
      nature: e.currentTarget.value,
    }));
  };
  const handleNextClick = () => {
    router.push(`/stats/${paramId + 1}`);
  };
  const handlePrevClick = () => {
    router.push(`/`);
  };

  return (
    <Card className=" w-1/3">
      <CardHeader>
        <CardTitle>What type of data do you have?</CardTitle>
        <CardDescription>Think about the nature of your data.</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant={selected === "interval" ? "default" : "outline"}
              className="p-8"
              value="interval"
              onClick={handleButtonClick}
            >
              Interval
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className=" bg-white border border-secondary p-4 rounded-md shadow-lg">
            <p>Measurements that can be put on a scale. e.g. temperature</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant={selected === "ordinal" ? "default" : "outline"}
              className="p-8"
              value="ordinal"
              onClick={handleButtonClick}
            >
              Ordinal
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className=" bg-white border border-secondary p-4 rounded-md shadow-lg">
            <p>Qualitative catagories with ranking. e.g. satisfaction level</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant={selected === "nominal" ? "default" : "outline"}
              className="p-8"
              value="nominal"
              onClick={handleButtonClick}
            >
              Nominal
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className=" bg-white border border-secondary p-4 rounded-md shadow-lg">
            <p>Catagories without any ranking. e.g. colours</p>
          </HoverCardContent>
        </HoverCard>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handlePrevClick}>
          <ChevronLeft /> Prev
        </Button>
        <Button onClick={handleNextClick}>
          Next <ChevronRight />
        </Button>
      </CardFooter>
    </Card>
  );
}
