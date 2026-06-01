class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        const arr = new Array(nums.length);
        for (let [k, v] of map.entries()) {
            if (!arr[v]) {
                arr[v] = []
            }
            arr[v].push(k);
        }

        const res = [];

        let i = arr.length - 1;
        while (res.length < k) {
            if (arr[i] != undefined) {
                res.push(...arr[i]);
            }
            i--;
        }

        return res;
    }
}
