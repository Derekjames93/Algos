// hash table
// function twoNumberSum(array, targetSum) {
//     // Write your code here.
//     for (let i = 0; i < array.length -1; i++) {
//         const firstNum = array[i];   
//         for (let j = i + 1; j < array.length; j++) {
//             const secondNum = array[j];
//             if(firstNum + secondNum === targetSum){
//                 return [firstNum, secondNum]
//             }
//         }
//     }
//     return []

// }


function twoNumberSum(array, targetSum){
    let hashTable = {}
    for (num of array){
        // y= targetSum - x
        potentialMatch = targetSum - num
        if(potentialMatch in hashTable){
            return [potentialMatch, num]
        }
        else{
            hashTable[num] = true
        }
    }
    return []
}

console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10))