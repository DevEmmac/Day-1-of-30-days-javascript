 /*
 (Question 1)
  Get user input using prompt(“Enter your age:”). If user is 18 or
  older , give feedback:'You are old enough to drive' 
  but if not 18 give another feedback stating to wait for the number 
  of years he needs to turn 18.
 */

  let userInput = prompt('Enter your age: ');        // Enter your age: 30
  let input = userInput >= 18;

  if (input) {

    console.log('You are old enough to drive.')   //  You are old enough to drive.

  } else {                                          // Enter your age: 15

    console.log('You are left with 3 years to drive.')  // You are left with 3 years to drive.
  
  }

  /*
  (Question 2)
   Compare the values of myAge and yourAge using if … else.
   Based on the comparison and log the result to console stating 
   who is older (me or you). Use prompt(“Enter your age:”) 
   to get the age as input.
  */

   let ageInput = prompt('Enter your age: ');          // Enter your age: 30
   let yourAge = 25 <= ageInput
   
   if (yourAge) {

    console.log('You are 5 years older than me.')      // You are 5 years older than me.
   
   } else (

    console.log('You are not older than me')
   )


   /*
    (Question 3)
    If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
  */
    let a = 4;
    let b = 3;
    let ab = a > b;

    // using if else
    if (ab) {

        console.log(`${a} is greter than ${b}`)
    
    } else {

        console.log(`${a} is less than ${b}`)
    }

    // using ternary operator
    ab ? console.log(`${a} is greater ${b}`) : console.log(`${a} is less than ${b}`);

    /*
     (Questiion 4)
     Even numbers are divisible by 2 and the remainder is zero. How do you check,
      if a number is even or not using JavaScript?
    */
     
      // checks whether the number is even. If the remainder is 0, the number is even.
       
      const number = prompt('Enter a number: ');
      const numb = 2;
      const numb2 = 9;
      if(number % 2 == 0) {

        console.log(`${numb} is an even number`)
      
      } else {

        console.log(`${numb2} is an old number`)
      }