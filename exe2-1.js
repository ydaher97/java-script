function sumNumbers(arr){
    arr.sort((a, b) => a - b);
    return  arr[0] + arr[1]
}


const array =  [19, 5, 42, 2, 77];

const numSum = sumNumbers(array)

console.log(numSum)