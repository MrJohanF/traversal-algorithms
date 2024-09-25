# Algoritmos de Recorrido de Grafos en Node.js

Este proyecto implementa dos algoritmos fundamentales para el recorrido de grafos: Búsqueda en Anchura (BFS) y Búsqueda en Profundidad (DFS) utilizando Node.js.

## Contenido

1. [Requisitos](#requisitos)
2. [Instalación](#instalación)
3. [Construcción del Programa](#construcción-del-programa)
   - [Paso 1: Configuración del Proyecto](#paso-1-configuración-del-proyecto)
   - [Paso 2: Implementación de la Clase Graph](#paso-2-implementación-de-la-clase-graph)
   - [Paso 3: Implementación de BFS](#paso-3-implementación-de-bfs)
   - [Paso 4: Implementación de DFS](#paso-4-implementación-de-dfs)
   - [Paso 5: Ejemplo de Uso](#paso-5-ejemplo-de-uso)
4. [Uso](#uso)
5. [Explicación Detallada del Código](#explicación-detallada-del-código)
6. [Ejemplos Adicionales](#ejemplos-adicionales)

## Requisitos

- Node.js (versión 12.0 o superior)
- npm (normalmente se instala con Node.js)
- Un editor de código (recomendado: Visual Studio Code)

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/MrJohanF/algoritmos-recorrido-grafos.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd algoritmos-recorrido-grafos
   ```

3. Instala las dependencias (en este caso, no hay dependencias externas, pero es una buena práctica incluir este paso):
   ```
   npm install
   ```

## Construcción del Programa

### Paso 1: Configuración del Proyecto

1. Crea un nuevo directorio para tu proyecto:
   ```
   mkdir algoritmos-recorrido-grafos
   cd algoritmos-recorrido-grafos
   ```

2. Inicializa un nuevo proyecto Node.js:
   ```
   npm init -y
   ```

3. Crea un nuevo archivo llamado `graph-traversal.js`:
   ```
   touch graph-traversal.js
   ```

### Paso 2: Implementación de la Clase Graph

En `graph-traversal.js`, comienza implementando la clase Graph:

```javascript
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
}
```

Esta clase utiliza una lista de adyacencia para representar el grafo. `addVertex` añade un nuevo vértice, y `addEdge` conecta dos vértices.

### Paso 3: Implementación de BFS

Añade el método BFS a la clase Graph:

```javascript
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
```

Este método implementa la Búsqueda en Anchura utilizando una cola.

### Paso 4: Implementación de DFS

Añade el método DFS a la clase Graph:

```javascript
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
```

Este método implementa la Búsqueda en Profundidad utilizando recursión.

### Paso 5: Ejemplo de Uso

Al final del archivo, añade un ejemplo de uso:

```javascript
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
```

## Uso

Para ejecutar el programa, usa el siguiente comando en la terminal:

```
node graph-traversal.js
```

## Explicación Detallada del Código

1. **Constructor de Graph**: 
   - Inicializa un objeto vacío `adjacencyList` que almacenará los vértices y sus conexiones.

2. **addVertex(vertex)**:
   - Comprueba si el vértice ya existe en la lista de adyacencia.
   - Si no existe, crea una nueva entrada con un array vacío.

3. **addEdge(vertex1, vertex2)**:
   - Añade `vertex2` a la lista de adyacencia de `vertex1`.
   - Añade `vertex1` a la lista de adyacencia de `vertex2`.
   - Esto crea una conexión bidireccional entre los vértices.

4. **bfs(start)**:
   - Inicializa una cola con el vértice de inicio.
   - Utiliza un objeto `visited` para rastrear los vértices visitados.
   - Mientras la cola no esté vacía, saca el primer vértice, lo añade al resultado, y explora sus vecinos no visitados.

5. **dfs(start)**:
   - Utiliza una función auxiliar recursiva `dfsHelper`.
   - Marca cada vértice como visitado y lo añade al resultado.
   - Recursivamente explora los vecinos no visitados de cada vértice.

## Ejemplos Adicionales

Puedes experimentar con diferentes estructuras de grafo modificando las llamadas a `addVertex()` y `addEdge()`. Por ejemplo:

```javascript
// Crear un grafo en forma de árbol
const treeGraph = new Graph();
['A', 'B', 'C', 'D', 'E', 'F', 'G'].forEach(vertex => treeGraph.addVertex(vertex));
treeGraph.addEdge('A', 'B');
treeGraph.addEdge('A', 'C');
treeGraph.addEdge('B', 'D');
treeGraph.addEdge('B', 'E');
treeGraph.addEdge('C', 'F');
treeGraph.addEdge('C', 'G');

console.log("Árbol BFS:", treeGraph.bfs('A'));
console.log("Árbol DFS:", treeGraph.dfs('A'));
```
