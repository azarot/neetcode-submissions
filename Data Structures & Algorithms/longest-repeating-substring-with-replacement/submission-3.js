class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let l = 0, r = 0;
        const map = new Map();

        while (r < s.length) {
            map.set(s.charAt(r), (map.get(s.charAt(r)) || 0) + 1);

            if ( (r - l + 1) - getMax(map) > k) {
                map.set(s.charAt(r), map.get(s.charAt(r)) - 1);
                map.set(s.charAt(l), map.get(s.charAt(l)) - 1);
                l++;
                continue;
            }

            if (res < r - l) {
                res = r - l;
            }
            r++;
        }

        return res + 1;
    }
}

function getMax(map) {
    let max = 0;
    for (let e of map.values()) {
        if (max < e) max = e;
    }

    return max;
}