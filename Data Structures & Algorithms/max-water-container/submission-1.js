class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(h) {
        let max = 0;

        let l = 0, r = h.length - 1;

        while (l < r) {
            const ca = area(h, l, r);
            if (max < ca) {
                max = ca;
            }
            if (h[l] > h[r]) {
                r--;
            } else {
                l++;
            }
        }

        return max;
    }
}

 function area(h, l , r) {
    return Math.min(h[l], h[r]) * (r - l);
}
