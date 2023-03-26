// EXERCISES: LEVEL 1

/*
(Question 1)
Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month,10000 euro annual bonus, 5500 euro online courses per 
month.’
*/

const str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const pattern = /\d+/g;
let sum = 0;
const totalAnnual = str.match(pattern)
totalAnnual.forEach((total) => sum += Number(total))
console.log(totalAnnual);


/* 
(Question 2)
The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles
*/


const txt = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles';
const points = /-?\d/g;
const resultForpoint = txt.match(points);
console.log(resultForpoint)

const sortedPoint =  /-?\d/g;
const resultForDistance=txt.match(sortedPoint);
resultForDistance.sort()
console.log(resultForDistance)

const distance =  /[\d]-?\d/g;
const resultCheck = txt.match(distance);
console.log(resultCheck)


/*
(Question 3)
Write a pattern which identify if a string is a valid JavaScript variable
*/


const patternAz = /[Ff]irst_?name/g
const name = 'first_name';
const testFor = patternAz.test(name);
console.log(testFor)

const patternA = /^[a-z]$/
const nameA = 'first-name';
const testForA = patternA.test(nameA);
console.log(testForA)