/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    // if we reach graph.length - 1 then we are at the end
    const target = graph.length - 1;
    // the index is the node, and the array is the neighbors
    const paths = [];
    const path = [0];
    function backtrack(current) {
        // if we reach the target, no need to explore further
        if (current === target) {
            // append to result
            paths.push([...path]);
            return;
        }
        for (let neighbor of graph[current]) {
            // if its a neighbor, travel the node
            path.push(neighbor);
            // recurse
            backtrack(neighbor);
            // undo decision
            path.pop();
        }
    }
    backtrack(0);
    return paths;
};
console.log(allPathsSourceTarget([[1, 2], [3], [3], []])); //[[0,1,3],[0,2,3]]
