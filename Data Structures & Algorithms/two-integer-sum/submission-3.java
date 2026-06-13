class Solution {
    public int[] twoSum(int[] nums, int target) {
        var map = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            var r = map.get(target - nums[i]);
            if (r != null) {
                int[] res = {r, i};
                return res;
            };
            map.put(nums[i], i);
        }

        return null;
    }
}
