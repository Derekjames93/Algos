// First recursive function
function countDown(num){
    if(num <= 0) {
        console.log('All Done!');
        return;
    }
    console.log(num);
    num --;
    countDown(num)
}
//--------WHATS HAPPENING--------
    //print 3
    // 3 - 1
    //countDown(2)
    // then starts function over again until condition has been met

// Second recursive function
function sumRange(num){
    if(num === 1){
        return 1;
    }
    console.log(num + sumRange(num - 1))
    return num + sumRange(num - 1)
}
sumRange(3)
//--------WHATS HAPPENING--------
    //check if num = 1
    // if not then num + num - 1
    // check if num = 1
// ----- VISUAL DISPLAY----

    // sumRange(3)
    //     return 3 + sumRange(2)
    //                    return 2 + sumRange(1)
    // condition has been met             return 1