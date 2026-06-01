class Solution {
    separator =  '_';
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const result = [];
        
        strs.forEach(s => {
            result.push(s.length)
            result.push(this.separator);
            result.push(s);
        })

        return result.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];

        let i = 0;
        while (i < str.length) {
            const si = str.indexOf(this.separator, i);
            const len = new Number(str.substring(i, si));

            res.push(str.substring(si + 1, si + len + 1));
            i = si + len + 1;
        }

        return res;
    }
}
