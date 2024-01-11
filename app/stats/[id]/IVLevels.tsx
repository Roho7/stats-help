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

export default function IVLevels() {
  const router = useRouter();
  const params = useParams();
  const [testData, setTestData] = useRecoilState(TestDataAtom);
  const [selected, setSelected] = useState<number>();

  const paramId = parseInt(params.id[0]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(parseInt(e.currentTarget.value));
    setTestData((prev: TestDataType) => ({
      ...prev,
      iv_levels: parseInt(e.currentTarget.value),
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
        <CardTitle>
          How many levels of Independant Variables do you have?
        </CardTitle>
        <CardDescription>
          The number of times you have taken observations for comparison.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex max-md:flex-col justify-between">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant={selected === 2 ? "default" : "outline"}
              className="p-8"
              value={2}
              onClick={handleButtonClick}
            >
              Two
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className=" bg-white border border-secondary p-4 rounded-md shadow-lg">
            <p>Having just two observations.</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant={selected === 3 ? "default" : "outline"}
              className="p-8"
              value={3}
              onClick={handleButtonClick}
            >
              Three or more
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className=" bg-white border border-secondary p-4 rounded-md shadow-lg">
            <p>Have taken more than two observations.</p>
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
