class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const fe = target - nums[i]
            if (map.has(fe)) {
                return [map.get(fe), i];
            }
            map.set(nums[i], i);
        }
    }
}
