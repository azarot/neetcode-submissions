class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        
        return transf(s) === transf(t);
    }
}

function transf(str) {
    const c = new Array(26).fill(0);

    const ac = 'a'.charCodeAt(0);
    const arr = [...str];

    for (let e of arr) {
        c[e.charCodeAt(0) - ac] += 1;
    }
    return c.join();
}
