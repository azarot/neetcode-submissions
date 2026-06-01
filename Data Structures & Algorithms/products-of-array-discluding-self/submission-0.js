class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let cz = 0;
        const sum = nums.reduce((a = 1, c) => {
            if (c === 0) {
                cz++;
                return a; 
            }
            
            return a * c;
        });
        if (cz > 1) {
            return new Array(nums.length).fill(0);
        }
        return nums.map(n => cz === 0 ? sum / n : n === 0 ? sum : 0);
    }
}
