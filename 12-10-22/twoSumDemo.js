/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

  */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {

    const complements = {};
    let complement;

    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i];

        if (complement in complements) {
            return [complements[complement], i];
        }

        complements[nums[i]] = i;
    }

    return [];
};


console.log(twoSum([3, 2, 4], 6));