// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
// Very efficient for solving problems with minimal space complexity as well

//Example
//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

//---Solution 1
// function sumZero(array){
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if(array[i] + array[j] === 0){
//                 return [array[i], array[j]];
//             }
            
//         }
        
//     }
// }

//-- refactored solution with pointers
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1
    while(left < right){
        // array[0] + arr[length -1]
        let sum = arr[left] + arr[right]
        // if sum = 0 then return both arrays
        if(sum === 0){
            return [arr[left], arr[right]]
        }
        // if sum > 0 then move the end of the array to the left 1 place
        else if(sum > 0){
            right --
        }
        //if sum is less than 0 then move the beginning of the array to the right 1 place 
        else {
            left ++
        }
    }
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

console.log(sumZero([-3,-2,-1,0,1,2,3])) //[-3,3]
console.log(sumZero([-2,0,1,3])) //undefined
console.log(sumZero([1,2,3])) //undefined
