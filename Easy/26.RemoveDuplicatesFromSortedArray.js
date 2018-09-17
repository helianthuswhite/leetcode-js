/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = nums => {
    let n = 1;
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === nums[nums.length - 1]) {
            return n;
        }
        if (nums[i] >= nums[i + 1]) {
            for (let j = i + 2; j < nums.length; j ++) {
                if (nums[i] < nums[j]) {
                    nums[i + 1] = nums[j];
                    n++
                    break;
                }
            }
        }
        else {
            n++;
        }
    }
};
