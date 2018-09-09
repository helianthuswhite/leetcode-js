/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

const fourSum = (nums, target) => {
    let result = [];
    let hashMap = {};

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i ++) {
        for (let j = nums.length - 1; j > i; j --) {
            let m = i + 1;
            let n = j - 1;

            while (m < n) {
                const value = nums[i] + nums[m] + nums[n] + nums[j];

                if (value === target) {
                    result.push([nums[i], nums[m], nums[n], nums[j]]);
                    m ++;
                    n --;
                }
                else if (value < target) {
                    m ++;
                }
                else {
                    n --;
                }
            }
        }
    }

    result.forEach(item => {
        item.sort((a, b) => a - b);
        hashMap[item.toString()] = 1;
    });

    return Object.keys(hashMap).map(item => item.split(',').map(i => parseInt(i, 10)));;
};
