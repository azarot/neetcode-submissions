class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2 && nums[i] <= 0; i++) {
            const tar = nums[i] * -1;
            let l = i + 1, r = nums.length - 1;
            while (l < r) {
                if (nums[l] + nums[r] > tar) {
                    r--;
                } else if (nums[l] + nums[r] < tar) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    r--;
                    l++;
                    while (nums[r] === nums[r + 1]) {
                        r--;
                    }
                    while (nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
            while (nums[i] === nums[i + 1]) {
                i++;
            }
            
        }

        return res;
    }
}
