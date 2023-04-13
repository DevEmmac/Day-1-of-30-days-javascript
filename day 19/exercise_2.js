// EXERCISE: LEVEL 2


/*
Create a closure which has three inner function
*/

function threeInnerFunc () {
    let count = 0;
    function firstInnerFunc() {
        count++
        return count
    }
    function secoundInnerFunc() {
        count--
        return count
    }
    function thirdInnerFunc() {
        count+= 1
        return count
    }
    return {
        firstInnerFunc:firstInnerFunc(),
        secoundInnerFunc:secoundInnerFunc(),
        thirdInnerFunc:thirdInnerFunc()
    }
}
const wholeInnerFunc = threeInnerFunc()

console.log(wholeInnerFunc.firstInnerFunc)
console.log(wholeInnerFunc.secoundInnerFunc)
console.log(wholeInnerFunc.thirdInnerFunc)