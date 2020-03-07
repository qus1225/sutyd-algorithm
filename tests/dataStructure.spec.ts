import { Graph } from "../dataStructure/graph";

describe("DataStructure 중", () => {
  it("Graph는 잘 동작한다.", () => {
    const graph = new Graph();
    const myVertices = ["A", "B", "C", "D", "E", "F", "G"];
    myVertices.forEach((_, i) => {
      graph.addVertex(myVertices[i]);
    });
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("A", "D");
    graph.addEdge("C", "D");
    graph.addEdge("C", "G");
    graph.addEdge("D", "E");
    graph.addEdge("B", "F");

    expect(graph.vertices).toEqual(["A", "B", "C", "D", "E", "F", "G"]);
    expect(graph.adjList).toEqual({
      A: ["B", "C", "D"],
      B: ["A", "F"],
      C: ["A", "D", "G"],
      D: ["A", "C", "E"],
      E: ["D"],
      F: ["B"],
      G: ["C"]
    });
  });

  it("Graph는 BFS는 잘 동작한다.", () => {
    const graph = new Graph();
    const myVertices = [1, 2, 3, 4];
    myVertices.forEach((_, i) => {
      graph.addVertex(myVertices[i]);
    });
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);
    graph.addEdge(2, 4);
    graph.addEdge(3, 4);

    expect(graph.vertices).toEqual([1, 2, 3, 4]);
    expect(graph.adjList).toEqual({
      1: [2, 3, 4],
      2: [1, 4],
      3: [1, 4],
      4: [1, 2, 3]
    });

    console.log(graph.bfs(1));

    // console.log("graph", graph);
  });
});
