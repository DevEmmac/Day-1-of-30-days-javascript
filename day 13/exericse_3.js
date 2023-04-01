// EXERCISE: LEVEL 3


/*
(Question 1)
Check the speed difference among the following loops: while, for, for of, forEach
*/

// while loop

console.log('while loop')
let i = 0;
while (i < countries.length) {
    console.log(countrirs[i])
    i++
}
console.timeEnd('while loop')



//for loop

console.time('time for loop')
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0],countries[i][i])
}
console.timeEnd('time for loop')



// for of loop

console.time('time for of loop')
for (const country of countries) {
    console.log(country)
}
console.timeEnd('time for of lop')



// forEach

console.time('time forEach')
countries.forEach((country) => {
    console.log(country)
})
console.timeEnd('time forEach')