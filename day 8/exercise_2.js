// Exercise: Level 2


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
          email: 'paul@paul.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
          age: 20,
          isLoggedIn: false,
          points: 40
        }
    }
      
    
/*
(Question 1)
*/

function mostSkilled () {
    let mostSkilled = '';
    for(const element in users){
        if(users[element]['skills'].length > mostSkill.length){
            mostSkill = element;
        }
    }
    console.log(`${mostSkill} has most skills`)
    return mostSkill;
}

mostSkilled();

/*
(Question 2)
Count logged in users, count users having greater than equal to
 50 points from the following object.
*/

  function loggedInUsers () {
    let loggedInUser = 0;
    let userCount = 0;
    for (const element in users) {
        if (users[element].isLoggedIn == true) {
            loggedInUser++;
        }
        if (users[element].points >= 50) {
            userCount++;
        }
    }
      console.log(`Logged in User are ${loggedInUser}.\nNumber of users having more than fifty are ${userCount}`)
  }

/*
(Question 3)
Find people who are MERN stack developer from the users object
*/


function findMernStackDeveloper () {
    let mern = [];
   for(const element in users){
       if(users[element]['skills'].includes('MongoDB', 'Express', 'React', 'Node')){
           mern.push(element);
       }
   }
   console.log(`The users who are MERN stack developer are ${mern}`);
   return mern;
}

findMernStackDeveloper();

/*
(Question 4)
Set your name in the users object without modifying the original users 
object.
*/

  
  const copyUsers = Object.assign({}, users);
  copyUsers.Emmanuel = {
    email: 'eolasunkanmi@gmail.com'
  }
  console.log(copyUsers);


/*
(Question 5)
 Get all keys or properties of users object
*/

const copyUsers = Object.keys(users);
console.log(copyUsers)


/*
(Question 6)
Get all the values of users object
*/

 const copyUsers = Object.values(users);
 console.log(users)


/*
(Question 7)
Use the countries object to print a country name, capital, populations 
and languages.
*/

  const countries = {Country: 'Nigeria', 
                     Capital: 'Abuja', 
                     Population: 'Two millions',
                     Language: ['English', 'Yoruba', 'igbo', 'Hausa'],
                     countryName: function () {
                    return (`${Country} ${Capital}, ${Population}, ${Language}`)
                  }
                }
                console.log(countries)



                

