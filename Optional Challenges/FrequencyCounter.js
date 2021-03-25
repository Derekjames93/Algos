//Implement a function called, areThereDuplicates which accepts a variable number of arguments,and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern

function areThereDuplicates(...args) {
    args.sort()
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false

}

console.log(areThereDuplicates(1, 2, 3)) //false
console.log(areThereDuplicates(1, 2, 2)) //true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) //true