// EXERCISE 1


/*
(Question 1)
Create an Animal class. The class will have name, age, color, 
legs properties and create different methods
*/

class Animal {
    constructor(name, age, color, legs){
      this.name = name
      this.age = age
      this.color = black
      this.legs = 4 
    }
    getAnimalNameAndColor () {
        const animal = this.name + ' ' + this.color
        return animal
    }
}    
const animal = new Animal('lucky', 30, 'brown', 4)
console.log(animal)
console.log(animal.getAnimalNameAndColor())

/*
(Question 2)
Create a Dog and cat child class from the Animal Class
*/


class Dog extends Animal {
    dogbark () {
      console.log('woo woo')
    }
}
class Cat extends Animal {'meow meow'
         catSound () {
            console.log('meow meow')
         }
}
const babiesDog = new Dog('mike', 15, 'black and white', 4)
const babiesCat = new Cat('pinkie', 10, 'white', 4)

console.log(babiesDog.dogbark())
console.log(babiesCat.catSound())