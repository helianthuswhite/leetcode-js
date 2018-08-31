/**
 * @param {string} s
 * @return {string}
 */

//  this one will overtime

// const longestPalindrome = s => {
//     // first to find all substring
//     const allSubString = [];
//     const palindromicString = [];
//     if (s.length > 1) {
//         for (let i = 1; i < s.length + 1; i++) {
//             for (let j = i + 1; j < s.length + 1; j++) {
//                 allSubString.push(s.slice(i, j));
//             }
//             getAllSubString(s, i, 0, allSubString);
//         }
//     }
//     else {
//         allSubString.push(s);
//     }
//     //  then find all palindromic string
//     allSubString.forEach(string => {
//         let flag = true;
//         for (let i = 0; i < string.length; i++) {
//             if (string[i] !== string[string.length - i - 1]) {
//                 flag = false;
//             }
//         }
//         flag && palindromicString.push(string);
//     });
//     palindromicString.sort((a, b) => b.length - a.length);
//     return palindromicString[0] || '';
// };



//  manacher algorithm

const longestPalindrome = s => {
    const string = '#' + s.split('').join('#') + '#';
    const m = [];
    let maxRight = 0;
    let pos = 0;
    for (let i = 0; i < string.length; i++) {
        m[i] = i < maxRight ? Math.min(m[2 * pos - i], maxRight - i) : 1;
        while (string[i - m[i]] === string[i + m[i]] && string[i - m[i]] && string[i + m[i]]) {
            m[i] += 1;
        }
        if (m[i] > maxRight - pos) {
            maxRight = m[i] + i - 1;
            pos = i;
        }
    }
    const result = string.substr(pos - Math.max(...m) + 1, 2 * m[pos] - 1);
    return result.split('#').join('');
};
