// Exercise: Level 2

/*
(Question 1)
Write a code which can give grades to students according 
to theirs scores
*/

// 80-100, A
// 70-89,  B
// 60-69,  C// 50-59,  D
// 0-49,   F


 let studentA = prompt('Enter students scores: ');
 let gradeA = studentA;

    switch (true) {
    case(gradeA >= 80):         // Enter students scores: 85
    console.log('A');                // A
    break;
    case (gradeA >= 70):        // Enter students score: 79
    console.log('B');                // B
    break;
    case(gradeA >= 60):          // Enter students score: 65
    console.log('C');                // C
    break;            
    case(gradeA >= 50):          // Enter students score: 51
    console.log('D');                 // D
    break;
    case(gradeA >= 0):          // Enter students score: 34
    console.log('f');                 // F
 }

 /*
 (Question 2)
 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
*/
 
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

    
let season = prompt('What season is this: ');
let userInput = season;

switch (true) {
case (userInput == "November"):
console.log('the season is Autumn.');
break;
case (userInput == 'September'):
console.log('the season is Autumm.');
break;
case (userInput == 'Octomber'):
console.log('the season is Autumn.')
break;
case (userInput == 'December'):
console.log('The season is Winter');
break;
case (userInput == 'January'):
console.log('The season is Winter');
break;
case (userInput == 'February'):
console.log('The season is Winter');
break;
case (userInput == 'March'):
console.log('The season is Spring');
break;
case (userInput == 'April'):
console.log('The season is Spring');
break;
case (userInput == 'may'):
console.log('The season is spring');
break;
case (userInput == 'June'):
console.log('The season is Summer')
break;
case (userInput == 'july'):
console.log('The season is Summer')
break;
case (userInput == 'August'):
console.log('The season is Summer');
break;
default:
console.log('Wrong input');
break;
}  


/*
(Question 3)
  Check if a day is weekend day or a working day. 
  Your script will take day as an input.
 */
  
  let workDay = prompt('What is the day ? ');
  let today = workDay;

if (today == 'Saturday') {

   console.log(`${today} is a weekend.`);

 } else if (today == 'saturDay') {

   console.log(`${today} is a weekend.`);

 } else if (today == 'Friday') {

   console.log(`${today} is a working day.`);

 } else if (today = 'frIDAy') {

   console.log('Friday is a working day.')
 }