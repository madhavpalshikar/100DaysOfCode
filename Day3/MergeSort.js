function merge(l, r){
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // sort and concatenate values
    while(leftIndex < l.length && rightIndex < r.length){
        if(l[leftIndex] < r[rightIndex]){
            resultArr.push(l[leftIndex]);
            leftIndex++;
        }
        else{
            resultArr.push(r[rightIndex]);
            rightIndex++;
        }
    }

    // add remaining values from left and right array to result array
    return resultArr
            .concat(l.slice(leftIndex))
            .concat(r.slice(rightIndex));
}


function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));    
}


let a = [4,2,6,7,99,12,45,21];
let result = mergeSort(a);
console.log(result);