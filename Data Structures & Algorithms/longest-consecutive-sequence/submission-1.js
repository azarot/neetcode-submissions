class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            if (! set.has(nums[i] - 1)) {
                let c = 1;
                while (set.has(nums[i] + c)) {
                    c++;
                }
                if (max < c) {
                    max = c;
                }
            }
        }

        return max;
    }
}
