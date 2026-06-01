class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0;

        let max = 0;
        let l = 0, r = 0;
        const set = new Set();

        while (r < s.length) {
            const c = s.charAt(r);
            if (!set.has(c)) {
                max = Math.max(max, r - l);
                r++;
                set.add(c);
            } else {
                set.delete(s.charAt(l++));
            }
        }

        return max + 1;
    }
}
