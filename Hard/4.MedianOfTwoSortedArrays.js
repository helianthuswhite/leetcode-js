/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const nums = [...nums1, ...nums2].sort((a, b) => a - b);
    if (nums.length % 2) {
        return nums[Math.floor(nums.length / 2)];
    }
    else {
        return (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
    }
};
