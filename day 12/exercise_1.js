// EXERCISES: LEVEL 1

/*
(Question 1)
Calculate the total annual income of the person from the 
following text. ‘He earns 4000 euro from salary per month,
10000 euro annual bonus, 5500 euro online courses per 
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
The position of some particles on the horizontal x-axis 
-12, -4, -3 and -1 in the negative direction, 0 at origin,
4 and 8 in the positive direction. Extract these numbers
and find the distance between the two furthest particles
*/

const txt = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles';
const points = /\d/g;
const result = txt.match(points);


const txt = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest paricles';
const points = /\d/g;
const results = txt.match(points);
console.log(results)

const sortedPoints =  /-?\d/g;
const result =txt.match(sortedPoints);
result.sort()
console.log(result)


const sortedPoint =  /[\d]-?\d/g;
const resultCheck = txt.match(sortedPoint);
console.log(resultCheck)


// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1,

