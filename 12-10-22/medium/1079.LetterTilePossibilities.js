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

    backtrack(0);
    return res.size;
};
console.log(numTilePossibilities("AAB"));
