class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (let i = 0; i < strs.length; i++) {
            res += strs[i].length + '_' + strs[i];
        }
        
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let s = 0;
        while (s < str.length) {
            let inx = str.indexOf("_", s);
            let c = Number.parseInt(str.substring(s, inx));
            
            s = inx + 1 + c;
            res.push(str.substring(inx + 1, s));
        }
        return res;
    }
}
