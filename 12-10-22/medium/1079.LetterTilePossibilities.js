/*
1079. Letter Tile Possibilities
Medium

1486

45

Add to List

Share
You have n  tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.



Example 1:

Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
Example 2:

Input: tiles = "AAABBC"
Output: 188
Example 3:

Input: tiles = "V"
Output: 1
*/

const numTilePossibilities = function (tiles) {
    let res = new Set();
    let combo = [];
    let seen = Array(tiles.length).fill(false);
    function backtrack() {
        for (let i = 0; i < tiles.length; i++) {
            if (!seen[i]) {
                // make a choice
                // use a letter for the combo
                combo.push(tiles[i]);
                seen[i] = true;
                res.add(combo.join(""));
                // recurse
                backtrack();
                // undo choice
                seen[i] = false;
                combo.pop();
            }
        }
    }

    backtrack();
    return res.size
};

console.log(numTilePossibilities("AAB"));
