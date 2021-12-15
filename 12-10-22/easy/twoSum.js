/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * O (n log n)
 */
var twoSum = function (nums, target) {
    // sort arr (On log n) [2,7,11,15]
    const sortedNums = [...nums].sort((a, b) => a - b);

    // start pointer
    let start = 0;
    // end pointer
    let end = sortedNums.length - 1;
    // sum pointers
    let sum;

    // if sum === target
    while (start < end) {
        sum = sortedNums[start] + sortedNums[end];

        if (sum === target) {
            // return [sortedNums[start], sortedNums[end]];

			return [
                nums.indexOf(sortedNums[start]),
                nums.lastIndexOf(sortedNums[end])
            ];
        }

        // if sum larger than target
        if (sum > target) {
            // decrement end pointer
            end--;
        }

        // if sum smaller than target
        if (sum < target) {
            // increment start pointer
            start++;
        }
    }
    return false;
};

console.log(twoSum([3,3], 6));

/* Notes - you need to find out if you are going to return the elements themselves
or the indices in the original array (hard if trying to do a 2 pointer solution) */
