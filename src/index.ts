import { data } from "./data.js";
import { concatArrayToChainString, strToArr } from "./utils.js";

function setGraph(arr: string[]) {
   const graph: { [key: string]: string[] } = arr.reduce(
      (acc: { [key: string]: string[] }, currentKey: string, index) => {
         const lastTwoChars = currentKey.slice(-2);
         const subArray = [...arr];
         subArray.splice(index, 1);

         const matches = subArray.filter((item) =>
            item.startsWith(lastTwoChars),
         );

         acc[currentKey] = matches;
         return acc;
      },
      {},
   );

   return graph;
}

function dfs(
   graph: { [key: string]: string[] },
   start: string,
   visited = new Set(),
) {
   if (visited.has(start)) return [];
   const path: string[] = [start];
   visited.add(start);

   let longestNext: string[] = [];
   for (let neighbour of graph[start]) {
      const next = dfs(graph, neighbour, visited);
      if (next.length > longestNext.length) {
         longestNext = [...next];
      }
   }
   path.push(...longestNext);

   return path;
}

function getLongestChain(arr: string[]) {
   const graph = setGraph(arr);

   let longestPath: string[] = [];
   for (let i = 0; i < arr.length; i++) {
      const path = dfs(graph, arr[i]);

      if (longestPath.length > path.length) continue;
      longestPath = [...path];
   }

   return concatArrayToChainString(longestPath);
}

const ARRAY = strToArr(data);

console.log(getLongestChain(ARRAY));
