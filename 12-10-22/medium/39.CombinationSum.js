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
    // what are we looking for
    // valid array combinations
    // what should we use?
    const sums = [];
	const current = [];
    const visited = Array(candidates.length).fill(false);

    function backtrack() {
        // goal
		let sum = current.reduce((a,b) => a+b, 0);
		if (sum === target) {
			sums.push([...current]);
		}
        // for loop
        for (let i = 0; i < candidates.length; i++) {
			// if its not being used
			if (!visited[i]) {

            // mark bool array
			visited[i] = true;
			// use it
			current.push(candidates[i]);
            // recurse
			backtrack();
            // unmark bool array
			visited[i] = false;
			// unuse it
			current.pop();

			}
        }
    }
	backtrack();
    return sums;
};

combinationSum([2,3,6,7], 7)
//Output: [[2,2,3],[7]]

// TODO: the issue is we can use numbers multiple times
