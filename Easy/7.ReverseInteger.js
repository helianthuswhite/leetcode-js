/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
    if (x === 0) return x;

    const result = [];
    const negative = x > 0 ? false : true;
    x = x + '' || -x + '';
    for (let i = 0; i < x.length; i ++) {
        result[i] = x[x.length - i - 1];
    }
    const s = parseInt(result.join(''), 10);
    if (negative) {
        if (s > Math.pow(2, 31) - 1) return 0;
        return -s;
    }
    else {
        if (s > Math.pow(2, 31)) return 0;
        return s;
    }
};
