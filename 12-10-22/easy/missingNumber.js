/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
    // get the target sum guass sum formula n*(n+1)/2
    let n = nums.length;
    let target = n * (n + 1) / 2;
    let sum = 0;

    for (num of nums) {
        sum += num;
    }

    return target - sum;
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([0])); // 1







