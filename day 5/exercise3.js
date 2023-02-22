// EXERCISE: LEVEL 3

/*
(QUESTION 1)
The following is an array of 10 students ages:
 */

// (1) Sort the array and find the min and max age

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();                           
console.log(ages);            //  [ 19, 19, 20, 22, 24,
                              //    24, 24, 25, 25, 26]

const min = Math.min(19, 22, 19, 24, 20, 25, 26, 24, 25, 24);
console.log(min)               // 19
                
const max = Math.max(19, 22, 19, 24, 20, 25, 26, 24, 25, 24);
console.log(max);               // 26


// (2) Find the median age(one middle item or two middle items divided by two)

const median = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
median.sort();                  //   [19, 19, 20, 22, 24,24, 24, 25, 25, 26]
console.log(median);
const len = 10;
const middleItems = Math.floor(len / 2);
const medianAge = (median[middleItems] + median[middleItems ]) / 2;
console.log(medianAge);                            // 24


// (3) Find the average age(all items divided by number of items)

const age = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sum = age.reduce((a, b) => a + b);
const ave = sum / age.length;
const average = Math.round(ave);
console.log(ave1);                           // 23


// (4) Find the range of the ages(max minus min)

const age1 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const maxAge = 26;
const minage = 19;
const range = (maxi - mini);
console.log(range);                          // 7


// (5) Compare the value of (min - avarage) and (max - average)
  
const mini = 19;
const maxi = 26;
const ave1 = 23;
const minAv = Math.abs(mini - ave1);
//console.log(minAv);
const maxAv = Math.abs(maxi - ave1);
const comp = (minAv) == (maxAv);
console.log(comp);

/*
 (Question 2)
  Find the middle country(ies) in the countries array.
*/

    const countries = [ 'Albania',
                        'Bolivia',
                        'Canada',
                        'Denmark',
                        'Ethiopia',
                        'Finland',
                        'Germany',
                        'Hungary',
                        'Ireland',
                        'Japan',
                        'Kenya']
   middleCountry = countries[5];
   console.log(middleCountry);         //    Finland

 /*
  (Question 3)
  Divide the countries array into two equal arrays if it is 
  even. If countries array is not even , one more country for 
  the first half.
 */

    const countriesArray = [ 'Albania',
                            'Bolivia',
                            'Canada',
                            'Denmark',
                            'Ethiopia',
                            'Finland',
                            'Germany',
                            'Hungary',
                            'Ireland',
                            'Japan',
                            'Kenya']    
const arr1 = ['Albania', 'Bolivia', 'Canada', 'Denmark' ,'Ethiopia']
arr1.unshift('Spain')
console.log(arr1);
const arr2 = ['Finland', 'Germany', 'Hungry', 'Ireland', 'japan', 'kenya']
console.log(arr2); 