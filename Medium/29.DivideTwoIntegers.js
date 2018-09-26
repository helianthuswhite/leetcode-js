/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

const divide = (dividend, divisor) => {
    let neg = true;
    let n = 0;

    const positive = num => num > 0 ? num : -num;

    if (dividend > 0 && divisor > 0 || dividend < 0 && divisor < 0) {
        neg = false;
    }

    dividend = positive(dividend);
    divisor = positive(divisor);

    if (dividend < divisor) {
        return 0;
    }

    const max = - 1 - (1 << 31);

    let i = 31;
    while (i >= 0) {
        const temp = positive(dividend >> i);
        if (temp >= divisor) {
            if (i === 31) {
                n += neg ? - (1 << 31) : max;
            }
            else {
                n += (1 << i);
            }
            dividend -= positive(divisor << i);
        }
        i --;
    }

    return neg ? -n : n;
};
