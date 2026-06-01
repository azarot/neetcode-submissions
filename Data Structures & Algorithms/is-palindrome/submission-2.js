class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1;
        const ss = [...s.toUpperCase()]

        while (l < r) {
            while (!this.isLetter(ss[l])) {
                l++;
                if (l === s.length) return true;
            }

            while (!this.isLetter(ss[r])) {
                r--;
                if (l < 0) return true;
            }

            if (ss[l] !== ss[r]) {
                return false;
            }
            r--;
            l++;
        }
        return true;
    }

    isLetter(c) {
        return c.toLowerCase() !== c.toUpperCase() || ('0'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0));
    }
}
