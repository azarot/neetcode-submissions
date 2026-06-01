class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = [...s.toLowerCase()];
        let l = 0, r = arr.length - 1;

        while (l < r) {
            while (l < s.length && !isAlpha(arr[l])) l++;

            while (r > l && !isAlpha(arr[r])) r--;

            if (r < l) break;

            if (arr[l] !== arr[r]) return false;

            r--;
            l++;        }

        return true;
    }
}

function isAlpha(c) {
    return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
}