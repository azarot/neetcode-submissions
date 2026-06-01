class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let l = 0, r = 1;
        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
                r++;
            } else {
                max = Math.max(max, prices[r] - prices[l]);
                r++;
            }
        }

        return max;
    }
}
