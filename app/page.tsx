"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  console.log(process.env.API_KEY);

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center p-24 space-y-5">
      <h1 className="text-xl">Know which test is right for you</h1>
      <Button asChild>
        <Link href="/stats/1">Begin</Link>
      </Button>
    </main>
  );
}
