// src/lib/diagram-generator/index.ts

import { AnalysisNode } from "./ts-analyzer";

export interface DiagramGeneratorType {
  generateSequenceDiagram: (nodes: AnalysisNode[]) => string;
  generateClassDiagram: (nodes: AnalysisNode[]) => string;
}

export class DiagramGenerator implements DiagramGeneratorType {
  generateSequenceDiagram(nodes: AnalysisNode[]): string {
    let diagram = "sequenceDiagram\n";

    nodes.forEach((node) => {
      if (node.calls) {
        node.calls.forEach((call: any) => {
          diagram += `    ${node.name}->>+${call.target}: ${call.method}()\n`;
        });
      }
    });

    return diagram;
  }

  generateClassDiagram(nodes: AnalysisNode[]): string {
    let diagram = "classDiagram\n";

    nodes.forEach((node) => {
      if (node.type === "class") {
        diagram += `    class ${node.name} {\n`;
        if (node.methods) {
          node.methods.forEach((method) => {
            diagram += `        +${method}()\n`;
          });
        }
        diagram += "    }\n";
      }
    });

    return diagram;
  }
}
