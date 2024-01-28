"use client";

import mountainLeft from "../../public/mount-left.png";
import mountainRight from "../../public/mount-right.png";
import mountainFore from "../../public/mount-fore.png";
import sun from "../../public/sun.png";
import house from "../../public/house.png";
import bg from "../../public/bg.png";
import leaves from "../../public/leaves.png";
import tree from "../../public/tree.png";
import vines from "../../public/vines.png";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import snow from "./snow.module.scss";

export default function Page() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  (function () {
    if (typeof window === "undefined") return;
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event: any) {
      var eventDoc, doc, body;

      event = event || window.event; // IE-ism

      // If pageX/Y aren't available and clientX/Y are,
      // calculate pageX/Y - logic taken from jQuery.
      // (This is to support old IE)
      if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX =
          event.clientX +
          ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
          ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
        event.pageY =
          event.clientY +
          ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
          ((doc && doc.clientTop) || (body && body.clientTop) || 0);
      }

      // Use event.pageX / event.pageY here
      setMouseX(event.pageX);
      setMouseY(event.pageY);
    }
  })();

  return (
    <motion.div className="relative h-screen overflow-hidden">
      {Array(20)
        .fill(null)
        .map((_, i) => {
          return <div className={snow.snowflake} key={i}></div>;
        })}
      <motion.div
        className="absolute -left-10 -top-10 z-50 w-100 blur-md"
        animate={{
          translateX: -mouseX / 120,
          translateY: -mouseY / 70,
        }}>
        <Image src={vines} alt="bg" />
      </motion.div>
      <motion.div
        className="absolute -left-[60vw] -top-[50vh] z-40 w-[90vw] blur-sm"
        animate={{
          translateX: mouseX / 80,
          translateY: mouseY / 45,
        }}>
        <Image src={tree} alt="bg" />
      </motion.div>
      <motion.div
        className="absolute -left-30 -bottom-10 z-50 w-100 blur-md"
        animate={{
          translateX: -mouseX / 20,
          translateY: -mouseY / 70,
          skewX: "0.2deg",
        }}>
        <Image src={leaves} alt="bg" />
      </motion.div>
      <motion.div
        className="absolute right-0 -bottom-10 z-50 w-80 blur-sm"
        animate={{
          translateX: mouseX / 20,
          translateY: -mouseY / 70,
          skewX: "0.2deg",
          skewY: "0.2deg",
        }}>
        <Image src={leaves} alt="bg" className="scale-x-[-1]" />
      </motion.div>
      <motion.div
        className="absolute -left-80 -bottom-32 z-[45] w-[100vw] blur-[8px]"
        animate={{ translateX: mouseX / 100, translateY: mouseY / 70 }}>
        <Image src={mountainFore} alt="bg" />
      </motion.div>
      <motion.div
        className="absolute -bottom-10 right-20 z-40 w-[50vw]"
        animate={{ translateX: -mouseX / 40, translateY: -mouseY / 40 }}>
        <Image src={house} alt="bg" />
      </motion.div>
      <motion.div
        className="absolute right-0 bottom-0 z-30 w-[80vw] blur-[2px]"
        animate={{ translateX: mouseX / 100, translateY: mouseY / 60 }}>
        <Image src={mountainRight} alt="bg" />
      </motion.div>
      <motion.div
        className="absolute -left-20 bottom-0 z-20 blur-[4px]"
        animate={{ translateX: mouseX / 100, translateY: mouseY / 90 }}>
        <Image src={mountainLeft} alt="bg" />
      </motion.div>
      <motion.div
        className="absolute inset-0 z-10"
        animate={{ translateX: -mouseX / 80, translateY: mouseY / 50 }}>
        <Image src={sun} alt="bg" />
      </motion.div>
      <motion.div>
        <Image src={bg} alt="bg" className="absolute inset-0" />
      </motion.div>
    </motion.div>
  );
}
