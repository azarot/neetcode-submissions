class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const mapT = new Map();
        for (let c of t.split('')) {
            mapT.set(c, (mapT.get(c) || 0) + 1);
        }

        const mapS = new Map();
        let l = 0, r = 0, match = 0, rl = 0, rr = Number.MAX_VALUE;
        while (r < s.length) {
            const rc = s.charAt(r)
            if (!mapT.has(rc)) {
                r++;
            } else {
                mapS.set(rc, (mapS.get(rc) || 0) + 1);
                if (mapS.get(rc) === mapT.get(rc)) {
                    match++;
                }

                if (match === mapT.size) {
                    while (!mapT.has(s.charAt(l)) || mapS.get(s.charAt(l)) > mapT.get(s.charAt(l))) {
                        if (mapS.get(s.charAt(l)) > mapT.get(s.charAt(l))) {
                            mapS.set(s.charAt(l), mapS.get(s.charAt(l)) - 1);
                        }
                        l++;
                    }
                    if (r - l < rr - rl) {
                        rr = r;
                        rl = l;
                    }
                    mapS.set(s.charAt(l), mapS.get(s.charAt(l)) - 1);
                    l++;
                    match--;
                }
                r++;
            }
        }

        return rr === Number.MAX_VALUE ? "" : s.substring(rl, rr + 1);
    }
}
