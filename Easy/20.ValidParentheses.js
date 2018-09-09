/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = s => {
    let result = [''];
    let tmp = '';

    for (let i = 0; i < s.length; i ++) {
        tmp = result.pop();
        switch(s[i]) {
            case '(':
                if (tmp !== ')') {
                    result.push(tmp);
                    result.push('(');
                }
                break;
            case ')':
                if (tmp !== '(') {
                    result.push(tmp);
                    result.push(')');
                }
                break;
            case '{':
                if (tmp !== '}') {
                    result.push(tmp);
                    result.push('{');
                }
                break;
            case '}':
                if (tmp !== '{') {
                    result.push(tmp);
                    result.push('}');
                }
                break;
            case '[':
                if (tmp !== ']') {
                    result.push(tmp);
                    result.push('[');
                }
                break;
            case ']':
                if (tmp !== '[') {
                    result.push(tmp);
                    result.push(']');
                }
                break;
        }
    }

    return result.length === 1;
};
