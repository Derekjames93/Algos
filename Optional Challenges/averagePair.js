// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. there may be more than one pair that matches the average target

function averagePair(array,targetAvg){
    ////function will contain two params, array, target average
    ////sort the array
    array.sort()
    // create a start index and an index to target the last element
    let start = 0;
    let end = array.length - 1
    console.log(array)
    //// need to get the average of two numbers in the array
    //create a loop that checks if the start of the array is less then the end
    while(start < end){
        // find the average of two numbers in the array
        let avg = (array[start] + array[end] )/ 2
        // if average equals target average return it
        if(avg === targetAvg){
            return true;
        }
        // if there is no match and the avg is less than target move the start index over 1
        else if(avg < targetAvg){
            start ++
        }
        //if the avg is greater than the target move the end of the array
        else{
            end --
        }
        return false
    }
    //compare that average with the second parameter and display if they match
}


// function averagePair(arr, num){
//     let start = 0
//     let end = arr.length-1;
//     while(start < end){
//       let avg = (arr[start]+arr[end]) / 2 
//       if(avg === num) return true;
//       else if(avg < num) start++
//       else end--
//     }
//     return false;
//   }

console.log(averagePair([2,4,5,2,1],3)) // 1,2,2,4,5