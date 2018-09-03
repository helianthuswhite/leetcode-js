/**
 * @param {number} num
 * @return {string}
 */

const intToRoman = num => {
    const result = [];

    while (num) {
        result.push(num % 10);
        num = Math.floor(num / 10);
    }

    let roman = '';

    const hanlde1 = arr => {
        if (arr[0] === 4) {
            roman += 'IV';
        }
        else if (arr[0] === 9) {
            roman += 'IX';
        }
        else if (arr[0] < 5) {
            roman += 'I'.repeat(arr[0]);
        }
        else {
            roman += 'V' + 'I'.repeat(arr[0] - 5);
        }
    };

    const hanlde2 = arr => {
        if (arr[1] === 4) {
            roman += 'XL';
        }
        else if (arr[1] === 9) {
            roman += 'XC';
        }
        else if (arr[1] < 5) {
            roman += 'X'.repeat(arr[1]);
        }
        else {
            roman += 'L' + 'X'.repeat(arr[1] - 5);
        }
        
        arr.pop();
        hanlde1(arr);
    };

    const hanlde3 = arr => {
        if (arr[2] === 4) {
            roman += 'CD';
        }
        else if (arr[2] === 9) {
            roman += 'CM';
        }
        else if (arr[2] < 5) {
            roman += 'C'.repeat(arr[2]);
        }
        else {
            roman += 'D' + 'C'.repeat(arr[2] - 5);
        }

        arr.pop();
        hanlde2(arr);
    };

    switch(result.length) {
        case 4:
            roman += 'M'.repeat(result[3]);
            result.pop();
            hanlde3(result);
            break;
        case 3:
            hanlde3(result);
            break;
        case 2:
            hanlde2(result);
            break;
        case 1:
            hanlde1(result);
            break;
    }
    return roman;
};
