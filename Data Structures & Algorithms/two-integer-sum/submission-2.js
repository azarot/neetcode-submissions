class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const p = target - nums[i];
            if (map.has(p)) {
                return [map.get(p), i];
            }
            map.set(nums[i], i);
        }
        
    }
}
