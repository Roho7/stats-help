import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const friedmandata = [
  [8, 6, 2],
  [6, 7, 6],
  [4, 4, 9],
  [7, 8, 3],
  [7, 3, 9],
  [8, 5, 2],
];

export default function Table2() {
  const [rankedData, setRankedData] = useState<number[][]>(friedmandata);
  const [sumArray, setSumArray] = useState<number[]>([]);
  const [sumOfRanks, setSumOfRanks] = useState<number>(0);

  function rankArray(arr: number[]): number[] {
    const arrWithIndices = arr.map((value, index) => ({ value, index }));

    // Sort the array based on the value
    const sortedArr = [...arrWithIndices].sort((a, b) => a.value - b.value);

    // Assign ranks, handle ties by assigning the average rank
    const rankedArr = sortedArr.map((item, index, self) => {
      const tiedValues = self.filter(({ value }) => value === item.value);
      let rank;
      if (tiedValues.length > 1) {
        const first = tiedValues[0].index;
        const last = tiedValues[tiedValues.length - 1].index;
        rank = (first + last) / 2 + 1;
      } else {
        rank = index + 1;
      }
      return { ...item, rank };
    });

    // Sort the array back to the original order using the stored indices
    const sortedRanks = rankedArr
      .sort((a, b) => a.index - b.index)
      .map((item) => item.rank);

    return sortedRanks;
  }

  const rankTable = () => {
    setRankedData(friedmandata.map(rankArray));
  };

  const handleSumTable = () => {
    const sumArray = rankedData.reduce((acc, row) => {
      row.forEach((cell, index) => {
        acc[index] = (acc[index] || 0) + cell;
      });
      return acc;
    }, []);
    setSumArray(sumArray);
  };

  const handleSumRanks = () => {
    const sumOfNumbers = sumArray.reduce((acc, curr) => acc + curr, 0);
    setSumOfRanks(sumOfNumbers);
  };

  return (
    <div className="flex max-md:flex-col w-full gap-2 ">
      <div className="w-full">
        <h1>Step 2</h1>
        <ol className=" list-decimal p-4 space-y-2">
          <li>
            <Button onClick={rankTable}>Rank the data</Button>
            <p>Rank the entries for each subject</p>
          </li>

          <li>
            <Button onClick={handleSumTable}>Calculate Rank Totals</Button>
            <p>Calculate the sum of each condition ranks</p>
          </li>

          <li>
            <Button onClick={handleSumRanks}>Calculate Sum</Button>
            <p>Sum of ranks</p>
          </li>

          {sumOfRanks != 0 && (
            <li>
              <strong>Total:</strong> <span> {sumArray[0]}</span> +{" "}
              <span> {sumArray[1]}</span> + <span> {sumArray[2]}</span> ={" "}
              {sumOfRanks}
            </li>
          )}
        </ol>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Condition 1</th>
            <th>Condition 2</th>
            <th>Condition 3</th>
          </tr>
        </thead>
        <tbody>
          {rankedData.map((row: number[], index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
          {sumArray.length > 0 && (
            <tr>
              <td className="font-bold">Sum</td>
              {sumArray.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
