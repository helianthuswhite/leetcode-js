/**
 * @param {*} nums 
 * @param {*} target 
 */

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const start = i;
        const end = nums.indexOf(target - nums[i]);
        if (start !== end && end > -1) {
            return [start, end];
        }
    }
};
