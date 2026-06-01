class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, tar) {
        for (let i = 0; i < nums.length - 1; i++) {
            const j = this.search(nums, tar - nums[i], i + 1, nums.length - 1);
            if (j != -1) {
                return [i + 1, j + 1];
            }
        }
    }

    search(nums, tar, start, end) {
        if (start > end) return -1;

        const mid = Math.floor((end + start) / 2);
        if (nums[mid] < tar) {
            return this.search(nums, tar, mid + 1, end);
        } else if (nums[mid] > tar) {
            return this.search(nums, tar, start, mid - 1);
        }
        return mid;
    }
}
