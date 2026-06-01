class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0, l = 0, r = 0;
        const set = new Set();

        while (r < s.length) {
            const cr = s.charAt(r);
            if (set.has(cr)) {
                while (cr !== s.charAt(l)) {
                    set.delete(s.charAt(l));
                    l++;
                }
                l++;
                r++;
                continue;
            } 
            
            set.add(cr);
            r++;

            max = Math.max(max, set.size);
        }

        return max;
    }
}
