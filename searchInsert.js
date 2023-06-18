/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    n = nums.length;

    for(let i=0; i<n;i++){
        //if target exists
        if(nums[i] === target){
            k = i;
        }
        else if (target>nums[n-1]){
            k = n;
        }
        else if (target<nums[0]){
            k = 0;
        }
        else {
            if(nums[i]<target & nums[i+1]>target){
                k = i+1;
            }
        }
    }
    return k
};