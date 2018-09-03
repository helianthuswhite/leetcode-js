/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const isMatch = (s, p) => {
    if (!p.length) {
        return !s.length;
    }

    if (!s.length) {
        if (p.length % 2 === 1)  return false;

        let i = 1;
        while (i < p.length && p[i] === '*')
        {
            i += 2;
        }
        return i === p.length + 1;
    }

    let i = 0;
    if (p[1] === '*') {
        do {
            if (isMatch(s.substr(i), p.substr(2))) {
                return true;
            }
            if (s[i] === undefined) {
                return false;
            }
        } while ((s[i++] === p[0] || p[0] === '.'));

        return false;
    }
    else {
        if (s[0] == p[0] || p[0] == '.') {
            return isMatch(s.substr(1), p.substr(1));
        }
        return false;
    }
};
