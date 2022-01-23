var permute = function(nums) {
    let permutations = [];
    let booleanArr = Array(nums.length).fill(false);
    let permutation = [];
    function backtrack(){
        if (permutation.length === nums.length) {
            permutations.push([...permutation]);
            return;
        }

        // if we havent used the number
        for (let i = 0; i < nums.length; i++) {
            // use the number
            if (booleanArr[i] === false) {
                booleanArr[i] = true;
                permutation.push(nums[i])
                backtrack();
                booleanArr[i] = false;
				permutation.pop();
            }
        }
        // undo using the number;
    }
    backtrack(nums);
    return permutations;
};

console.log(permute([1,2,3])); //[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
