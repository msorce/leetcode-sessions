/**
 Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
 */
const findDisappearedNumbers = function (nums) {
    // USE NEGATIVE MARKING

    // loop through elements

    // mark that you have been to an index
    // take the element and subtract 1 to get index
    // mark element at the corrisponding index as negative
    // increment to next element => mark element at that element -1 index
    // etc...
    // for (num of nums) {
    //     let idx = num - 1;
    //     if (nums[idx] > 0) {
    //         nums[idx] = -nums[idx];
    //     }
    // }
    // console.log(nums)
    for (let i = 0; i < nums.length; i++) {

    }
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) // [5, 6]