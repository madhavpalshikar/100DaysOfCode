function binarySearch(arr, l, r, x){
    if(r >= l){
        let mid = Math.floor((l + r) / 2);

        if(arr[mid]==x)
            return `${x} found at index ${mid}`;

        if(arr[mid] > x)
            return binarySearch(arr, l, mid-1, x);
        else
            return binarySearch(arr, mid+1, r, x);
    }

    return -1;
}


let a = [2,3,4,5,6,7,12,24,56];
let fineMe = 7;
let result = binarySearch(a, 0, a.length-1, fineMe);
console.log(result);