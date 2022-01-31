/*
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
*/
/**
 * my initial intuition is telling me to sort to prevent dupes
 *
 */
const permuteUnique = function (nums) {
    // create results array to return
    const res = [];
    const current = [];
    let counter = new Map();
    // create frequency map of each number
    for (let num of nums) {
        if (!counter.has(num)) counter.set(num, 0);
        console.log(counter.get(num));
        let count = counter.get(num);
        counter.set(num, count + 1);
    }

    // call backtrack with freqency
    function backtrack() {
        if (current.length === nums.length) {
            res.push([...current]);
            return;
        }
        for (let [key, _] of counter) {
            let count = counter.get(key);

            if (count === 0) continue;
            // choose the number
            current.push(key);
            counter.set(key, count - 1);
            // backtrack
            backtrack();
            // unchoose
            current.pop();
            counter.set(key, count);
        }
    }
    backtrack();
    // return results array
    return res;
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
