//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word,phrase,or name formed by rearranging the letters of another, such as cinema, formed from iceman
//Examples
//validAnagram('','') returns true
//validAnagram('aaz','zza') returns false
//validAnagram('anagram','nagaram') returns true

//------Teacher Solution
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}
//------------My Solution-------
//function that accepts two strings as its param
function validAnagram(str1, str2) {
    //make sure both strings are the same length
    if (str1.length !== str2.length) {
        return false
    }
    //make frequencyCounter empty objects to store both strings
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //for loop to store string in frequency object
    for (let letter of str1) {
        frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1
    }
    for (let letter of str2) {
        frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for (let key in frequencyCounter1) {
        //check to see if both objects have the same count of letters
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false
        }
    }
    return true

}

console.log(validAnagram('anagram', 'nagaram')) // returns true
console.log(validAnagram('aaz', 'zza')) // returns false
console.log(validAnagram('', '')) // returns true
console.log(validAnagram('rat', 'car')) // returns false
console.log(validAnagram('awesome', 'awesom')) // returns false
console.log(validAnagram('qwerty', 'qeywrt')) // returns true