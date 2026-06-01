class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return count(s) === count(t);
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
