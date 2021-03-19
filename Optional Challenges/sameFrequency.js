//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits

function sameFrequency(num1, num2){
    let newNum1 = num1.toString();
    let newNum2 = num2.toString();
    if(newNum1.length != newNum2.length){
        return false
    }
    let storedNumber = {};

    for (let i = 0; i < newNum1.length; i++) {
        let number = newNum1[i];
        console.log(number)
        storedNumber[number] ? storedNumber[number] +=1 : storedNumber[number] = 1;
    }
    console.log(storedNumber)
    for (let i = 0; i < newNum2.length; i++) {
        let number = newNum2[i];
        if(!storedNumber[number]){
            return false;
        }else{
            storedNumber[number] -= 1;
        }
    }
    return true

}

console.log(sameFrequency(182,281)) //true
console.log(sameFrequency(34,14)) //false