class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r = 1;
        let profit = 0
        while (r < prices.length) {
            const cp = prices[r] - prices[l];
            if (cp < 0) {
                l = r;
                r++;
            } else {
                if (cp > profit) {
                    profit = cp;
                }
                r++;
            }
        }

        return profit;
    }
}
