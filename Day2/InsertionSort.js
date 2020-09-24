let data = [4,2,6,7,99,12,45,21];

function insertionSort(arr){

    //base case
    if(arr.length==1)
        return arr;

    for(let i = 0; i < arr.length; i++){        
        for(let k = i; k > -1; k--){
            if(arr[i] < arr[k]){
                let tempArrVal = arr[k];
                arr[k] = arr[i];
                arr[i] = tempArrVal;
            }
        }
    }

    return arr;
}

let result = insertionSort(data);
console.log('result', result);