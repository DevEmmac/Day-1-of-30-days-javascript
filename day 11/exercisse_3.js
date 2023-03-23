// EXERCISE: LEVEL 3


/*
(Question 1)
Destructure the countries object print name, capital, population
and languages of all countries
*/


for(const {name, capital, population, languages} of countries){
    console.log({name, capital, population, languages})
}



/*
(Question 2)
A junior developer structure student name, skills and score in
array of arrays which may not easy to read. Destructure the following
array name to name, skills array to skills, scores array to scores,
JavaScript score to jsScore and React score to reactScore variable
in one line.
*/


const student = ['David', 
                ['HTM', 'CSS', 'JS', 'React'],
                [98, 85, 90, 95]]
let [name, skills,[,, jsScore, reactScore]] = student
  console.log(name, skills, jsScore, reactScore)



/*
(Question 3)
Write a function called convertArrayToObject which can convert the
array to a structure object.
*/

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject (students) {
  let arr = [];
  for (const element in students) {
    let [name, skills, scores ] = students[element];
    let structureObject = {name, skills, scores};
   arr[element] = structureObject;
  }
 console.log(arr);
}
convertArrayToObject(students)

/*
(Question 4)
Copy the student object to newStudent without mutating the original object. In the new object add the following ?
* Add Bootstrap with level 8 to the front end skill sets
* Add Express with level 9 to the back end skill sets
* Add SQL with level 8 to the data base skill sets
* Add SQL without level to the data science skill sets
*/

const newStudent = {...student}
newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
newStudent.skills.dataScience.push({ skill: "SQL", level: 8 });
console.log(newStudent)