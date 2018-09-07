/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const threeSumClosest = (nums, target) => {
    let min = Math.pow(2, 31) - 1;
    let result = 0;

    nums.sort((a, b) => a - b);

    for (let k = 0; k < nums.length; k ++) {
        let i = k + 1;
        let j = nums.length - 1;
        if (nums[k] === nums[k - 1]) {
            continue;
        }
        while (i < j) {
            const diff = nums[i] + nums[k] + nums[j] - target;
            const sum = Math.abs(diff);
            if (diff === 0) {
                return target;
            }
            if (sum < min) {
                result = diff + target;
                min = sum;
            }
            diff > 0 ? j-- : i++;
        }
    }

    return result;
};
