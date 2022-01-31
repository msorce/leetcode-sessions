/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/
/*
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
---
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/
const exist = function (board, word) {
    const row = board.length;
    const col = board[0].length;
    let candidate = "";
    let visited = {};
    // backtrack
    // up  0, -1
    // down 0, 1
    // left -1, 0
    // right 1, 0

    let directions = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0]
    ];
    function backtrack(x, y, index) {
        // if the candidate length is equal to the word length return true
        if (candidate.length >= word.length) {
            return true;
        }

        // if out of bounds or candiate so far is not in the word return false;
        if (
            x < 0 ||
            y < 0 ||
            x >= row ||
            y >= col ||
            board[x][y] !== word[index] ||
            `${x},${y}` in visited
        ) {
            return false;
        }

        let deadend = false;
        // loop through directions
        candidate += board[x][y];
        visited[`${x},${y}`] = true;
        for ([xOffset, yOffest] of directions) {
            // go all directions (x+1, y)
            deadend = backtrack(x + xOffset, y + yOffest, index + 1);
            // remove right move
            if (deadend) break;
        }
        delete visited[`${x},${y}`];
        candidate = candidate.slice(0, candidate.length - 1);
        return deadend;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};
console.log(
    exist(
        [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ],
        "ABCCED"
    )
);

console.log(
    exist(
        [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ],
        "ABCCED"
    )
);

exist(
    [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"]
    ],
    "ABCB"
);
