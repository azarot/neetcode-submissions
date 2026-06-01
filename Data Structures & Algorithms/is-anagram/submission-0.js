class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const cs = new Array(26).fill(0);
        const ct = new Array(26).fill(0);
        const acc = 'a'.charCodeAt(0);

        for (let i = 0; i < s.length; i++) {
            cs[s.charCodeAt(i) - acc]++;
        }


        for (let i = 0; i < t.length; i++) {
            ct[t.charCodeAt(i) - acc]++;
        }

        return cs.join() === ct.join();
    }
}
