/* Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space. */


// There is always a repeated number
// use only constant extra space 
// cannot mod array // no sorting


/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {

    // fast and slow pointer
    let fast = 0;
    let slow = 0;

    // first intersection => elements are the same
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];

        if (fast === slow) {
            break;
        }
    }

    // make a new slow pointer 
    let newSlow = 0;
    // new slow and slow incerement until another intersection
    while (slow !== newSlow) {
        slow = nums[slow];
        newSlow = nums[newSlow];
    }

    // this will be the entrance to the cycle => the repeated number we need to return
    return slow
};


console.log(findDuplicate([1, 3, 4, 2, 2])) // output expects 2
console.log(findDuplicate([3, 1, 3, 4, 2])) // output expects 3
console.log(findDuplicate([1, 1]))          // output expects 1
console.log(findDuplicate([1, 1, 2]))       // output expects 1