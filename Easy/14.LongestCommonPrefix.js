/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = strs => {
    let value = '';

    if (!strs.length) {
        return '';
    }

    for (let i = 0; i < strs[0].length; i ++) {
        value += strs[0][i];
        for (let j = 1; j < strs.length; j ++) {
            if (strs[j][i] !== strs[0][i]) {
                return value.slice(0, value.length - 1);
            }
        }
    }
    
    return value;
};