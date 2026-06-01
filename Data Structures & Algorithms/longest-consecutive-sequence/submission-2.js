class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0;
        const set = new Set(nums);
        for (let n of nums) {
            if (!set.has(n - 1)) {
                let tmp = n;
                while (set.has(tmp++)) {}
                max = Math.max(tmp - n - 1, max);
            }
        }

        return max;
    }
}
