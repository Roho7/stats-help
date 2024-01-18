import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

import React from "react";

const videoLink = "https://www.youtube.com/shorts/1colR7T78og";

function page() {
  return (
    <div className="flex h-screen justify-center items-center">
      <Card>
        <CardHeader className="w-full h-full flex justify-center">
          <iframe
            width="100%"
            height="600px"
            src={videoLink.replace("shorts/", "embed/")}
            title="YouTube video player"
            allow="accelerometer; loop; replay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/">I would rather study</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
