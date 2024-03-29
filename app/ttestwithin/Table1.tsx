export const ttestwithindata = [
  [8, 6],
  [6, 7],
  [4, 4],
  [7, 8],
  [7, 3],
  [8, 5],
];

export default function Table1() {
  return (
    <div className="flex w-full max-md:flex-col ">
      <div className="w-full">
        <h1>Step 1</h1>
        <ul>
          <li>This is your dataset</li>
          <li>N = 6</li>
          <li>k = 2</li>
          <li>a = 0.05</li>
        </ul>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Condition 1</th>
            <th>Condition 2</th>
          </tr>
        </thead>
        <tbody>
          {ttestwithindata.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
