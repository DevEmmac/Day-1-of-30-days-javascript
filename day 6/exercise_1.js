// Exercises: Day 6

/*
 (Question 1)
 Iterate 0 to 10 using for loop, do the same using while and do while loop
*/

// using for loop

const loop = 10;
for (i = 0;i <= 10; i++) {
   console.log(i)
}                       // 0 1 2 3 4 5 6 7 8 9 10;

// while loop

let i = 0;
while (i <= 10) {
    console.log(i)
    i++
}

// using do while loop

l//et i = 0;
do {
    console.log(i)
    i++
} while (i <= 10)

/*
 (Question 2)
 Iterate 10 to 0 using for loop, do the same using while and do while loop
*/

// using loop
 for (let i = 10;i >= 0;i--) {
    console.log(i)
 }

 // using while lop
  //let i = 10;
  while (1 >= 0) {
    console.log(i)
    i--
  }

// using do while loop
 
//let i = 10;
 do {
    console.log(i)
    i--
 } while (i >= 10)


/*
(Question 3)
 Iterate 0 to n using for loop
*/





/*
(Question 4)
 Whrite a loop that makes the following pattern using console.log():
*/

const hashTag = ['#','##','###','####','#####','######','#######'];
for (const hash of hashTag) {
    console.log(hash)
}

                            // #
                            // ##
                            // ###
                            // ####
                            // #####
                            // ######
                            // #######

/*
(Question 5)
 Use loop to print the following pattern:
*/


for (let i = 0;i <= 10;i++) {
console.log(`${i} * ${i} = ${i*1}`)
}

/*
(Question 6)
 Using loop print the following pattern
*/


for (let i = 0;i <= 10;i++) {
    console.log(`${i} ${i**2} ${i**3}`)
}

/*
(Question 7)
 Use for loop to iterate from 0 to 100 and print only evem numbers
*/


for (let i = 0;i <= 100;i++) {
    console.log(`${i + i}`);
}
/*
 (Question 8)
 Use for loop to iterate from 0 to 100 and print only odd numbers
*/


for (let i = 0;i <= 100;i++) {
    onsole.log(`${i*i}`);
}

/*
 (Question 9)
 use for loop to iterate from 0 to 100 and print only prime numbers
 */

                // let i = 0;
                // for (let i = 0;i <= 100;i++) {
                //     console.log(`${i/i}`)
                // }

/*
(Question 10)
 Use for loop to iteraten from 0 to 100 print the sum of all numbers.
*/

let sum = o;
for (let i = 0;i <= 100;i++) {
    sum += i
}
 console.log(sum);

/*
 (Question 11)
 Use for loop to iterate from 0 to 100 and print the sum of all evens and sum of all olds 
*/

// sum of evens

 //let sumE = 0;
 //let sumO = 0;
 for (let i = 0;i <= 100;i++) {
    i % 2 === 0 ? (sumE += i) : (sumO += i);
 }

 console.log(`The sum of all evens from 0 to 100 is ${sumE}.And the sum of all odds from 0 to 100 is ${sumO}.`);

/*
(Question 12)
use the loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
print sum of evens and sum of odds as array.
*/

        let arr = [];
        let sumE = 0;
        let sumO = 0;
        for (let i = 0;i <=100;i++) {
            i % 2 === 0 ? (sumE += i) : (sumO += i);  
        }
        arr.push(sumE, sumO);
        console.log(arr);

/*
 (Question 13)
 Develop a small script which generate array of 5 random numbers
*/
  
let newArr = [];
for (let i = 0;i <= 4;i++) {
    let ranNum = Math.floor(Math.random() * 100);
    newArr.push(ranNum);
}
console.log(newArr);
 
/*
 (Question 14)
 Develop a small dcript which generate array of 5 random numbers 
 and the numbers must be unique
*/

let uniqueNum = [];
for (let i = 0;i <= 4;i++) {
    let ranNum = Math.floor(Math.random() * 10);
     uniqueNum.push(ranNum);
}
console.log(uniqueNum);

/*
 (question 15)
 Develop a small script which generate a six character random idi 
*/
  
  for (let i = 0;i < 1;i++) {
     let ranid = Math.random().toString(36).substring(2,8);
      console.log(ranid);
 }