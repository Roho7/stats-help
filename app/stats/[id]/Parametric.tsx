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
import { useParams, useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { TestDataType } from "./page";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestDataAtom } from "@/app/_config/atoms";

export default function Parametric() {
  const router = useRouter();
  const params = useParams();
  const [testData, setTestData] = useRecoilState(TestDataAtom);
  const [selected, setSelected] = useState("");

  const paramId = parseInt(params.id[0]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.value);
    setTestData((prev: TestDataType) => ({
      ...prev,
      param: e.currentTarget.value,
    }));
  };
  const handleNextClick = () => {
    router.push(`/stats/${paramId + 1}`);
  };
  const handlePrevClick = () => {
    router.push(`/stats/${paramId - 1}`);
  };

  return (
    <Card className="md:min-w-1/3">
      <CardHeader>
        <CardTitle>Is your data Parametric or Non-Parametric?</CardTitle>
        <CardDescription>
          Think about the distribution of your data.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex max-md:flex-col justify-between">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant={selected === "parametric" ? "default" : "outline"}
              className="p-8"
              value="parametric"
              onClick={handleButtonClick}
            >
              Parametric
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className=" bg-white border border-secondary p-4 rounded-md shadow-lg">
            <p>Follows normal distribution or is a large dataset.</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant={selected === "non_parametric" ? "default" : "outline"}
              className="p-8"
              value="non_parametric"
              onClick={handleButtonClick}
            >
              Non-Parametric
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className=" bg-white border border-secondary p-4 rounded-md shadow-lg">
            <p>Does not follow normal distrubution or is a small dataset.</p>
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
