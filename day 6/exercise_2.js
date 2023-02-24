// EXERCISE: LEVEL 2

/*
(question 1)
Develop a small script which generate any number of characters random 
id;
*/

    let ran = Math.floor(Math.random() * 50) + 1;
    const ranId = []
    let hexRef = ['0','1','2','3','4','5','6','7','8','9','a','b{','c','d','f'];
    for (let i = 0;i < 1;1++) {
        ranId.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    console.log(renId.join(""));
    console.log(ran);


/*
(Question 3)
write a script which generates a random rgb color numbers
*/

const x = Math.floor(Math.random()) * 256;
const y = Math.floor(math.random()) * 256;
const z = Math.floor(Math.random()) * 256;
console.log(`rgb(${x},${y},${z})`);

/*
(question 4)
Using the above countries array,create the following new array
 */

  const newarr = [];
  for (let i = 0;i < countries.length;i++) {
      newarr.push(countries[i].toUpperCase());
  }
  console.log(newarr);

/*
(Question 5)
 Using the above countries array,create an array for the countries.
*/

const len =  countries.map(name => name.length);
console.log(len);

/*
(Question 6)
Use the countries arrray to create the following array of arrays:
*/
const arr = [];
const abbre = ['ALB', 'BOL', 'CAN', 'DEN', 'ETH', 'FIN', 'GER', 'HUN', 'IRE', 'JAP', 'KEN'];
for (let i = 0;i < countries.length;i++) {
    arr.push(Array.of(countries[i],abbre[i],countries[i].length));
}
console.log(larr);

/*
(Question 7)

*/

const landarr = [];
const noLand = [];
for (let i = 0;i < countries.length;i++) {
    countries[i].includes('LAND') ? landarr.push(countries[i]) : noLand.push(countries[i]);
}
console.log(landarr);
console.log(noLand);

/*
(Question 8)
In above countries array, check if there is a country or countries 
end with a substring 'ia'. If there are countries end with, print
 it as array. If there is no country containing the word 'ai', 
 print 'These are countries ends without ia'.
*/

const withIa = [];
const withOutIa = [];
for (let i = 0;i < countries.length;i++) {
    countries[i].endsWith('ia') ? withIa.push(countries[i]) : withOutIa.push(countries[i]);
}
console.log(withIa);
console.log(`This countries ends without ia ${withOutIa}`);

/*
(Question 9)
Using the above countries array, find the country containing the biggest number of characters.
*/

let bigNum = [];
for (let i = 0;i < countries.length;i++) {
    if (countries[i].length > bigNum.length) {
        bigNum = countries[i];
    }
}
console.log(bigNum);

/*
(Question 10)
Using the above countries array, find the country containing only 5 characters.
*/

const conFiveChar = [];
for (let i = 0;i < countries.length;i++) {
    if (countries[i].length == 5) {
    conFiveChar.push(countries[i]);
    }
}
console.log(conFiveChar);

/*
(Question 11)
Find the longest word in the webTechs array.
*/
let longW = [];
for (let i = 0;i < webTechs.length;i++) {
    if (webTechs[i].length > longW.length)  {
      longW = webTechs[i];   
    }
} 
console.log(longW);

/*
(Question 12)
Use the webTechs array to create the following array of arrays
*/
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
let webArr = [];
for (let i = 0;i < webTechs.length;i++) {
    webArr.push(Array.of(webTechs[i],webTechs.length));
}
console.log(webArr);

/*
(Question 13)
An application created using MongoDB, Express, React and Node 
is called a MERN stack app. Create the acronym MERN by using
the array mernStack
*/
 
const mern = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = '';
for (let i = 0;i < mern.length;i++) {
    acronym += mern[i].slice(0,1);
}
console.log(acronym);

/*
(Question 14)
Iterate through the array, ["HTML", "CSS", "JS", "React", 
"Redux", "Node", "Express", "MongoDB"] using a for loop or for
 of loop and print out the items.
*/

for (const web of webTechs) {
    console.log(web)
}

/*
(Question 15)
This is a fruit array , ['banana', 'orange', 'mango', 'lemon']
 reverse the order using loop without using a reverse method.
*/

console.log(fruit.sort())
const reversedFruit = [];
for (let i = fruit.length -1;i >= 0;i--) {
    const reverse = fruit[i];
    reversedFruit.push(reverse)
}
console.log(reversedFruit);


/*
(Question 16)
print all the elements of array as shown below
*/


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
      console.log(fullStack[i][j].toUpperCase())       
    }
}


