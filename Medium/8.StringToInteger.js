/**
 * @param {string} str
 * @return {number}
 */

const myAtoi = str => {
    const value = parseInt(str, 10).toString() === 'NaN' ? 0 : parseInt(str, 10);
    if (value > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    if (value < -Math.pow(2, 31)) return -Math.pow(2, 31);
    return value;
};