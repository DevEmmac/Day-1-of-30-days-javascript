//DAY 3: EXERCISES.

 /* 
 (Question 1) Declare firstName, lastName, country, city, age,
 isMarried, year variable and assign value to it and use the 
 typeof operator to check different data types.
 */

 const firstName = 'Ola';
 console.log(typeof 'Ola');         // string
 const lastName  = 'Emmanuel';
 console.log(typeof 'Emmanuel');   // string
 const country = 'Nigeria';
 console.log(typeof 'Nigeria');   // string
 const city = 'kwara state';
 console.log(typeof 'kwara state')
 const age = 28;
 console.log(typeof 28);     // number
 const isMarried = false;
 console.log(typeof false)   // boolean
 const year = null;
 console.log(typeof null);   // null

 /*
 (Question 2)
  Check if type of '10' is equal to 10
 */
 let check = '10' == 10;
 console.log(check);   // true

 /*
  (uestion 3)
  Check if parseInt('9.8') is equal to 10
 */
 
   let numb = '9.8';
   numbInt = parseInt(numb);
   console.loh(`${numbInt} is equal to 10`); // true

 /*
 (Question 4)
  Boolean value is either true or false.
 */
   //  (1)
  const numOne = 5 > 3;
  console.log(numOne);  //true

  const numTwo = 5;
  numTwo == 5 && 4 > 2;
  console,log(numTwo);  // true

  const numThree = true;
  numThree ? console.log('This is true.') : console.log('Missing the third.');  // This is true

  //  (2)
  const falsyStatementOne = 5 < 3;
  console.log(falsyStatementOne);   // falsy
  
  const falsyStatementTwo = !(5 > 3);
  console.log(falsyStatementTwo);   // falsy

  const falsyStatementThree = '4' === 4;
  console.log(falsyStatementThree);   // falsy


  /*
   (Question 5)
   Figure out the result of the following comparison expression 
   first without using console.log(). After you decide the 
   result confirm it using console.log()
   */
     
      4 > 3
     let result = 4 > 3;
     console.log(result);        // true

      4 >= 3
     let resultTwo = 4 >= 3;
     console.log(resultTwo);     // true

      4 < 3 
     let resultThree = 4 < 3;
     console.log(resultThree);   //falsy

      4 <= 3
     let resultFour = 4 <= 3;
     console.log(resultFour);   // falsy

      4 == 4 
     let resultFive = 4 == 4;
     console.log(resultFive);   // true

      4 === 4
     let resultsix = 4 === 4;
     console.log(resultsix);    // true

     4 != 4
     let seven = 4 != 4;
     comsole.log(seven);       // falsy

     4 !== 4
     let eight = 4 !== 4;
     console.log(eight);      // falsy  

     4 != '4'
     let nine = 4 != '4';
     console.log(nine);       // true

     4 == '4'
     let ten = 4 == '4';
     console.log(ten);        // true

     4 === '4'
     let eleven = 4 === '4';
     console.log(eleven);      // falsy

     let py = 'python';
     let jar = 'jargon';
     console.log(a.length != b.length);    // falsy

   
  /*
   (Question 6)
   Figure out the result of the following expressions first 
   without using console.log(). After you decide the result
    confirm it by using console.log()
  */

    4 > 3 && 10 < 12
    let first = 4 > 3 && 10 < 12;
    console.log(first);    // true

    4 > 3 && 10 < 12
    let second = 4 > 3 && 10 < 12;
    console.log(second);    // false

    4 > 3 || 10 < 12
    let third = 4 > 3 || 10 < 12;
    console.log(third);     // true

    4 > 3 || 10 < 12
    let fourth = 4 > 3 || 10 > 12
    console.log(fourth);          // true

    !(4 > 3)
    let fifth = !(4 < 3);
    console.log(fifth)            // false

    !(4 < 3)
    let sixth = !(4 < 3);
    console.log(sixth);          // true

    !(false)                     // true

    !(4 > 3 && 10 < 12)
    let eightith = !(4 > 3 && 10 < 12);
    console.log(eightith);      // false

    !(4 > 3 && 10 > 12)
    let ninth = !(4 > 3 && 10 > 12);
    console.log(ninth);        // true

    !(4 === '4')
    let tenth = !(4 === '4');
    console.log(tenth);        // true

    // 11. There is no 'on' in both dragon and python
    let on = true;
    on ? console.log('on is in both dragon and python') : console.log('No on in both dragon and pyhon');
 
    /*
     (Question 7)
     Use the Date object to do the following activities.
    */
      
     // 1, What is the year today?
      const todayYear = new Date();
      console.log(todayYear.getFullYear());   // 2023

    // What is the month today as a number?
     const todayMonth = new Date();
     console.log(todayMonth.getMonth());                  // January

    //  What is the date today?
     const todayDate = new Date();
     console.log(todayDate.getDate());             // Sunday

    //  What is the day today as a number?
     const today = new Date();
     console.log(today.getDay());                  // 29

    //  What is the hours now?
       const hours = new Date();
       console.log(hours.getHours());               // 12:00

    //  What is the minutes now?
        const minutes = new Date();
        console.log(minutes.getMinutes());         // 00:27
        
    //  Find out the numbers of seconds elapsed from January 1, 1970 to now.
       const seconds = new Date();
       console.log(seconds.getTime());             //  1674997464764

  