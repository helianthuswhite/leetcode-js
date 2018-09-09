/**
 * @param {string} digits
 * @return {string[]}
 */

const letterCombinations = digits => {
    const table = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let result = digits.length ? [''] : [];

    const addLetter = (origin, arr) => {
        let tmp = [];
        for (let i = 0; i < origin.length; i ++) {
            for (let j = 0; j < arr.length; j ++) {
                tmp.push(result[i] + arr[j]);
            }
        }
        return tmp;
    };

    for (let i = 0; i < digits.length; i ++) {
        result = addLetter(result, table[digits[i]]);
    }

    return result;
};
