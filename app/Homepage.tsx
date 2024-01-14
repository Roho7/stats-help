import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { DarkModeAtom } from "./_config/atoms";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

export default function Homepage() {
  const [dark, setDark] = useRecoilState(DarkModeAtom);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="w-screen min-h-screen flex flex-col items-center justify-center p-8 md:p-24 space-y-5 dark:bg-black">
        <div className="flex items-center gap-2">
          <Sun className={dark && "text-white"} />
          <Switch
            id="dark-mode"
            checked={dark}
            onCheckedChange={() => setDark(!dark)}
          />
          <Moon className={dark && "text-white"} />
        </div>
        <h1 className="text-3xl">Stats Test Finder</h1>
        <Card className="p-4 flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl">Know which test is right for you</h1>
          <Button asChild>
            <Link href="/stats/1">Begin</Link>
          </Button>
        </Card>
      </main>
    </div>
  );
}
