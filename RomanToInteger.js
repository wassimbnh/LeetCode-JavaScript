/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    r=['I','V','X',"L","C","D","M"];
    K=[1,5,10,50,100,500,1000];
    tab=[...s];
    n=tab.length;
    sum = 0 ;
    for(let i=0;i<n;i++){
        m =r.indexOf(tab[i]);
        mPlus =r.indexOf(tab[i+1]);
        if(m >= mPlus){
            sum+= K[m]
        }
        else if (m < mPlus){
            sum+= K[mPlus] - K[m];
            i+= 1;
        }
    }
    return sum;
};