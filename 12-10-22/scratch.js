console.log(123);
const groupAnagrams = function (strs) {
    let ans = new Map();
    for (let s of strs) {
        let charArray = s.split("").sort((a,b) => a.localeCompare(b));
        let key = charArray.join("");
        if (!ans.has(key)) ans.set(key, []);
        let arr = ans.get(key)
        ans.set(key, [...arr, s]);
    }
    return Array.from(ans.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]
