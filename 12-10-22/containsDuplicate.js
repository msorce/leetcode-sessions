/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    // seen map
    const seen = {};
    // loop over elements
    for (num of nums) {
        // if we've seen the element already return true
        if (num in seen) {
            return true;
        }
        // store the element in seen map
        seen[num] = true;
    }
    // return false
    return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));