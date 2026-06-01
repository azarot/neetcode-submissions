class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const mapS = new Map();
        const mapT = new Map();
        let match = 0;

        for (let i = 0; i < t.length; i++) {
            mapT.set(t.charAt(i), (mapT.get(t.charAt(i)) || 0) + 1);
        }

        let rl = 0, rr = Number.MAX_VALUE;
        let l = 0, r = 0;

        while (r < s.length) {
            const c = s.charAt(r);
            if (!mapT.has(c)) {
                r++;
            } else {
                mapS.set(c, (mapS.get(c) || 0) + 1);
                if (mapS.get(c) === mapT.get(c)) {
                    match++;
                }
                
                if (match === mapT.size) {
                    let cl = s.charAt(l);
                    while (!mapT.has(cl) || mapS.get(cl) > mapT.get(cl)) {
                        l++;
                        if (mapT.has(cl)) {
                            mapS.set(cl, mapS.get(cl) - 1)
                        }
                        cl = s.charAt(l);
                    }

                    if (rr - rl > r - l) {
                        rl = l;
                        rr = r;
                    }
                    
                    mapS.set(cl, mapS.get(cl) - 1);
                    match--;
                    l++;
                } 
                r++;
            }

        }

        return rr === Number.MAX_VALUE ? '' : s.substring(rl, rr + 1);
    }
}
