"use client";
import Table1 from "./Table1";
import Table2 from "./Table2";

export default function TableComponent() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-4xl text-center mb-4">Friedman Test</h1>
      <div className="flex justify-between border border-border rounded-md p-4">
        <Table1 />
      </div>
      <div className="flex p-4 justify-between w-full border border-border rounded-md">
        <Table2 />
      </div>
    </div>
  );
}
