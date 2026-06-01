class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const len = s.length;
        let max = 0;

        for (let l = 0; l < len; l++) {
            let r = l;
            const map = new Map();
            while (r < len) {
                map.set(s.charAt(r), (map.get(s.charAt(r)) || 0) + 1)

                if ((r - l + 1) - getMax(map) > k) break;
                r++;
            }

            if (max < r - l) {
                max = r - l;
            }
        }

        return max;
    }
}

function getMax(map) {
    let max = 0;
    for (let v of map.values()) {
        if (v > max) {
            max = v;
        }
    }

    return max;    
}
