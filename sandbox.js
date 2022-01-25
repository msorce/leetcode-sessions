// Given an array of strings words, return the first palindrom
// ic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.a
const firstPalindrome = function(words) {
	const isPalindrome = w => {
		let start = 0;
		let end = w.length -1;
		while(start <= end) {
			if (w[start] !== w[end]) return false;
			start++;
			end--;
		}
		return true;
	}

	for (let word of words) {
		if (isPalindrome(word)) return word;
	}
	return false;
};

console.log(firstPalindrome(["abc","car","cool"]));
/**
* Input: words = ["abc","car","ada","racecar","cool"]
* Output: "ada"
*/
