/**
 * @param {number} n
 * @return {number}
 */
const countArrangement = function (n) {
    let visited = Array(n + 1).fill(false);
    let count = 0;
    function backtrack(n, pos, visited) {
        // goal
        if (pos > n) {
            count++;
        }
        for (let i = 1; i <= n; i++) {
            // if it hasnt been visited and is beautiful
            // if perm[i] is div by i or
            // i is div by perm[i]
            if (!visited[i] && (pos % i === 0 || i % pos === 0)) {
                // make a choice
                visited[i] = true;
                // recurse
                backtrack(n, pos + 1, visited);
                // undo choice
                visited[i] = false;
            }
        }
    }
    backtrack(n, 1, visited);
    return count;
};
countArrangement(2)
