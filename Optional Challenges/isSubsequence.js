// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words the function should check whether the characters in the first string appear somewhere in the second string, without their order changing


function isSubsequence(arr1, arr2){
    var i = 0
    var j = 0

    if(!arr1){
        return true
    }
    while(j < arr2.length){
        if(arr2[j] === arr1[i]){
            i++;
        }
        if(i === arr1.length){
            return true
        }
        j++
    }
}

console.log(isSubsequence('hello', 'hello world')) //true
console.log(isSubsequence('sing', 'sting')) //true