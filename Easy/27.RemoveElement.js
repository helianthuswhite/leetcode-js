/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
    let n = 0;
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === val) {
            for (let j = i + 1; j < nums.length; j ++) {
                if (nums[j] !== val) {
                    nums[i] = nums[j];
                    nums[j] = val;
                    n++;
                    break;
                }
            }
        }
        else {
            n++;
        }
    }
    return n;
};
