// Exercise: level 1

/*
(Question 1)
Declear an empty array:
 */

const arr = [];
console.log(arr);       // []

/*
(Question 2)
Declear an array with more than 5 number of elements
*/
const countries = ['Bolivia','Canada','ireland','Japan','Germany','Keyan'];
console.log(countries);

/*
(Qestion 3)
Find the lenght of your array
*/

const countriesA = ['Bolivia','Canada','ireland','Japan','Germany','Keyan'];
console.log(countriesA.length);      // 6

/*
(Question 4)
Get the first item,the middle item and the last items of the array
 */
console.log(firstCountries)    // Bolivia

const middleCon = countriesA[2,4];
console.log(middleCon);                 // Ireland,Japan

const lastCountry = countries[5];
console.log(lastCountry);               // keyan


/*
(Question 5)
Declear an array called mixedDataTypes,put diffeent data types in
the aray and find the length of the array. the array size 
should be greater than 5
 */

const mixedDataTypes = [3,10,'find','array',1.23,[1,2,3]];
console.log(mixedDataTypes.length);         // 6


/*
(Question 6)
Declare an array variable name itCompanies and assign
initial values Facebook, Google, Microsoft, Apple, IBM, 
Oracle and Amazon
*/

const itCompanies = ['Facebook',
                    'Google',
                    'Microsoft',
                    'Apple',
                    'IBM',
                    'Orace',
                    'Amazon']
 

/*
(Question 7)
Print the array using console.log()
 */

console.log(itCompanies);    // ["Facebook",
                            //  "Google",
                            //  "Microsoft",
                            // "Apple",
                            //  "IBM",
                            //   "Orace",
                            // "Amazon"]


 /*
 (Question 8)
 print the number of conpanies in the array 
 */       

 const numbers = ['Facebook',
                  'Google',
                  'Microsoft',
                  'Apple',
                  'IBM',
                  'Orace',
                  'Amazon']

console.log('number of companies:',numbers.lenght);

/*
 (Question 9)
print the first company,middle and last company
*/

console.log(numbers[0]);   // Facebook
 
console.log(numbers[3]);    // Apple

console.log(numbers(lastindex));    //Amazon


/*
 (Question 10)
print out each company
*/

const eachCompay = ['Facebook',
                    'Google',
                    'Microsoft',
                    'Apple',
                    'IBM',
                    'Oracle',
                    'Amazon']

console.log(eachCompay);  // ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];


/*
(Question 11)
Change each company name to uppercase one by one and print them out
*/

const companyName = ['FACEBOOK',
                    'GOOGLE',
                    'MICROSOFT',
                    'APPLE',
                    'IBM',
                    'ORACLE',
                    'AMAZON'];
console.log(upperCom);            //  [
                                  // 'FACEBOOK',
                                  //  'GOOGLE',
                                  // 'MICROSOFT',
                                  //  'APPLE',      
                                  //  'IBM',
                                  //  'ORACLE',
                                  //  'AMAZON'
                                  // ]


                            
/*
 (Question 12)
 Print the array like as a sentence: Facebook, Google, 
 Microsoft, Apple, IBM,Oracle and Amazon are big IT
 companies.
*/

  
const sentence = ['Facebook',
                    'Google',
                    'Microsoft',
                    'Apple',
                    'IBM',
                    'Oracle',
                    'Amazon']


console.log(`${sentence} are big IT companies.`);  // Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon are big IT companies.


/*
 (Question 13)
  Check if a certain company exists in the itCompanies
   array. If it exist return the company else return a 
   company is not found
*/

  let itCompaniesEx = ['Facebook',
                    'Google',
                    'Microsoft',
                    'Apple',
                    'IBM',
                    'Oracle',
                    'Amazon'];
  let index = itCompaniesEx.indexOf('Microsoft');
if (index === 2) {
    console.log('Microsoft company is found');   // Miscrosoft company is found
} else {
    console.log('company is not found');    
}


/*
(Question 14)
 Filter out compaines which have more than one 'o' without 
 the filter method
 */

 const filter = ['Facebook',
                'Google',
                'Microsoft',
                'Apple',
                'IBM',
                'Oracle',
                'Amazon'];
 console.log(filter.slice(0,2));        // [ 'Facebook', 'Google' ]


 /*
  (Question 15)
   sort the array using sort() method
  */

   const sortArr = ['Facebook',
                'Google',
                'Microsoft',
                'Apple',
                'IBM',
                'Oracle',
                'Amazon'];
  console.log(sortArr.sort());    //  ['Amazon',
                                  //     'Apple',
                                  //      'Facebook'
                                  //     'Google'
                                  //      'IBM'
                                  //      'Microsoft'
                                  //      'Oracle']


/*
(Question 16)
 Reverse the array using reverse() method
 */

 const reverseArr = ['Facebook',
                'Google',
                'Microsoft',
                'Apple',
                'IBM',
                'Oracle',
                'Amazon'];
console.log(reverseArr.reverse());    // ['Amazon',
                                      // 'Oracle',
                                      //  'IBM',
                                      //  'Apple',
                                      //  'Microsoft',
                                      //  'Google',
                                      //  'Facebook'];    
                                      
                                      
/*
(Question 17)
 slice out the first 3 companies from the array
 */

 const sliceOut = ['Facebook',
                'Google',
                'Microsoft',
                'Apple',
                'IBM',
                'Oracle',
                'Amazon'];
console.log(sliceOut.slice(0,3));     // [ 'Facebook',
                                      //    'Google',
                                      //    'Micrisoft'];


/*
_(Question 18)
 slice out the last 3 companies froem the array
 */
  
  const sliceLast = ['Facebook',
                    'Google',
                    'Microsoft',
                    'Apple',
                    'IBM',
                    'Oracle',
                    'Amazon'];
 console.log(sliceLast.slice(4,7))        // ['IBM',
                                          //  'Oracle'
                                          //  'Amazon']


/*
(Question 19)
 slice out the middle IT company or comapanies from the array
 */

   const sliceMiddle = ['Facebook',
                      'Google',
                      'Microsoft',
                      'Apple',
                      'IBM',
                      'Oracle',
                      'Amazon'];
  console.log(sliceMiddle.slice(3,4))         //  ['Apple']


/*
 (Question 20)
  Remove the first oIT company from the array
 */
    
    const removeFirst = ['Facebook',
                          'Google',
                          'Microsoft',
                          'Apple',
                          'IBM',
                          'Oracle',
                          'Amazon'];
  removeFirst.shift()
  console.log(removeFirst);      // [ 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]


  /*
  (Question 21)
   Remove the middle of IT companies from the array
  */
     
    const removeMiddle = ['Facebook',
                          'Google',
                          'Microsoft',
                          'Apple',
                          'IBM',
                          'Oracle',
                          'Amazon'];
   removeMiddle.splice(3,1);            
   console.log(removeMiddle)     // [ 'Facebook', 'Google', 'Microsoft', 'IBM', 'Oracle', 'Amazon' ]

/*
(Question 22)
  Remove the last IT company from the last 
*/  

  const removeLast = ['Facebook',
                        'Google',
                        'Microsoft',
                        'Apple',
                        'IBM',
                        'Oracle',
                        'Amazon'];
removeLast.splice(6,1);            
console.log(removeLast)       //  [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' ]


/*
(Question 23)
Remove all IT companies
 */

    const removeAll = ['Facebook',
                        'Google',
                        'Microsoft',
                        'Apple',
                        'IBM',
                        'Oracle',
                        'Amazon'];
   
   console.log(removeLast.splice());      //  []
