// EXERCISE 2

/*
Override the method you create from the Animal Class
*/

class Animal {
    constructor(name, age, color, legs){
    this.name = name,
    this.age = age,
    this.color = color,
    this.legs = legs
    }
}   
 
class Dog extends Animal {
    constructor (name, age, color,legs,gender) {
super (name, age, color, legs),
this.gender = gender
    }
 getGender () {
    return this.gender
 }
 getInfo = () => {
    return `${this.name} is a ${this.age} years old ${this.gender} dog, that is ${this.color} in color and has ${this.legs} legs`
 }
}
const puppy = new Dog ('jack', 10, 'brown', 4, 'female')
console.log(puppy.getInfo())

