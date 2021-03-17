//This pattern uses objects or sets to collect values/frequencies of values
//This can often avoid the need for nested loops or operations with arrays/strings

// -----Example 1--------
    //Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

     //nested loop solution
// function same(array1, array2){
//     //if two arrays have different lengths instant false
//     if(array1.length !== array2.length){
//         return false
//     }
//     for (let i = 0; i < array1.length; i++) {
//         //check if the index in array 2 has an index that is squared of array 1
//         let correctIndex = array2.indexOf(array1[i] ** 2)
//         //if correctIndex is -1 or not in there then return false
//         if (correctIndex === -1){
//             return false
//         }
//         console.log(array2)
//         //removes 1 from array
//         array2.splice(correctIndex, 1)
//     }
//     return true
// }


    //----refactored
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
                return false
    }
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // for loop syntax
        //placeholder variable after the (let) and of the parameter (arr1)
    for (let value of arr1){
        // add 1 to frequencyCounter1 if the value is already in (frequencyCounter1[value]) or initialize it to 1 || 0
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }
    for (let value of arr2){
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    for(let key in frequencyCounter1){
        //checks if index^2 is in frequencyCounter2
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        //checks if the values match (if two 2s in array need to be two 4s in other array)
            //if mismatch
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same([1,2,3,2,5], [9,1,4,4,11])) //true
// console.log(same([1,2,3], [1,9])) //false
// console.log(same([1,2,3], [4,4,1])) //false (must be same frequency)