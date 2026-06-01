class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = [...s.toLowerCase()];
        let l = 0, r = arr.length - 1;
        while (l < r) {
            while (l < arr.length && !isLetter(arr[l])) {
                l++;
            }
            while (r > 0 && !isLetter(arr[r])) {
                r--;
            }
            if (r < l) {
                break;
            }

            if (arr[l] !== arr[r]) {
                return false;
            } else {
                r--;
                l++;
            }
        }

        return true;
    }
}

function isLetter(c) {
    return (c >= 'a' && c <= 'z') 
        || (c >= '0' && c <= '9');
}
