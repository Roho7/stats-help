import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ttestwithindata } from "./Table1";

export default function Table2() {
  const [differences, setDifferences] = useState<number[]>();
  const [differenceSquare, setDifferenceSquare] = useState<number[]>([]);
  const [sumOfDiff, setSumOfDiff] = useState<boolean>(false);

  const handleCalculateDifference = () => {
    const difference = ttestwithindata.map((row) => {
      const diff = row[0] - row[1];
      return diff;
    });
    setDifferences(difference);
  };

  const handleDifferenceSquare = () => {
    const square = differences?.map((diff) => diff * diff);
    setDifferenceSquare(square!);
  };

  return (
    <div className="flex w-full gap-2 ">
      <div className="w-full">
        <h1>Step 2</h1>
        <ul>
          <li>Calculate the Differences</li>
          <Button onClick={handleCalculateDifference}>Calculate</Button>
          <li>Calculate Squares</li>
          <Button onClick={handleDifferenceSquare}>Calculate</Button>
          <li>Calculate sums</li>
          <Button onClick={() => setSumOfDiff(true)}>Calculate</Button>
        </ul>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Condition 1</th>
            <th>Condition 2</th>
            <th>Difference</th>
            <th>Diff Squared</th>
          </tr>
        </thead>
        <tbody>
          {ttestwithindata.map((row: number[], index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
              <td>{differences && differences[index]}</td>
              <td>{differenceSquare[index]}</td>
            </tr>
          ))}
          {sumOfDiff && (
            <tr className="font-bold">
              <td>Sum</td>
              <td></td>
              <td></td>
              <td>{differences && differences.reduce((a, b) => a + b, 0)}</td>
              <td>
                {differenceSquare &&
                  differenceSquare.reduce((a, b) => a + b, 0)}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
