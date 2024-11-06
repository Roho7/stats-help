"use client";

import { useState } from "react";
import Mermaid from "react-mermaid2";
import { TypeScriptAnalyzer } from "./_utils/ts-analyzer";
import { DiagramGenerator } from "./_utils/mermaid";

const sampleCode = `
class UserService {
  constructor(private db: Database) {}

  async getUser(id: string) {
    const user = await this.db.query(id);
    return user;
  }

  async updateUser(id: string, data: UserData) {
    await this.db.update(id, data);
    await this.notificationService.notify('user_updated');
    return true;
  }
}
`;

// const sampleCode = `
// async function getUser(id: number) {
//     return { id, name: "John Doe" };
// }

// async function main() {
//     const user = await getUser(1);
//     console.log(user);
// }
// `;

export default function CodeAnalyzer() {
  const [code, setCode] = useState(sampleCode);
  const [diagrams, setDiagrams] = useState<{
    sequence?: string;
    class?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  const analyzeCode = async () => {
    setLoading(true);
    try {
      const analyzer = new TypeScriptAnalyzer();
      const nodes = analyzer.analyze(code);
      const diagrams = new DiagramGenerator().generateClassDiagram(nodes);
      const sequence = new DiagramGenerator().generateSequenceDiagram(nodes);

      setDiagrams({
        class: diagrams,
        sequence,
      });
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TypeScript Code Analyzer</h1>

      <div className="mb-4">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-64 p-2 border rounded font-mono text-sm"
          placeholder="Paste your TypeScript code here..."
        />
      </div>

      <button
        onClick={analyzeCode}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-blue-300"
      >
        {loading ? "Analyzing..." : "Analyze Code"}
      </button>

      {diagrams.sequence && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Sequence Diagram</h2>
          <div className="border p-4 rounded bg-white">
            <Mermaid chart={diagrams.sequence} />
          </div>
        </div>
      )}

      {diagrams.class && (
        <div className="mt-8 w-full">
          <h2 className="text-xl font-bold mb-2">Class Diagram</h2>
          <div className="border p-4 rounded bg-white w-full">
            <Mermaid chart={diagrams.class} />

            <pre className="mermaid">{diagrams.class}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
