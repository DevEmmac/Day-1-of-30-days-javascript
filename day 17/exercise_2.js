// EXERCISE: LEVEL 2


/*
(Question 2)
Create a student object. The student object will have first name,
 last name, age, skills, country, enrolled keys and values for the 
 keys. Store the student object in your browser localStorage.
 */

const student = {
    firstName: 'Olayiwola',
    lastName: 'Emmanuel',
    age: 25,
    skills: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODE'],
    country: 'Nigeria'
 }

 const storeInfo = JSON.stringify(myInfo, undefined, 4);
 localStorage.setItem('myInfo', storeInfo)