class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0, l = 0, r = 1;

        while (r < prices.length) {
            if (prices[r]< prices[l]) {
                l = r;
                r += 1;
            } else {
                max = Math.max(max, prices[r] - prices[l]);
                r++;
            }

        }

        return max;
    }
}
