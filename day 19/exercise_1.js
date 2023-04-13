// EXERCISE: LEVEL 1

/*
(Question 1)
Create a closure which has one inner function
 */

function closureFunc () {
    let count = 0;
    function oneInnerFunc() {
        count++
        return count
    } 
    return oneInnerFunc
} 
const inner = closureFunc()
console.log(inner())
console.log(inner())