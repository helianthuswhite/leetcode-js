/**
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = n => {
    let result = [];
    getResult(n, n, result, '');
    return result;
};

const getResult = (left, right, result, str) => {

    if (left === 0 && right === 0) {
        result.push(str);
    }

    if (left !== 0) {
        getResult(left - 1, right, result, str + '(');
    }

    if (right > left) {
        getResult(left, right - 1, result, str + ')');
    }
};
