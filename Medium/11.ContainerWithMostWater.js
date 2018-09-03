/**
 * @param {number[]} height
 * @return {number}
 */

const maxArea = height => {
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            result = Math.max((j - i) * Math.min(height[i], height[j]), result);
        }
    }
    return result;
};
