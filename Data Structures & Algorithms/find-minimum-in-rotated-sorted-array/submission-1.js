class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1;
        let res = 0;    

        while (l <= r) {
            if (nums[l] <= nums[r]) return nums[l];

            const m = Math.floor((r + l) / 2);

            if (nums[l] > nums[m]) {
                r = m;
            } else {
                l = m + 1;
            }
        }

    }
}
