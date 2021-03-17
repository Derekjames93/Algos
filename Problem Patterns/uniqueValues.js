//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. there can be negative numbers in the array, but it will always be sorted

// function countUniqueValues(arr){
//     //create starting points for both sides of array
//     if(arr.length === 0){
//         return 0;
//     }
//     // set constant variable index to 0
//     let i = 0;
//     // create loop that cycles through each number of the array starting at the first index
//     for (let j = 1; j < arr.length; j++) {
//         const num = arr[j];
//         if(arr[i] !== num){
//             i++
//             arr[i] = num
//         }
//     }
//     return i + 1;
// }


function countUniqueValues(arr){
    if(arr.length === 0) {
        return 0;
    }
    var i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        } 
    }
    return i + 1;
}

// console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,1,1,2,2,3,4,5,5,5,6,7])) // 7
// console.log(countUniqueValues([])) //0
// console.log(countUniqueValues([-2,-1,-1,0,1])) //4