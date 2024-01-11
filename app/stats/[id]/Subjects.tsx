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
import { TestDataAtom } from "@/app/config/atoms";

export default function Subjects() {
  const router = useRouter();
  const params = useParams();
  const [testData, setTestData] = useRecoilState(TestDataAtom);
  const [selected, setSelected] = useState("");

  const paramId = parseInt(params.id[0]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.value);
    setTestData((prev: TestDataType) => ({
      ...prev,
      subjects_rel: e.currentTarget.value,
    }));
  };
  const handleNextClick = () => {
    router.push(`/stats/${paramId + 1}`);
  };
  const handlePrevClick = () => {
    router.push(`/stats/${paramId - 1}`);
  };
  return (
    <Card className=" w-1/3">
      <CardHeader>
        <CardTitle>
          Are you comparing within subjects or between subjects?
        </CardTitle>
        <CardDescription>
          Are you observing the same group of people or different groups of
          people?
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant={selected === "between_subjects" ? "default" : "outline"}
              className="p-8"
              value="between_subjects"
              onClick={handleButtonClick}
            >
              Between Subjects
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className=" bg-white border border-secondary p-4 rounded-md shadow-lg">
            <p>
              Different groups of people presented with different conditions.
            </p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant={selected === "within_subjects" ? "default" : "outline"}
              className="p-8"
              value="within_subjects"
              onClick={handleButtonClick}
            >
              Within Subjects
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className=" bg-white border border-secondary p-4 rounded-md shadow-lg">
            <p>Same group of people presented with different conditions.</p>
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
