/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.



*/
const combinationSum2 = function (candidates, target) {
    const sums = [];
    const current = [];

    function backtrack(target, start) {
        // accept
        if (target === 0) {
            sums.push([...current]);
            return;
        }
        // reject
        if (target < 0) return;
        let prev = -1;
        for (let i = start; i < candidates.length; i++) {

            // if the current candidate is the same as prev skip it to prevent dupes
            if (candidates[i] === prev) continue;

            // choose
            current.push(candidates[i]);

            // explore
            // track and inc i to not allow reuse
            backtrack(target - candidates[i], i + 1);

            // unchoose
            current.pop();
            prev = candidates[i];
        }
    }
    // sort to help with removing duplicates later
    candidates.sort((a,b) => a-b);
    backtrack(target, 0);
    return sums;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
/*
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output:
[
[1,2,2],
[5]
]
*/
