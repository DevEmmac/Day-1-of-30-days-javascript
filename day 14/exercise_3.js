// ERROR TYPES

// ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.

/*
(Example 1)
 */

let firstName = 'Emmanuel'
let fullName = firstName + ' ' + lastName
console.log(fullName)


                                    // Uncaught ReferenceError: lastName is not defined
                                    // at <anonymous>:2:35





/*
(Example 2)
SyntaxError: A syntax error has occurred
*/


//l et square = 2 x 2;
// console.log(square)
// console.log('Hello, world")


                               // Uncaught SyntaxError: Unexpected identifier




/*
(Example 3)
TypeError: A type error has occurred
*/

let num = 10
console.log(num.toLowerCase())


                                        // TypeError: num.toLowerCase is not a function
                                        //     at <anonymous>:2:17