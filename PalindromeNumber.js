/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const digit = x.toString().split('');
    const n = digit.length;
    
    if (x < 0) {
        return false;
    }
    if(n == 1){
        return true;
    }
    if (n-1 % 2 === 0) {
        return false;
    }
    
    if (digit[0] !== digit[n - 1]) {
        return false;
    }
    
    for (let i = 0; i < n; i++) {
        if (digit[i] !== digit[n - i - 1]) {
            return false;
        }
    }
    
    return true;
};