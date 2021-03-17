//This pattern involves creating a window which can either be an array or number from one position to another
    //Depending on a certain condition, the window either increases or closes(and a new window is created)
    //Very useful for keeping track of a subset of data in an array/string etc.
//Write a function which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    // checks to make sure that array is bigger than 2nd parameter
    if(num > arr.length){
        return null 
    }
    //creates first sum (first 3 digits)
        //does this with the (i < num ) part
    for (let i = 0; i < num; i++) {
        //keeps adding numbers to maxSum
        maxSum += arr[i]        
    }
    // set the temporary sum to the maxSum
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        //same as if statement to update max
            //if(temp > max){max = temp}
            maxSum = Math.max(maxSum,tempSum);
            }
            return maxSum;
    }


console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],4)) //10 

