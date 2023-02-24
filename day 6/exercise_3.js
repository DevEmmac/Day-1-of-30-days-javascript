//EXERCISE 3

/*
(Question 1)
Copy countries array(Avoid mutation) 
*/
     const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
     console.log(countries);

/*
(question 2)
Arrays are mutable. Create a copy of array which does not modify the original.
 Sort the copied array and store in a variable sortedCountries
 */

 const sortedCountries = countries.sort();
     console.log(sortedCountries);

/*
(Quesstion 3)
sort the webTechs and mermStack array
*/
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  
   const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
    const array = webTechs.sort().concat(mernStack.sort());
    console.log(array)

/*
(Question 4)
Extract all the countries contain the
word 'land' from the countries array and print it as array
*/

const arr = [];
for (let i = 0; i < countries.length; i++) {
    countries[i].includes('land') ? arr.push(countries[i]) : (countries[i]);
}
console.log(arr);

/*
(Question 5)
Find the country containing the hightest number of characters in 
the countries array
*/

let highest = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > highest.length) {
        highest = countries[i];
    }
}
console.log(highest);

/*
(Question )
Extract all the countries contain the word 'land' from the 
countries array and print it as array
*/






