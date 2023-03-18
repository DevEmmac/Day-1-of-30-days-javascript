// EXERCISE: LEVEL 2

/*
(Question 1)
Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
*/

const totalPrice = products.map((product) => product.price).filter((price) => price > 0).reduce((acc, cur) => acc + cur);
console.log(totalPrice)


/*
(Question 2)
Find the sum of price of products using only reduce reduce(callback))
*/


const productPrice = products.reduce((acc, cur) => {typeof cur.price === 'number' ? acc += cur.price : acc
    return acc
}, 0)
 console.log(productPrice)

/*
(Question 3)
Declare a function called categorizeCountries which returns an 
array of countries which have some common pattern(you find the
countries array in this repository as countries.js(eg 'land',
'ia', 'island','stan')).
*/

const countriesArr = ['Afghanistan','Island','Albania','algeria','Anquilla','angentina','Armenia','Aruba','Australia','Austria'
,'Bermuda','Brazil','Canada','Chad','China','Colombia','Comoros','Congo','Cuba','Cyprus','Mali','Poland','Qutar','Zambia','Zimbabwe']

function categorizeCountries (countriesArr, patternkey) {
    return countriesArr.filter((country) => country.endsWith(patternkey));
 }
 console.log(categorizeCountries(countriesArr, 'us'))


 /*
 (Question 4)
 Create a function which return an array of objects, which is the
 letter and the number of times the letter use to start with a 
 name of a country.
*/


const countriesIStartWith = countriesArr.filter((country) => country.startsWith('C'));
console.log(countriesIStartWith)


/*
(Question 5)
Declare a getFirstTenCountries function and return an array of ten
countries. Use different functional programming to work on the countries.js array
*/


function  getFirstTenCountries () {
    let n = 10;
   const getFirstTen = countriesArr.slice(0, n).map((country) => country)
    console.log(getFirstTen)
    return getFirstTen;
}
getFirstTenCountries(countriesArr);



/*
(Question 6)
Declare a getLastTenCountries function which returns the 
last ten countries in the countries array.
*/


function getLastTenCountries () {
         let n = 10;
          const getlastTen = countriesArr.slice(-n).map((country) => country)
           console.log(getlastTen)
            return getlastTen;
     }
     getLastTenCountries(countriesArr)



/*
(Question 7)
Find out which letter is used many times as initial for a country
name from the countries array (eg. Finland, Fiji, France etc)
*/


function mostFrequentInitialLetter () {
    let frequentLetter = countriesArr.map(([country]) => country).reduce((acc, cur) => { 
       acc[cur] = (acc[cur] || 0 ) + 1;   
       return acc
   },{});
     return Object.keys(frequentLetter).reduce((a, b) => frequentLetter[a] > frequentLetter[b] ? a : b)
   }
   console.log(mostFrequentInitialLetter(countriesArr))
   