var findKthPositive = function(arr, k) {
    let count =arr[arr.length-1]+k;
    let arrr=new Array(count);
    arrr.fill(0);
    let count_arr=0
    for (let i=1;i<=count;i++){
        let bool=false;
        for(let j=0;j<arr.length;j++){
            if(i==arr[j]){
                bool=true;
                break;
            }
        }
        if(!bool){
            arrr[count_arr]=i;
            count_arr++;
        }
    }
    return arrr[k-1]
    
};
console.log(findKthPositive( [2, 3, 4, 7, 11], 5));
