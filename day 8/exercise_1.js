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

console.log(dog);

/*
(Question 3)
Add name, legs, color, age and bark properties for the dog object.
The bark property is a method which return woof woof
*/

dog.name = 'Bigo',
dog.legs = 4, 
dog.color = 'brown',
dog.age = 5
dog.bark = function () { 
        return 'woof woof';
    };

/*
(Question 4)
Get name, legs, color, age and bark value from the dog object
*/


console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark);



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

