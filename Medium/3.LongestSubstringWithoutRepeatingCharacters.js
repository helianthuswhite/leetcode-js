/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    let result = [];
    let minResult = [];
    for (let i = 0; i < s.length; i++) {
        const index = result.indexOf(s[i]);
        if (index > -1) {
            // use ... to get a new array, or it gets the result after push
            minResult = result.length >= minResult.length ? [...result] : minResult;
            result.push(s[i]);
            result = result.slice(index + 1);
        }
        else {
            result.push(s[i]);
        }
    }
    return Math.max(result.length, minResult.length);
};
