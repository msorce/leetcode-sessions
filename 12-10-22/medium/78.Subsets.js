/**
Given an integer array nums of unique elements,
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
*
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
    // track variables here
    const ans = [];
    const subset = [];
    // backtrack
    function backtrack(i) {
        // if you find a goal record the goal
        if (i >= nums.length) {
            ans.push([...subset]);
            return;
        }

        // use nums[i];
        subset.push(nums[i]);
        backtrack(i + 1);

        // dont use nums[i];
        subset.pop();
        backtrack(i + 1);
    }
    // return answer
	backtrack(0)
    return ans;
};

console.log(subsets([1, 2, 3])); //[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

console.log(subsets([0])); // [[],[0]]
