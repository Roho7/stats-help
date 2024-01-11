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

export default function IVNumber() {
  const router = useRouter();
  const params = useParams();
  const [testData, setTestData] = useRecoilState(TestDataAtom);
  const [selected, setSelected] = useState<number>();

  const paramId = parseInt(params.id[0]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(parseInt(e.currentTarget.value));
    setTestData((prev: TestDataType) => ({
      ...prev,
      iv_number: parseInt(e.currentTarget.value),
    }));
  };
  const handleNextClick = () => {
    router.push(`/stats/${paramId + 1}`);
  };
  const handlePrevClick = () => {
    router.push(`/stats/${paramId - 1}`);
  };

  return (
    <Card className=" md:w-1/3">
      <CardHeader>
        <CardTitle>How many Independant Variables do you have?</CardTitle>
        <CardDescription>
          The number of factors you are measuring in your experiment.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex max-md:flex-col justify-between">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant={selected === 1 ? "default" : "outline"}
              className="p-8"
              value={1}
              onClick={handleButtonClick}
            >
              One
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className=" bg-white border border-secondary p-4 rounded-md shadow-lg">
            <p>Just comparing one thing against a control.</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant={selected === 2 ? "default" : "outline"}
              className="p-8"
              value={2}
              onClick={handleButtonClick}
            >
              Two or more
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className=" bg-white border border-secondary p-4 rounded-md shadow-lg">
            <p>Comparing more than one things against a control.</p>
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
