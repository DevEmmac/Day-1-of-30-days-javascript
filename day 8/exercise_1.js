// EXERCISE 1


/*
(Question 1)
Create an empty object called dog
*/

const dog = {}

/*
(Question 2)
Print the the dog object on the console
*/

const printDog = {

}
console.log(printDog);

/*
(Question 3)
Add name, legs, color, age and bark properties for the dog object.
The bark property is a method which return woof woof
*/

const dogObject = {name: 'Bigo', legs: 'four', Color: 'Brown',
                    age: 30, bark: 'woof woof',
    getDogInfo: function () {
        return `${this.bark}`
    }
}
console.log(dogObject.bark)

/*
(Question 4)
Get name, legs, color, age and bark value from the dog object
*/

const dogObjt = {name: 'Bigo', legs: 'four', Color: 'Brown',
                    age: 30, bark: 'woof woof',
    getDogInfo: function () {
        return `${this.name}, ${this.legs}`
    }
}
console.log(dogObjt);


/*
(Question 5)
Set new properties the dog object: breed, getDogInfo
*/


const dogProperties = {name: 'Bigo', legs: 'four', Color: 'Brown',
                    age: 30, bark: 'woof woof',
    getDogInfo: function () {
        return `${this.name}, ${this.legs}`
    }
}
dogProperties.dogbreed = 'bull';

console.log(dogProperties);

