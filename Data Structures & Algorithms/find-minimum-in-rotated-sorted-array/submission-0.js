class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (nums[0] < nums[nums.length - 1]) {
            return nums[0];
        }

        let l = 0, r = nums.length - 1;
        while (true) {
            let mid = Math.floor((r + l) / 2);
            if ((mid + 1 === nums.length || nums[mid] < nums[mid + 1]) && (mid - 1 < 0 || nums[mid] < nums[mid - 1])) {
                return nums[mid];
            }
            if (nums[r] < nums[mid]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

    }
}
