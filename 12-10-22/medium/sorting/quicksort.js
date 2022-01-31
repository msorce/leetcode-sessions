let nums = [5, 3, -1, 2, 3, 20, -100, 7, 5];

function quicksort(nums) {
    // base case if length is 1 or less
    if (nums.length < 1) return nums;
    // choose a pivot
    let pivot = nums.pop();
    let left = [];
    let right = [];
    // recurse on both sides
    for (let num of nums) {
        if (num < pivot) {
            left.push(num);
        } else {
            right.push(num);
        }
    }
    // return left pivot right
    return [...quicksort(left), pivot, ...quicksort(right)];
}

console.log(quicksort(nums));
