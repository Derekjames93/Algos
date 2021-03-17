//=================================================================
// Write a function which takes in a string and returns counts of each character in the string
//=================================================================

// charCount("aaaa"); // {a:4, b:0, c:0}
// charCount('hello'); //{h:1, e:2, l:2, o:1}

// "my phone is 8349349" //account for spaces
// "Hello hi" //what about uppercase and lower case
// charCount("") //return null or undefined?

function characterCountt(str) {
    //make object to return at end
    let result = []
    //loop over string, for each character...
    for (let index = 0; index < str.length; index++) {
        const char = str[index].toLowerCase();
        //if char is a number/letter AND key in object, add one to count
        if (/[a-z0-9]/.test(char)) {

            if (result[char] > 0) {
                result[char]++;
            }
            //if char is a number/letter AND not in object add it and set count to 1
            else {
                result[char] = 1;
            }
            console.log(result)
        }

    }
    //if char is something else (space,period, etc.) don't do anything

    //return object at end
    console.log(result)
    return result
}

// for of refactor
function charCount(str) {
    var result = {}
    for (var char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {
            // if result is truthy (has value in it) then add 1 to the value. if falsey (no value ) set the value to 1
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && //numeric (0-9)
        !(code > 64 && code < 91) && //upper alpha (A-Z)
        !(code > 96 && code < 123)){ //lower alpha (a-z)
            return false
        }
        return true
}

// characterCountt("Your Pin number is 1234!")
console.log(charCount("Your Pin number is 1234!"))