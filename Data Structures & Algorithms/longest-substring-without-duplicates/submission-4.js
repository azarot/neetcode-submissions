class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) {
            return 0;
        }
        const arr = [...s];
        const set = new Set();

        let max = 0;
        let l = 0;
        for (let i = 0; i < arr.length; i++) {
            if (!set.has(arr[i])) {
                if ( i - l > max) {
                    max = i - l;
                }
                set.add(arr[i]);
            } else {
                while (l < i && arr[i] !== arr[l]) {
                    set.delete(arr[l]);
                    l++;
                }
                l++;
            }
        }

        return max + 1;
    }
}
