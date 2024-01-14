export const friedmandata = [
  [8, 6, 2],
  [6, 7, 6],
  [4, 4, 9],
  [7, 8, 3],
  [7, 3, 9],
  [8, 5, 2],
];

export default function Table1() {
  return (
    <div className="flex max-md:flex-col w-full">
      <div className="w-full">
        <h1>Step 1</h1>
        <ul>
          <li>This is your dataset</li>
          <li>N = 6</li>
          <li>k = 3</li>
          <li>a = 0.05</li>
        </ul>
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
          {friedmandata.map((row, index) => (
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
