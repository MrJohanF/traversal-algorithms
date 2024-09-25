// graph-traversal.js

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }


    
    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }

    dfs(start) {
        const result = [];
        const visited = {};

        const dfsHelper = (vertex) => {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfsHelper(neighbor);
                }
            });
        }

        dfsHelper(start);
        return result;
    }
}

// Ejemplo de uso
const graph = new Graph();
['A', 'B', 'C', 'D', 'E', 'F'].forEach(vertex => graph.addVertex(vertex));
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log("Recorrido en anchura (BFS):", graph.bfs('A'));
console.log("Recorrido en profundidad (DFS):", graph.dfs('A'));