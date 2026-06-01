class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(s => `${s.length}_${s}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];

        let i = 0;
        while (i < str.length) {
            const j = str.indexOf('_', i);
            const len = Number.parseInt(str.substring(i, j));
            res.push(str.substring(j + 1, j + len + 1));
            i = j + len + 1;
        }

        return res;
    }
}
