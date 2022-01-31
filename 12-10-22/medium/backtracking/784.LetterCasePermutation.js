/**
Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.

Example 1:

Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
Example 2:

Input: s = "3z4"
Output: ["3z4","3Z4"]

*/
const letterCasePermutation = function (s) {
    let answers = [];
    let word = [];

    function backtrack(i) {
        console.log(s[i])
        if (i >= s.length) {
            answers.push(word.join(""));
            return;
        }

        if (isNaN(s[i])) {
            // if its a letter
            // add the lowercase
            word.push(s[i].toLowerCase())
            // and backtrack
            backtrack(i+1);
            // remove the lowercase
            word.pop()

            // add the uppercase
            word.push(s[i].toUpperCase())
            // and backtrack
            backtrack(i+1);
            // remove the lowercase
            word.pop()

        } else {
            // if its a number just add the number and backtrack
            word.push(s[i])
            backtrack(i+1);
            word.pop()
        }
    }
    backtrack(0);
    return answers;
};
letterCasePermutation("a1b2");
