const generateparenthesis = function (n) {
    const stack = [];
    const validParens = [];

    function backtrack(openCount, closedCount) {
        if (openCount === closedCount && openCount === n && closedCount === n) {
            validParens.push(stack.join(""));
            return;
        }

        if (openCount < n) {
            stack.push("(");
            backtrack(openCount + 1, closedCount);
            stack.pop();
        }

        if (closedCount < openCount) {
            stack.push(")");
            backtrack(openCount, closedCount + 1);
            stack.pop();
        }
    }
    backtrack(0, 0);
    return validParens;
};
console.log(generateparenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
