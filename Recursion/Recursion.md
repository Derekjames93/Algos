# Helpful Notes

## What is Recursion
  * A process (a function in our case) that calls itself. 
* Recursion is everywhere
  * JSON.parse/JSOn.stringfy
  
## The Call Stack
* Its a stack data structure.
* Any time a function is invoked it is placed (pushed) on the top of the call stack
* When Javscript sees the return keyword or when the function ends, the compiler will remove(pop)
* When writing recursive functions, we keep pushing new functions onto the call stack
## How Recursive functions work
*  Invoke the same function with a different input until you reach your base case!
*  Base Case
   *  Where the recursion stops
   *  This is the most important concept to understand 
* Needs Base Case and Different Input

## Example
```js
// First recursive function
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
}
```