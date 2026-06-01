class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;

        let l = 0, r = 1;
        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
                r++;
            } else {
                let prof = prices[r] - prices[l];
                if (res < prof) {
                    res = prof;
                }
                r++;
            }
        }

        return res;
    }
}
