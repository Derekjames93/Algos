//=========================================================================================
//Write a function that given a positive integer N, returns the length of its longest binary gap.For example, given N = 1041 the function should return 5, because N has length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
//=========================================================================================
//Write an efficient algorithm for the following assumptions:
    //N is an integer within the range [1..2,147,483,647]

function solution(number){
    //number should be a positive integer && range
    //convert number to binary
    var binary = number.toString(2)
    //create a counter variable to count the amount of zeros
    let count = 0;
    let gap = 0
    let biggest = 0
    let actualCount = 0
    // for loop to loop through the number in binary
    for (let index = 0; index < binary.length; index++) {
        const numArray = binary[index];
        console.log(numArray)
        if(numArray == 0){
            //when number is 0 increase count by 1
            count = count +1
            actualCount = actualCount + 1
            console.log(count,actualCount)
        }
        else {
            //record total amount of 0s and set to gap
            gap = count
            //if function for checking if the actual count is greater
            if(actualCount >= biggest){
                //record biggest count 
                biggest = actualCount
                // reset actual count back to 0 when the number is one
                actualCount = 0
            }
        }
    }
    //returns length of longest gap or MAX Binary

    console.log('Total Gaps found:', gap )
    console.log('Biggest Gap found;', biggest)
    // console.log(stringLength)
    return binary
}

// answer is 10000010001 and 2 binary gaps
console.log(solution(1041))