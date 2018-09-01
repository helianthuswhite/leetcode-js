/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/**
 * analysis
 * 
 * | 0     | 6       | 12
 * | 1   5 | 7    11 |
 * | 2 4   | 8 10    |
 * | 3     | 9       |
 * 
 * every 2*n-2 makes a group
 * then find every row index of letter by index
 */

const convert = (s, numRows) => {
    const result = [];
    if (numRows === 1) return s;
    for (let i = 0; i < s.length; i ++) {
        const r = i % (2 * numRows - 2);
        const n = numRows - 1;
        const row = r < numRows ? r : n - r % n;
        result[row] = result[row] === undefined ? '' : result[row];
        result[row] += s[i];
    }
    return result.join('');
};
