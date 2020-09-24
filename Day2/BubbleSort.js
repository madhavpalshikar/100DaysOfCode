let data = [4,2,6,7,99,12,45,21];

function bubbleSort(arr){

    //base case
    if(arr.length==1)
        return arr;

    for(let i = 0; i < arr.length; i++){        
        for(let k = 0; k < arr.length; k++){
            if(arr[i] < arr[k]){
                let tempArrVal = arr[k];
                arr[k] = arr[i];
                arr[i] = tempArrVal;
                console.table(arr);
            }
        }
    }

    return arr;
}

let result = bubbleSort(data);
console.log('result', result);