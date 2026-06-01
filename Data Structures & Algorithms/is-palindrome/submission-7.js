class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = [...s.toLowerCase()]
        let l = 0, r = arr.length - 1;
        while (l < r) {
            while(!this.isLetter(arr[l]) && l < arr.length) {
                l++;
            }
            while (!this.isLetter(arr[r]) && r >= 0) {
                r--;
            }
            if (l === arr.length || r < 0) {
                return true;
            }
            if (arr[l] !== arr[r]) {
                return false;
            }
            r--;
            l++;
        }
        return true;
    }

    isLetter(c) {
        return (c >= 'a' && c <= 'z') 
        || (c >= '0' && c <= 9)
    }
}
