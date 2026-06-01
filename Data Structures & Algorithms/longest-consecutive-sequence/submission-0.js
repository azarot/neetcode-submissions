class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let max = 0;
        nums.forEach(e =>  {
            if (!set.has(e - 1)) {
                let cur = 1
                while (set.has(++e)) {
                    cur++;
                }

                if (cur > max) {
                    max = cur;
                }
            }
        })

        return max;
    }
}
