// src/lib/analyzer/index.ts
import * as ts from "typescript";
import path from "path";

export interface AnalysisNode {
  type: "class" | "method" | "function";
  name: string;
  start: number;
  end: number;
  methods?: string[];
  calls?: {
    method: string;
    target: string;
    line: number;
  }[];
}

export class TypeScriptAnalyzer {
  private nodes: AnalysisNode[] = [];
  private sourceFile: ts.SourceFile | undefined;

  constructor() {}

  public analyze(fileContent: string): AnalysisNode[] {
    this.nodes = [];
    this.sourceFile = ts.createSourceFile(
      "temp.ts",
      fileContent,
      ts.ScriptTarget.Latest,
      true,
    );

    this.visitNode(this.sourceFile);
    return this.nodes;
  }

  private visitNode(node: ts.Node) {
    if (ts.isClassDeclaration(node) && node.name) {
      const classNode: AnalysisNode = {
        type: "class",
        name: node.name.getText(),
        start: node.getStart(),
        end: node.getEnd(),
        methods: [],
        calls: [],
      };

      // Find methods in the class
      node.members.forEach((member) => {
        if (ts.isMethodDeclaration(member) && member.name) {
          classNode.methods?.push(member.name.getText());
          this.analyzeMethodCalls(member, classNode);
        }
      });

      this.nodes.push(classNode);
    } else if (ts.isFunctionDeclaration(node) && node.name) {
      const functionNode: AnalysisNode = {
        type: "function",
        name: node.name.getText(),
        start: node.getStart(),
        end: node.getEnd(),
        calls: [],
      };

      this.analyzeMethodCalls(node, functionNode);
      this.nodes.push(functionNode);
    }

    ts.forEachChild(node, (child) => this.visitNode(child));
  }

  private analyzeMethodCalls(node: ts.Node, parentNode: AnalysisNode) {
    node.forEachChild((child) => {
      if (
        ts.isCallExpression(child) &&
        ts.isPropertyAccessExpression(child.expression)
      ) {
        const target = child.expression.expression.getText();
        const method = child.expression.name.getText();

        if (this.sourceFile) {
          const line =
            this.sourceFile.getLineAndCharacterOfPosition(child.getStart())
              .line + 1;
          parentNode.calls?.push({
            target,
            method,
            line,
          });
        }
      }
      this.analyzeMethodCalls(child, parentNode);
    });
  }
}
