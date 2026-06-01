class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let res = 0, l = 0, r = 0;

        while (r < s.length) {
            map.set(s.charAt(r), (map.get(s.charAt(r)) || 0) + 1);
            if (r - l + 1 - getMax(map) <= k) {
                res = Math.max(res, r - l + 1);
                r++;
            } else {
                map.set(s.charAt(l), (map.get(s.charAt(l))) - 1);
                map.set(s.charAt(r), (map.get(s.charAt(r))) - 1);
                l++;
            }
        }

        return res;
    }
}

function getMax(map) {
    let max = 0;
    for (let e of map.values()) {
        max = Math.max(max, e);
    }

    return max;
}