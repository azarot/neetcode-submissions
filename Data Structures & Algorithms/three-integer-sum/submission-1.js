class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        
        const res = [];
        for (let i = 0; i < nums.length - 2; i++) {

            let l = i + 1, r = nums.length - 1;
            while (l < r) {
                const sum = nums[l] + nums[r] + nums[i];
                if (sum === 0) {
                    res.push([nums[i], nums[l], nums[r]]);

                    while (l < nums.length - 1 && nums[l] === nums[l + 1]) l++;
                    l++;
                    r--;
                } else if (sum > 0) {
                    r--;
                } else {
                    l++;
                }
            }
            

            while (i < nums.length - 1 && nums[i] === nums[i + 1]) i++;
        }

        return res;
    }
}
