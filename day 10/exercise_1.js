// EXERCISE: LEVEL 1

/*
(Question 1)
create an empty set
*/

const emptySet = new Set ()
console.log(emptySet)

/*
(Question 2)
Create a set containing 0 to 10 using loop
*/

const setZeroToTen = new Set()
for (let i = 0; i < 10; i++) { // iterating from 0 to 10
   setZeroToTen.add(i)
}
console.log(setZeroToTen)


/*
(Question 3)
Remove an element from a set
*/

for (let i = 0; i < 10; i++) { // iterating from 0 to 10
    setZeroToTen.add(i).delete(5)
 }
 console.log(setZeroToTen)
 

/*
(Question 4)
Clear a set
*/

for (let i = 0; i < 10; i++) { // iterating from 0 to 10
    setZeroToTen.clear(i)
 }
 console.log(setZeroToTen)


/*
(Question 5)
Create a set of 5 string elements from array
*/
 
const softDrinks = ['Coke', 
                  'Fanta', 
                  'Mirinda', 
                  'Smoov', 
                  'MountaindEW',
                  'Smoov',
                  'Coke',
                  'Mirinda',
                  'Fanta'
                  ]
const setOfDrinks = new Set(softDrinks)
console.log(setOfDrinks)


/*
(Question 6)
Create a map of countries and number of characters of a country
*/

const countries = ['Togo', 
                  'Ganna', 
                  'India', 
                  'Dubai', 
                  'SouthAfrica',
                  'London',
                  'Paris',
                  'Canada'
                  ]
const setOfcounts = countries.map((country) => `${country} : ${country.length}`)
console.log(setOfcounts) 