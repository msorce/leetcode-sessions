/*
Medium
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.



Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []

*/
const combinationSum = function (candidates, target) {
    const sums = [];
    const current = [];

    function backtrack(target, start) {
        if (target === 0) {
            sums.push([...current]);
            return;
        }
        if (target < 0) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(target - candidates[i], i);
            current.pop();
        }
    }

    backtrack(target, 0)
    return sums;
};

console.log(combinationSum([2, 3, 6, 4, 7], 7))
//Output: [[2,2,3],[7]]

// IMPORTANT TIP
// if we want to get all permutations dont pass in i to backtrack
// if we want to allow dupes then we can set i to the prev i
// if we dont want to allow duplicates than we can advance i like i + 1;
