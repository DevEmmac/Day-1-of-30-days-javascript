// EXERCISE: LEVEL 1

/*
(Question 1)
Change skills array to JSON using JSON.stringify()
*/
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const skill = JSON.stringify(skills,undefined, 2)
console.log(skill)

/*
(Question 2)
Stringify the age variable
*/

const stringifyAge = JSON.stringify(age,undefined, 2)
console.log(stringifyAge)



/*
(Question 3)
Stringify the isMarried variable
 */

const stringifyIsMarried = JSON.stringify(isMarried,undefined, 3)
console.log(stringifyIsMarried)


/*
(Question 4)
Stringify the student object
*/

const studentObject = JSON.stringify(student, ['firstName', 'lastName','age','isMarried','skills'],4);
console.log(studentObject)