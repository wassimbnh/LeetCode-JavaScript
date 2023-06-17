/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const haystackTab = haystack.toString().split('');
    const needleTab = needle.toString().split('');

    nStack = haystackTab.length;
    nNeedle = needleTab.length;
    occ = -1;
    for (let i=0;i<nStack; i++){
        if(haystackTab[i] === needleTab[0]){
            let text = haystack.slice(i,i+nNeedle);
            if( text === needle){
                occ = i;
                break;
            }
        }
    }
            return occ;
};