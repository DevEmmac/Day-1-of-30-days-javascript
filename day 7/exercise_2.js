// EXERCISES: LEVEL 2

/*
(Qestion 1)
Linear equation is calculated as follows: ax + by + c = 0. Write 
a function which calculates value of a linear equation, 
solveLinEquation.
*/

  function solveLinEquation (a, x, b, y, c) {
       let linearEquation = (a*x) + (b*y) + c;
       return linearEquation;
  }
  console.log(solveLinEquation(2,2,5,3,3))


/*
(Question 2)
Quadratic equation is calculated as follows: ax2 + bx + c = 0.
Write a function which calculates value or values of a quadratic
equation, solveQuadEquation.
*/
  
function solveQuadratic (a, b, c) {
    const discriminant = (b ** 2) - 4 * a * c;
    let root1;
    let root2;
    if (discriminant > 0) {
        root1 = Math.round((-b + Math.sqrt(discriminant)) / (2 * a));
        root2 = Math.round((-b - Math.sqrt(discriminant)) / (2 * a));
        console.log('The roots of the Quadratic equation are ' + root1 + ' and' + ' '+ root2);
    } else if (discriminant == 0) {
        root1 = root2 = Math.round(-b / (2 * a));
        console.log('The roots of the Quadractic equation are ' + root1 + ' and ' + ''+ root2);
    } else {
       let realPart = (-b / (2 * a)).toFixed(2);
       let imgPart = (Math.sqrt(-discriminant)) / (2 * a).toFixed(2);
       root1 = Math.round(realPart + imgPart);
       root2 = Math.round(realPart - imgPart);
       console.log('The roots of the Quadractic equation are ' + root1 + 'i and' + root2 + 'i');
    }
    return root1, root2
   }
   
   console.log(solveQuadratic()) // {0}
   console.log(solveQuadratic(1, 4, 4)) // {-2}
   console.log(solveQuadratic(1, -1, -2)) // {2, -git1}
   console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
   console.log(solveQuadratic(1, 0, -4)) //{2, -2}
   console.log(solveQuadratic(1, -1, 0)) //{1, 0}
   

/*
(Question 4)
Write a function name showDateTime which shows time in this format: 
08/01/2020 04:08 using the Date object.
*/

 function showDateTime () {
    let date = new Date();
    let datee = date.getDate();
    let month = date.getUTCMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${datee}/${month + 1}/${year} ${hour}:${minutes} `
}
     console.log(showDateTime());

/*
(Question 5)
Declare a function name swapValues. This function swaps value of 
x to y.
*/ 
  function swapValues (a, b) {
      let x = b;
      let y = a;
      console.log(x, y)
  }
    swapValues(2, 3);
    swapValues(4, 5);


/*
(Question 6)
Declare a function name reverseArray. It takes array as a parameter 
and it returns the reverse of the array (don't use method).
*/

function reverseArray (arr) {
    let newAr = [];
    for (let i = 0; i < arr.length; i++) {
     newAr.unshift(arr[i]);   
    }
   return newAr;
 }
  console.log(reverseArray([1, 2, 3, 4, 5]))
  console.log(reverseArray([ 'A', 'B', 'C']))

/*
(Question 7)
Declare a function name capitalizeArray. It takes array as a parameter
and it returns the - capitalizedarray.
*/

function capitalizeArray (arr) { 
    let newAr = []
     for (let i = 0; i < arr.length; i++) {
        newAr.push(arr[i].toUpperCase())
     }
     return newAr;
  }
  console.log(capitalizeArray(['a', 'b', 'c']))

/*
(Question 8)
Declare a function name addItem. It takes an item parameter and
it returns an array after adding the item
*/

 function addItem (a, b, c) {
      let item = a + b + c;
      let newAr = [];
      newAr.push(item);
      return newAr
 }
 console.log(addItem(1, 2, 3))

/*
(Question 9)
Declare a function name removeItem. It takes an index parameter and 
it returns an array after removing an item
*/

  function removeItem (index) {
       let names = ['John', 'Joy']
       let newAr = []
       names.slice(index);
       return names
  }
  console.log(removeItem(1))

/*
(Question 10)
Declare a function name sumOfNumbers. It takes a number parameter and
it adds all the numbers in that range.
*/

function sumOfNumbers () {
    sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
return sum;
}
console.log(sumOfNumbers(1, 2, 3, 4, 5))


/*
(Question 11)
Declare a function name sumOfOdds. It takes a number parameter and it
 adds all the odd numbers in that - range.
*/



        function sumOfOdds (number) {
          let sum = 0;
          for (let i = 0;i <= number;i++) {
              if (i % 2 !== 0) {
                  sum += i
              }
          }
          return sum
        }
        console.log(sumOfOdds(5))

        
        
/*
(Question 12)
Declare a function name sumOfEven. It takes a number parameter and
it adds all the even numbers in that - range.
*/

 function sumOfEven (number) {
     let sum = 0;
     for (let i = 0;i < number; i++) {
           if (i % 2 == 0 ) {
            sum += i
           }
     }
     return sum;
 }
 console.log(sumOfEven(5))


/*
 (Question 13)
Declare a function name evensAndOdds . It takes a positive integer as
parameter and it counts number of evens and odds in the number.
*/

  function evensAndOdds (integer) {
         let evens = 0;
         let odds = 0;
         for (let i = 0; i <= integer; i++) {
           if (i % 2 !== 0) {
            evens++
            console.log(`The number of evens are ${evens}}.`)
           } else {
            odds++
            console.log(`The number of evens are ${odds}.`)
           }
         }
         return evens, oods;
  }
  evensAndOdds(100);


/*
(Question 14)
Write a function which takes any number of arguments and return the 
sum of the arguments
*/

function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
console.log(sumAllNums(1,2,3))
console.log(sumAllNums(1, 2, 3, 4)) // 10


/*
(Question 15)
Writ a function which generates a randomUserIp.
*/

 function randomUserIp () {
     let random = Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255)
     return random;
 }
  console.log(randomUserIp(5))


/*
(Question 16)
Write a function which generates a randomMacAddress
*/

function randomMacAddress () {
  const rancha = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G');
     let randomCha2 = new Array(1);
     let randomCha3= new Array(1);
     let randomCha4 = new Array(1);
     let randomCha5 = new Array(1);
     let randomCha6 = new Array(1);
     let randomCha7 = new Array(1);
  for (let i = 0; i < 2; i ++) {
      randomCha2[i] = rancha[Math.floor(Math.random() * 15)];
      randomCha3[i] = rancha[Math.floor(Math.random() * 15)];
      randomCha4[i] = rancha[Math.floor(Math.random() * 15)];
      randomCha5[i] = rancha[Math.floor(Math.random() * 15)];
      randomCha6[i] = rancha[Math.floor(Math.random() * 15)];
      randomCha7[i] = rancha[Math.floor(Math.random() * 15)];
      macAddress = randomCha2[0] + randomCha2[i] + ':' + randomCha3[0] + randomCha3[i] + ':' +  randomCha4[0] + randomCha4[i] + ':' +  randomCha5[0] + randomCha5[i] + ':' +  randomCha6[0] + randomCha6[i] + ':' +  randomCha7[0] + randomCha7[i];
  }
    return macAddress; 
}
console.log(randomMacAddress())


/*
(Question 17)
Declare a function name randomHexaNumberGenerator. When this function
is called it generates a random hexadecimal number. The function 
return the hexadecimal number.
*/

function randomHexaNumberGenerator () {
  let randomhexa = '#' + Math.floor(Math.random() * 1700000).toString(16);
  return randomhexa;
}
console.log(randomHexaNumberGenerator());


/*
(Question 18)
Declare a function name userIdGenerator. When this function is called
it generates seven character id. The function return the id.
*/

function userIdGenerator () {
  let userid = Math.random().toString(36).substring(2,9).toUpperCase(-1)
  return userid
}
console.log(userIdGenerator())       // 41XTDbE