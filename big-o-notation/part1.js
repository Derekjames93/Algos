// Write a function that accepts a string input and returns a reversed copy


let str1 = "Hello World";

function reverseCopy(string){
    // split function takes the variable and puts it in a array
        //use quotes to split each letter in the array
    let updatedString = string.split('')
    //reverse function reverse order of string
    updatedString.reverse()
    //join function brings split array together
    let reverseString = updatedString.join('')
    //return string
    return reverseString
}

 //Big O notation
function reverseStringBigO(string){
    let reverseString = string.split('').reverse().join('')
    return reverseString
}

// without built in reverse function
let str = 'My fox goes brr brr'
let newStr = ''
// function
function noReverse(array){
    //for loop that states i is equal to length of the string -1
        // if i is greater than or equal to 0 then subtract 1 from i
    for (let i = array.length - 1 ; i >= 0; i--) {
        //take each letter of the array and append it to the new string
        newStr += array[i];
    }
    return newStr

}

// console.log(reverseStringBigO(str1))
// console.log(noReverse(str))

//Function that calculates the sum of all numbers from 1 up to some number

// function addUpTo(n){
//     let total = 0
//     for (let index = 1; index <= n; index++) {
//         total += index
//         console.log(total)
//     }
//     return total
// }

function addUpTo(n){
    return n * (n+ 1) / 2;
}


() => ({
    
})




console.log(addUpTo(6))