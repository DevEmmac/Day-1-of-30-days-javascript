// Exercises: Level 3

/*
(Question 1)
Modify the userIdGenerator function. Declare a function name 
userIdGeneratedByUser. It doesn’t take any parameter but it takes 
two inputs using prompt(). One of the input is the number of
characters and the second input is the number of ids which are 
supposed to be generated.
*/
function userIdGeneratedByUser () {
    let userNumber = parseInt(prompt('Enter the numbers of character to be generated:'));
    let userId = parseInt(prompt('Enter the numbers of ID to be generated:')) + 2;
    randomId = '';
    for (let i = 0; i < userNumber; i++) {
        randomId = Math.random().toString(36).substring(2,userId);
      console.log(randomId);
    }
    return randomId;
 }
 
/*
(Question 2)
Write a function name rgbColorGenerator and it generates rgb colors.
*/

  function rgbColorGenerator () {
    let color1 = Math.floor(Math.random() * 255);
    let color2 = Math.floor(Math.random() * 255);
    let color3 = Math.floor(Math.random() * 255);
    console.log(`rgb(${color1},${color2},${color3})`) 
  }
    rgbColorGenerator()

/*
(Question 3)
Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
*/

function arrayOfHexaColors (number) {
    const newArr = [];
	let randomHexa = '';
	for(let i = 0; i < number; i++){
    randomHexa = '#' + Math.floor(Math.random()*16777215).toString(16);		// Looping within the argument length and randomly generating Hexa code
	newArr.push(randomHexa);
	}
		console.log(newArr);	
	   return newArr;
}
  arrayOfHexaColors(6);

/*
(Question 4)
Write a function arrayOfRgbColors which return any number of RGB 
colors in an array.
*/

function rgbColorGenerator (anyNumber) {
    newArr = [];
      for (let i = 0; i < anyNumber; i++) {
       color1 = Math.floor(Math.random() * 255);
       color2 = Math.floor(Math.random() * 255);
       color3 = Math.floor(Math.random() * 255);  
       rgbColor = (`rgb(${color1},${color2},${color3})`);
      newArr.push(rgbColor);
    }
    return newArr;
  }
    console.log(rgbColorGenerator(3));


/*
(Question 5)
Write a function convertHexaToRgb which converts hexa color to rgb and it returns an
 rgb color.
*/

function converthexaToRgb (hexa) {
  if (hexa.length != 6) {
      console.log('hex colors allowed six-dogit only');
  }
  let hexaToRgb = hexa.match(/.{1,2}/g);   // used match() which returns an array to match the
                                           // regular expression (/.{1,2}/g) which capture any one 
                                           // character between one to two digits.
  let hex = [parseInt(hexaToRgb[0],16), parseInt(hexaToRgb[1], 16), parseInt(hexaToRgb[2], 16)];
  console.log(`rgb(${hex})`)
}
converthexaToRgb('6726df')

/*
(Question 6)
Write a function convertRgbToHexa which converts rgb to hexa color
and it returns an hexa color.
*/

function convertRgbTohexa (r, g, b) {
  function valueToHex (value) {
     const hexaDec = value.toString(16);    // convert string to headecimal value
     return hexaDec.length == 1 ? "0" + hexaDec : hexaDec;  // if the hexa length is equal to 1, it will return string '0'
 }
 const rgbTohex = valueToHex(r) + valueToHex(g) + valueToHex(b)
 console.log('#' + rgbTohex.toUpperCase());
 return rgbTohex;
}
convertRgbTohexa(21,23,23);


/*
(Question 7)
Write a function generateColors which can generate any number of 
hexa or rgb colors.
*/

function generateColors (color, number) {
  if(color == 'hexa'){
          const arrOfHexa = [];
          for(let i = 0; i < number; i++){
          randomHexa = '#' + Math.floor(Math.random()*16777215).toString(16);
          arrOfHexa.push(randomHexa);
          }
          console.log(arrOfHexa);
          return arrOfHexa;
      }
  else if(color == 'rgb'){
      const arrForRgb = [];
  for(let i = 0; i < number;  i++) {
   color1 = Math.floor(Math.random() * 255);
   color2 = Math.floor(Math.random() * 255);
   color3 = Math.floor(Math.random() * 255);
   rgbColor = (`rgb(${color1},${color2},${color3})`);
   arrForRgb.push(rgbColor);
  }
  console.log(arrForRgb);
  return arrForRgb;
  }
}

  generateColors('hexa', 3);
  generateColors('hexa', 1);
  generateColors('rgb', 3);
  generateColors('rgb', 1);


/*
(Question 8)
Call your function shuffleArray, it takes an array as a parameter
and it returns a shuffled array
*/

function shuffleArray (array) {
  let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {	// while the currentIndex value is not equal to zero
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;
  [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  console.log(array);
return array;
}    
shuffleArray([1, 2, 3, 4, 5, 6]);


/*
(Question 9)
Call your function factorial, it takes a whole number as a 
parameter and it return a factorial of the number
*/

function factorial (number) {
  let fac = 1;
  if (number == 0 || number == 1){	// if number is equal to 0 or number is equal to 1
      console.log(number);	// print number
      return number;
    }
    else if(number > 1){	// if number is greater than 1
      for(let i = number; i >= 1; i--){ // looping the array starting from the number and looping in a decreamental form
        fac = fac * i;
      }
      console.log(fac);
      return fac;
    }
    else{
      console.log('number has to be positive');
    }  
}
  factorial(7);

/*
(Question 10)
Call your function isEmpty, it takes a parameter and it checks if
it is empty or not
*/
 
 
function isEmpty (check) {
  if (check.length === 0) {	// if the number of elements in the array is equal to zero
      console.log('It is empty')
      return true;
  } else{	// else if the number of elements in array is not equal to zero
      console.log('It is not empty')
      return false;
  }
}
const array  = [];
const arr = [];
isEmpty(array);
isEmpty(arr);


/*
(Question 11)
Call your function sum, it takes any number of arguments and it returns the sum.
*/

function sum (...args) {	// passing-in a rest parameter to accept an indefinite value
  let summ = 0;
  for (const element of args) {	// loop through every element in the parameter
    summ += element	// add each value of the elements to the initial value of sum
  }
  console.log(summ);
  return summ
}

sum(1, 1, 10, 3);

/*
(Question 12)
Write a function called sumOfArrayItems, it takes an array 
parameter and return the sum of all the items. Check if all the 
array items are number types. If not give return reasonable 
feedback.
*/

function sumOfArrayItems (array) {
  let sum = 0;
  for (const element of array) {	// loop through every element in the parameter
      if(typeof element === 'number'){	// if the type of elements in the parameter passed-in is in numeric form
          sum += element;	// add each value of the elements to the initial value of sum
      }
  else {
      console.log('The array have other datatypes other than numbers')
      break;
  }
}
  console.log('The sum of all the numbers in the array is: ' + sum);
  return sum
}

sumOfArrayItems([2, 3, 4]);


/*
(Question 13)
Write a function called average, it takes an array parameter and
 returns the average the items. Check if all the array items are 
 number types. If not give return reasonable feedback.
*/

function average (array) {
  let summ = 0;
  for (const element of array) {
      if(typeof element === 'number'){
          summ += element;
          average = summ / array.length;
      }
  else {
      console.log('The array have other datatypes other than numbers')
      break;
  }
}
  console.log('The average of all the numbers in the array is: ' + averagee);
  return average
}

average([2, 3, 4]);



/*
(Question 14)
Write a function called modifyArray takes array as parameter and 
modifies the fifth item of the array and return the array. If the 
array length is less than five it return 'item not found'.
*/

function modifyArray (array) {
  if(array.length > 4){	// if the number of elements in the array is greater than 4
 array[4] = array[4].toUpperCase();	// converting the element in the fourth index to upper case
console.log(array);

  } else {
      console.log('item not found');
  }
return array;

}

modifyArray(['Banna', 'Mango', 'Orange', 'Pineapple', 'Apple']);
modifyArray(['Orang', 'Apple', 'Mango']);

/*
(Question 15)
Write a function called isPrime, which checks if a number is prime number.
*/

function isPrime (number) {
  let store  = [];
  let primes = [];
  for (let i = 2; i <= number; ++i) 	// looping i within the size of parameter 'number'
  {
      if (!store [i]) {
          primes.push(i);
          for (let n = i < 1; n <= number; n += i) { 
              store[j] = true;
          }
      }
  }
  console.log(primes)
  return primes;
}

isPrime(100);

/*
(Question 16)
Write a functions which checks if all items are unique in the array.
*/

function isUnique (items) {
  const array = ['Books', 'Pencil'];
  for(let i = 0; i < array.length; i++){ 	// loop within the length of the array
      if(array[i] === items){	// checks if the parameter 'username' already exist in the array
          console.log('items already exist');
          break;
      }else{
          array.unshift(items);	// add the parameter 'username' to the array
          console.log(items + ' is added successfully')
      console.log(array);
      break;
      }  
      }        
      return array;
  }

isUnique('Biro');

/*
(Question 17)
Write a function which checks if all the items of the array are the same data type.
*/

function check (array) { 	// array is passed in as a parameter
  arr = new Set(array.map(x => typeof x)).size <= 1;	//map function is used to check if all the elements in the array are of the sam//e datatype
  console.log(arr);
  return arr;
}

check(['Orange', 'Apple']);
check([3, 4, 'Mango']);

/*
(Question 18)
JavaScript variable name does not support special characters or 
symbols except $ or _. Write a function isValidVariable which 
check if a variable is valid or invalid variable.
*/


function isValidVariable (variable) {
  let specialCha = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 		//special character
if(specialCha.test(variable)){		// checks if the parameter 'variable' is among any of the listed special characters
  console.log('Invalid Variable')
return true;
} else {
  console.log('Valid Variable')
return false;
}

}

isValidVariable('zdkn');
isValidVariable('sajk.');

/*
(Question 19)
Write a function which returns array of seven random numbers in a
range of 0-9. All the numbers must be unique.
*/

function sevenRandomNumbers () {
  let numbers = []
  for (let i = 0; i < 9; i++) {
      let ranNum = Math.floor(Math.random() * 10);	// generate random number between 0 and 9
          numbers.push(ranNum); // push the random number generated into the array 'numbers'
      }
      console.log(numbers);
      return numbers;
}
sevenRandomNumbers();

/*
(Question 20)
Write a function called reverseCountries, it takes countries array
and first it copy the array and returns the reverse of the original array
*/


function reverseCountries (array) {
  let copyArray = [];
  copyArray = [...array];	// copy all the elements in the parameter 'array' into the array 'copyArray' without altering the 'array'
  console.log(copyArray);
  array.reverse();	// used the reverse () method to reverse the elements of the array
  console.log(array);
}
reverseCountries([1, 2, 3]);

