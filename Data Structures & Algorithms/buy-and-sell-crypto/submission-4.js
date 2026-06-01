class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0, l = 0, r = 1;

        while (r < prices.length) {
            max = Math.max(max, prices[r] - prices[l]);

            if (prices[l] > prices[r]) {
                l = r;
            }
            r++;
        }    

        return max;
    }
}
