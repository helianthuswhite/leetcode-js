/**
 * @param {number} x
 * @return {boolean}
 */

//  change to string

// const isPalindrome = x => {
//     const s = x.toString();
//     for (let i = 0; i < s.length; i ++) {
//         if (s[i] !== s[s.length - i -1]) return false;
//     }
//     return true;
// };

//  reverse the number

const isPalindrome = x => {
    if (x < 0) return false;
    
    let reverse = 0;
    const origin = x;
    while (x) {
        reverse = reverse * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return origin === reverse;
};
