// Question 1
// Write a function called removeDuplicates that given an array of items, returns the array without any duplicates. 

function removeDuplicates(array){
    //sort array
    array.sort()
    //duplicate the array
    const newArray = [...array]
    const answer = []
    //loop through array
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        // index of returns the first index at which a given element can be found in the array or -1 if it is not present
            // if statement is saying if the index is not in the empty array then we want to push it in
        if(answer.indexOf(element) === -1){
            answer.push(element,newArray)
        }
    }
    console.log(answer)
}
function removeDuplicates(array){
    //sort array
    array.sort()
    //duplicate the array
    const answer = []
    for(let num in array){
        if(answer.indexOf(num) === -1){
            answer.push(num)
        }
    }
    console.log(answer)
}

// removeDuplicates([1,2,3,4,4,4,5,6,6,7]) // 1,2,3,4,5,6,7

// Write a function that multiples two numbers (provided as arguments) without using *

function twoNumber(num1,num2){
    console.log(num1 / (1 / num2))
}

// twoNumber(4,4)


// find the mean, median, and mode of the an array

function meanArray(array){
    array.sort((a, b) => a - b)
    console.log(array)
    let count = 0

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        count += array[i]
    }
    let mean = count / array.length
    console.log(mean)
}
function medianArray(array){
    //allows us to sort numerically
        //by default sort it as string in alphabetical order
            //a-b sorts in ascending b-a sorts in descending
    const newArray = array.sort((a, b) => a - b);
    return newArray.length % 2 === 0 ? (newArray[newArray.length/ 2 - 1] + newArray[newArray.length / 2]) : newArray[Math.floor(newArray.length / 2)]
}

meanArray([4,3,1,2,2,7,9,14,2,27,400,9,1,8])
console.log(medianArray([4,3,1,2,2,7,9,14,2,27,400,9,1,8]))
