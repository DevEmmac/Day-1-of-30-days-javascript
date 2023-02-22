/* 
(QUESTION 1) Declare a variable named challenge and assign it to an initial
 value '30 Days Of JavaScript'
 */

const challenge = '30 days Of JavaScript';

/* 
(QUESTION 2) Print the string on the browser 
console using console.log()
*/

console.log(challenge);

/*
 (Question 3) Print the length of the string on the browser 
 console using console.log()
*/

console.log(challenge.length);  // 20

/*
 (Question 4)Change all the string characters to capital letters
 using toUpperCase() method
*/

console.log(challenge.toUpperCase()); // 30 DAYS OF JAVASCRIPT

/*
(Question 5) Change all the string characters to lowercase letters
 using toLowerCase() method
*/

console.log(challenge.toLowerCase());  // 30 days of javascript

/*
(Question 6) Cut (slice) out the first word of the string 
using substr() or substring() method
*/

let secoundDay = '30 days of javascript';
console.log(firstWord.substring(2,18)); // days of javascript

/*
 (Questions 7) Slice out the phrase Days Of JavaScript 
 from 30 Days Of JavaScript.
*/

console.log(secoundDay.toString(8,13));  //of javascript

/*
 (Question 8) Check if the string contains a word Script 
 using includes() method
*/

console.log(secoundDay.includes(Script));  // true

/*
 (Question 9) split the string into an array using split()
 method
*/

console.log(secoundDay.split()); // ["30 days of javascript"]

/*
 (Questtion 10) Split the string 30 Days Of JavaScript at the
  space using split() method
*/

console.log(secoundDay.split('')); // ["30", "days", "of", "javascript"]

/*
 (Questions 11) 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
 split the string at the comma and change it to an array.
*/

   console.log(secoundDay.split(',')); // ["Facebook", " Google", " Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

/*
  (Question 12) Change 30 Days Of JavaScript to 30 Days Of 
  Python using replace() method.
*/

 console.log(secoundDay.replace('JavaScript', 'Python'));

/*
 (Question 13) What is character at index 15 in '30 Days Of
  JavaScript' string? Use charAt() method.
*/

  console.log(secoundDay.charAt(15)); // S

/*
  (Question 14) What is the character code of J in '30 Days
  Of JavaScript' string using charCodeAt()
*/

   console.log(secoundDay.charCodeAt(J))  // 11

/*
  (Question 15) Use indexOf to determine the position of the 
  first occurrence of a in 30 Days Of JavaScript
*/

   console.log(secoundDay.indexOf(a)) // 4

/*
  (Question 16) Use lastIndexOf to determine the position of the last occurrence 
  of a in '30 Days Of JavaScript'.
*/

    console.log(secoundDay.lastIndexOf(a));  // 15

/*
  (Question 17) Use indexOf to find the position of the first| 
  occurrence of the word because in the following sentence:
  'You cannot end a sentence with because because because is 
  a conjunction'
*/

  console.log(secoundDay.indexOf(because)); // 31

/*
 (Question 18) Use lastIndexOf to find the position of the last 
  occurrence of the word because in the following sentence:
  'You cannot end a sentence with because because because is
   a conjunction'
*/

  console.log(secoundDay.lastIndexOf(because));  // 47

/*
 (Question 19) Use search to find the position of the first 
  occurrence of the word because in the following sentence:
  'You cannot end a sentence with because because because is
   a conjunction'
*/

  console.log(secoundDay.search(because));  // 31

/*
  (Question 20) Use trim() to remove any trailing whitespace 
   at the beginning and the end of a string.E.g 
    ' 30 Days Of JavaScript '.
*/

  console.log(secoundDay.trim(''))  // 30 Days Of JavaScript

/*
  (Question 21) Use startsWith() method with the string 30 Days
  Of JavaScript and make the result true
*/
  
  console.log(secoundDay.startsWith(30));  // true

/*
  (Question 22) Use endsWith() method with the string 30 Days Of 
   JavaScript and make the result true
*/

  console.log(secoundDay.endsWith(Script)); // true

/*
  (Question 23) Use match() method to find all the a’s in 30 Days Of JavaScript
*/

  console.log(secoundDay.match('a'));  // 3

/*
  (Question 24) Use concat() and merge
  '30 Days of' and 'JavaScript' to a single string,
    '30 Days Of JavaScript'
*/

  let dayTwo = '30';
  console.log(dayTwo.concat(" Days", "of", "JavaScript"));
       
/*
  (Question 25) 
   Use repeat() method to print 30 Days Of JavaScript 2 times
*/

  console.log(secoundDay.repeat(2)); // 30 Days Of JavaScript 30 Days Of JavaScript


  // Exercise: Level 2

/*
  (Question 1)
   Using console.log() print out the following statement:
*/

  let liftUp = 'There is no exercise better for the heart than reaching down and lifting people up.';
  console.log(liftUp.concat("by John Holmes teaches us to \help\ one another."));
        
/*
  (Question 2)
   Using console.log() print out the following quote 
    by Mother Teresa:
*/

  console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

/*
  (Question 3) 
   Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
*/

  comsole.log(typeof '10') // string
  let doz = '10';
  dozInt = Number(doz);
  console.log(dozInt);  // 10

/*
  (Question 4) Check if parseFloat('9.8') is equal to
  10 if not make it exactly equal with 10.
*/

  let doze = '9.8';
  dozeFloat = parseFloat(doze);
  console.log(Math.round(dozeFloat)); // 10.

/*
  (Question 5) 
   Check if 'on' is found in both python and jargon
*/

  let pyth = 'python and jargon';
  console.log(pyth.includes('on')); // true
          
/*
  (Question 6) I hope this course is not full of jargon.
   Check if jargon is in the sentence.
*/
          
  console.log(pyth.includes('jargon')); // true

/*
  (Question 7)
  Generate a random number between 0 and 100 inclusively.
*/

  let randomN = Math.random();
  let random = randomN * 101;
  console.log(random);  // 100.99

/*
  (Question 8)
  Generate a random number between 50 and 100 inclusively. 
*/
          
  const min = 50;
  const max = 100;
    // generate a random number
  const a = Math.floor(Math.random() * max - min) + min; 
  console.log(`this value is between ${min} and ${max} is ${a}`);
        
/*
  (Question 9)
  Generate a random number between 0 and 255 inclusively.
*/

  let mathMin = Math.random();
  let mathMax = Math.floor(Math.random() * 256);
  console.log(mathMax);

/*
  (Question 10)
   Access the 'JavaScript' string characters using a random number.
*/
        
    ' JavaScript'
    /* 0123456789 */

/*
  (Question 11)
   Use console.log() and escape characters to print the following pattern.
*/

  console.log('A numb through 1\t1\t1\t1\t1')             //  1 1 1 1 1
  console.log('Mix numb 2\t1\t2\t4\t8')                   //  2 1 2 4 8
  console.log('Start with three 3\t1\t3\t9\t27')          //  3 1 3 9 27
  console.log('End with four 4\t1\t4\t16\t64')            //  4 1 4 16 64
  console.log('mix number 5\t1\t5\t25\t125')              //  5 1 5 25 125

/*
  (Question 12) Use substr to slice out the phrase because because because from the following sentence:
  'You cannot end a sentence with because because because is a conjunction'
*/
        
  let phrase = 'You cannot end a sentence with because because because is a conjunction';
  console.log(phrase.substr(31,23));  // because because because


  // Exercises: Level 3

/*
  (Question 1) 'Love is the best thing in this world. Some found their love and some are still looking for their 
   love.' Count the number of word love in this sentence.
*/

  let sentance = 'Love is the best thing in this world.Some found their love and some are still looking for their';
  console.log(sentance.search('love'));  // 55

/*
  (Question 2) 
   Use match() to count the number of all because in the following sentence:'You cannot end
    a sentence with because because because is a conjunction'
*/
    let count = 'You cannot end a sentence with because because because is a conjunction';
    console.log(count.match('because'));

       // ["because" index: 31 input: You cannot end a sentence with because because because is a conjunction', group: undefined]

/* 
 (Question 3) 
 Clean the following text and find the most frequent word 
 (hint, use replace and regular expressions).
*/

    const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
    const regEx = /[^\w\s]/gi;
    console.log(sentences.replace(regEx, ''));

/*
 (Question 4)
 Calculate the total annual income of the person by extracting the 
 numbers from the following text. 'He earns 5000 euro from salary per 
 month, 10000 euro annual bonus, 15000 euro online courses per month.'
 */

    const salaryPerMonth = 5000;
    const annualBonus = 10000;
    const totalResult = salaryPerMonth + annualBonus;
    console.log(`Total annnuel: ${totalResult}`);  // Total annuel: 1500.
    