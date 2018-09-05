/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = nums => {
    const result = [];
    const hashMap = {};

    nums.sort((a, b) => a - b);

    core(nums, result);

    result.forEach(item => {
        item.sort((a, b) => a - b);
        hashMap[item.toString()] = 1;
    });

    return Object.keys(hashMap).map(item => item.split(',').map(i => parseInt(i, 10)));
};

//  overtime

// const core = (nums, result) => {
//     for (let i = 0; i < nums.length; i ++) {
//         for (let j = nums.length - 1; j > i; j --) {
//             const k = nums.indexOf(-nums[i] - nums[j]);
//             if (k > -1 && k !== i && k !== j && i !== j) {
//                 result.push([nums[i], nums[k], nums[j]]);
//             }
//         }
//     }
// };

const core = (nums, result) => {
    for (let k = 0; k < nums.length; k ++) {
        let i = k + 1;
        let j = nums.length - 1;
        if (nums[k] === nums[k - 1]) {
            continue;
        }
        while (i < j) {
            sum = nums[i] + nums[k] + nums[j];
            if (sum === 0) {
                result.push([nums[i], nums[k], nums[j]]);
                i ++;
                j --;
            }
            sum < 0 && i ++;
            sum > 0 && j --;
        }
    }
};
