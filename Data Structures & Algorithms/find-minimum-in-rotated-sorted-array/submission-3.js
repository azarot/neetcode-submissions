class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1;

        while (true) {
            if (nums[l] <= nums[r]) return nums[l];

            const m = Math.floor((l + r) / 2);

            if (nums[l] <= nums[m]) {
                l = m + 1;
            } else {
                r = m;
            }
        }
    }
}
