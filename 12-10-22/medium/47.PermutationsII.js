/*
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
*/
/**
 * my initial intuition is telling me to sort to prevent dupes
 *
 */
const permuteUnique = function (nums) {
    nums.sort((a, b) => a - b);
    const perms = [];
    const current = [];
    let visited = Array(nums.length).fill(false);

    function backtrack() {
        if (current.length === nums.length) {
            perms.push([...current]);
            return;
        }
        // if (start > nums.length) return;
        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;

            visited[i] = true;
            current.push(nums[i]);
            backtrack();
            visited[i] = false;
            current.pop();
        }
    }
    backtrack();
    return perms;
};
console.log(permuteUnique([1, 1, 2]));
/**
*
Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*
*/
