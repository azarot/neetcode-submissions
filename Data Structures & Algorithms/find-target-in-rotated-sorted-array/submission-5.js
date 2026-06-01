class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let l = 0, r = nums.length - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] === target) return m;
            else if (nums[m] > target) {
                if (nums[l] < nums[m] && nums[l] <= target || nums[m] < nums[r]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                if (nums[m] < nums[r] && nums[r] >= target || nums[l] < nums[m]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }

        return -1;
    }
}
