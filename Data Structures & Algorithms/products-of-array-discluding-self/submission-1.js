class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pref = [];
        const suf = [];

        pref[0] = nums[0];
        suf[nums.length - 1] = nums[nums.length - 1];        
        for (let i = 1; i < nums.length; i++) {
            pref[i] = nums[i] * pref[i - 1];
        }

        for (let i = nums.length - 2; i >= 0 ; i--) {
            suf[i] = nums[i] *  suf[i + 1];
        }
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            const l = i > 0 ? pref[i - 1] : 1;
            const r = i < nums.length - 1 ? suf[i + 1] : 1;
            res[i] = l * r;
        }

        return res;
    }
}
