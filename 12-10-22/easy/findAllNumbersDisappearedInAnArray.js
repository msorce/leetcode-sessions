/**
 Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
 */
const findDisappearedNumbers = nums => {
    let ref;
    for (let i = 0; i < nums.length; i++) {
        ref = Math.abs(nums[i]) - 1; // why do we need to use absolute value here? so that we always find the proper index in bounds
        nums[ref] = -Math.abs(nums[ref]); // mark by turning negative, even if negative
    }

    return nums.reduce((acc, curr, index, array) => {
        if (curr > 0) {
            acc.push(index+1);
        }
        return acc;
    }, [])
};
