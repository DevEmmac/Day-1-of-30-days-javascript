// EXERCISE: LEVEL 2

/*
(Question 1)
Find a union b
*/

const a = [1, 2, 3, 4]
const b = [3, 4, 5, 6]
const c = [...a, ...b]

const A = new Set(a)
const B = new Set(b)
const C = new Set(c)

console.log(C)

/*
(Question 2)
Find a intersection b
*/

const aa = [1, 2, 3, 4]
const bb = [3, 4, 5, 6]

const aA = new Set(aa)
const bB = new Set(bb)

const intersect = aa.filter((num) => bB.has(num))
const printIntersect = new Set(intersect)

console.log(printIntersect)

/*
(Question 3)
Find a with b
*/

const aWithb = aa.filter((num) => !bB.has(num))
const aaWithbB = new Set(intersect)

console.log(printIntersect)
