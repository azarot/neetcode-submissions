class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, tar) {
        let l = 0, r = nums.length - 1;

        while (nums[l] + nums[r] !== tar) {
            if (nums[l] + nums[r] > tar) {
                r--;
            } else {
                l++;
            }
        }

        return [l + 1, r + 1];
    }
}
