class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pref = [1];

        for (let i = 1; i < nums.length; i++ ) {
            pref[i] = nums[i - 1] * pref[i - 1];
        }
    
        let suf = nums[nums.length - 1];
        for (let i = nums.length - 2; i >= 0; i--) {
            pref[i] *= suf;
            suf *= nums[i];
        }

        return pref;
    }
}
