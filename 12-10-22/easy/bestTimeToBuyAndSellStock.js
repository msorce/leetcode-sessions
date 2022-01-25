/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let lo = 0;
    let hi = 1;
    let maxProfit = 0;
    let profit;
    while (hi < prices.length) {
        // is profitable 
        if (prices[lo] < prices[hi]) {
            // record max profit 
            let profit = prices[hi] - prices[lo];
            maxProfit = Math.max(profit, maxProfit);
        } else {
            lo = hi;
        }
        hi++;
    }

    return maxProfit
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));