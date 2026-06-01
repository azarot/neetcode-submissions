class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (let n of nums) {
            map.set(n, (map.get(n) || 0) + 1);
        }

        const arr = new Array(nums.length);
        for (let [k, v] of map.entries()) {
            if (arr[v]) {
                arr[v].push(k);
            } else {
                arr[v] = [k];
            }  
        }

        const r = [];

        let i = arr.length - 1;
        while (r.length < k) {
            if (arr[i]) {
                r.push(...arr[i])
            }
            i--;
        }

        return r;

    }
}
