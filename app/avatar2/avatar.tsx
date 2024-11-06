"use client";
import React, { useEffect, useState } from "react";

const blockSize = 10;
const size = 100;

const Avatar2 = () => {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [avatarData, setAvatarData] = useState<string[][]>([]);

  function generateColor() {
    const baseColor = Math.floor(Math.random() * 360);

    setColor1(`hsl(${baseColor}, 70%, 50%)`);
    setColor2(`hsl(${(baseColor + 30) % 360}, 70%, 50%)`);
    setColor3(`hsl(${(baseColor - 30) % 360}, 70%, 50%)`);
  }

  const generateAvatar = () => {
    const arr: string[][] = [];
    const gridSize = 10; // assuming   a 10x10 grid

    for (let i = 0; i < gridSize; i++) {
      const row: string[] = [];
      for (let j = 0; j < gridSize / 2; j++) {
        const random = Math.floor(Math.random() * 10);
        row.push(random > 8 ? color1 : random < 4 ? color3 : color2);
      }
      // Mirror the row to make it symmetrical
      const mirroredPart = row.slice().reverse();
      row.push(...mirroredPart);
      arr.push(row);
    }

    setAvatarData(arr);
  };

  useEffect(() => {
    generateColor();
  }, []);

  useEffect(() => {
    if (color1 && color2) {
      generateAvatar();
    }
  }, [color1, color2]);

  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg">
        {avatarData.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <rect
              key={`${rowIndex}-${colIndex}`}
              x={colIndex * blockSize}
              y={rowIndex * blockSize}
              width={blockSize}
              height={blockSize}
              fill={color}
            />
          )),
        )}
      </svg>
      <button
        onClick={() => {
          generateColor();
        }}>
        Generate Color
      </button>
    </div>
  );
};

export default Avatar2;
