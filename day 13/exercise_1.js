// EXERCISE: LEVEL 1

/*
(Question 1)
Display the countries array as a table
*/

console.table(countries ,['name','country','city','age'])

/*
(Question 2)
Display the countries object as a table
*/


console.table(countries)

/*
(Question 3)
Use console.group() to group logs
*/

console.group('countries')
console.log(countries)
console.groupEnd()
