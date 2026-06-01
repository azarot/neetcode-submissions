class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, tar) {
        let l = 0, r = nums.length - 1;
        while (l < r) {
            if (nums[l] + nums[r] > tar) {
                r--;
            } else if (nums[l] + nums[r] < tar) {
                l++;
            } else {
                return [l + 1, r + 1];
            }
        }
    }
}
