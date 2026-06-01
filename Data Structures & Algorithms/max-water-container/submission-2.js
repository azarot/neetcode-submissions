class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(h) {
        let max = 0, l = 0, r = h.length - 1;

        while (l < r) {
            max = Math.max(max, area(h, l, r));

            if (h[l] < h[r]) {
                l++;
            } else {
                r--;
            }
        }

        return max;
    }
}

function area(h, l, r) {
    return Math.min(h[l], h[r]) * (r - l);
}
