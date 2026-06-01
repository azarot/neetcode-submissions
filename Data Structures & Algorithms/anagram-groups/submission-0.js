class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for( let s of strs) {
            const c = count(s);
            if (map.has(c)) {
                map.get(c).push(s);
            } else {
                map.set(c, [s]);
            }
        }

        return [...map.values()];
    }
}

const a = 'a'.charCodeAt(0);
function count(s) {
    const r = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        r[s.charCodeAt(i) - a] += 1;
    }

    return r.join();
}