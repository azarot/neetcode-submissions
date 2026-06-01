class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const setT = new Map();
        const setS = new Map();
        let count = 0;
        for (let i = 0; i < t.length; i++) {
            const c = t.charAt(i);
            setT.set(c, (setT.get(c) || 0) + 1)
            setS.set(c, 0);
        }

        let rl, rr;
        let l = 0, r = 0;

        while (r < s.length) {
            const c = s.charAt(r);
            if (!setT.has(c)) {
                if (l === r) {
                    l++;
                }
                r++;
            } else {
                if ((count === t.length || s.charAt(l) === c) && setS.get(c) === setT.get(c)) {
                    while (c !== s.charAt(l)) {
                        if (setS.has(s.charAt(l))) {
                            setS.set(s.charAt(l), setS.get(s.charAt(l)) - 1);
                            if (setS.get(s.charAt(l)) <= setT.get(s.charAt(l))) {
                                count--;
                            }
                        }
                        l++;
                    }
                    setS.set(c, setS.get(c) - 1);
                    if (setS.get(c) < setT.get(c)) {
                        count--;
                    }
                    l++;
                    while (l < r && !setS.has(s.charAt(l))) {
                        l++;
                    }
                } else {
                    setS.set(c, setS.get(c) + 1);
                    if (setS.get(c) <= setT.get(c)) {
                    count++;
                    }
                    if (count === t.length && (rl === undefined || (rr - rl > r - l))) {
                        rr = r;
                        rl = l;
                    }
                    r++;
                }
            }
        }


        return rl !== undefined ? s.substring(rl, rr + 1) : '';
    }
}
