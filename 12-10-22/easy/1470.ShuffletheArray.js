const shuffle = function(nums, n) {
    // split the array at n

    let ans = [];
    // then merge together every other

    // i first element of left partition array
    // i + n first element of the right partition
    for (let i = 0; i < nums.length / 2; i++) {
        ans.push(nums[i])
        ans.push(nums[i+n])
    }
    // return the array
    return ans;
};


/**
*
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
*
*/

console.log(shuffle([2,5,1,3,4,7],3))
