class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = [...s.toLowerCase()];
        let l = 0, r = arr.length - 1;

        while (l < r) {
            while (!isValid(arr[l]) && l < arr.length) {
                l++;
            }

            while (!isValid(arr[r]) && l < r) {
                r--;
            }
            
            if (r < l) return true;

            if (arr[l++] !== arr[r--]) return false;

        }

        return true;
    }
}

function isValid(c) {
    return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
}
