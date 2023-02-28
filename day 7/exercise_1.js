//EXERCISE: LEVEL 1

/* 
(Question 1)
 Declare a function fullName and it print out your full name.
*/
function fullName () {
    let firstName = 'Olayiwola'
    let lastName = 'Emmanuel'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}
 fullName()

/*
(Question 2)
Declare a function fullName and now it takes firstName, lastName 
as a parameter and it returns your full - name.
*/

function fullName (firstName, lastName) {
    return `${firstName}${lastName}`
}
console.log(fullName('Olayiwola', 'Emmanuel'))


/*
(Question 3)
Declare a function addNumbers and it takes two two parameters and
it returns sum.
*/

 function addNumbers (num1,num2) {
    let sum = num1 + num2
    return sum
 }
 console.log(addNumbers(5,10))

/*
(Question 4)
An area of a rectangle is calculated as follows: area = length x width.
 Write a function which calculates areaOfRectangle..
*/

 function areaOfRectangle () {
    const length = 4
    const width = 7
    let area = length * width
    console.log(area)
 }
 areaOfRectangle()

/*
(Question 5)
A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). 
Write a function which calculates perimeterOfRectangle.
*/

function perimeterOfRectangle () {
    const length = 4
    const width = 7
    let perimeter = 2 * (length + width)
    console.log(perimeter)
 }
 perimeterOfRectangle()


/*
(Question 6)
A volume of a rectangular prism is calculated as follows: 
volume = length x width x height.Write a function which
 calculates volumeOfRectPrism.
*/

   function volumeOfRectPrism () {
      const length = 4
      const width = 7
      const heigth = 10
      let volume = length * width * heigth
      console.log(volume)
   }
   volumeOfRectPrism()

/*
(Question 7)
Area of a circle is calculated as follows: area = π x r x r.
 Write a function which calculates areaOfCircle
*/
  function areaOfCircle () {
    const r = 10
    let area = Math.PI * r * r
    console.log(area)
  }
  areaOfCircle()


/*
(Question 8)
Circumference of a circle is calculated as follows: circumference
 = 2πr. Write a function which calculates circumOfCircle
*/

  function circumOfCircle () {
    const r = 10
   let circumference = 2 * Math.PI * r
   console.log(circumference)
  }
   circumOfCircle()


/*
(Question 9)
Density of a substance is calculated as follows:density= mass/volume.
Write a function which calculates density.
*/

function densityOfsub () {
    const mass = 5
    const volume = 10  
    let density = mass/volume
    console.log(density)
 }
  densityOfsub()


/*
(Question 10)
Speed is calculated by dividing the total distance covered by a 
moving object divided by the total amount of time taken. Write a
function which calculates a speed of a moving object, speed.
*/

   function speedOfObject () {
       let distance = 150
       let time = 25
       let speed = distance/time
       console.log(speed)

   }
      speedOfObject()

/*
(Question 11)
Weight of a substance is calculated as follows: weight = 
mass x gravity. Write a function which calculates weight.
*/

 function weightOfSubtance (mass, gravity = 9.81) {
     let weight = mass * gravity 
     return weight
 }
 console.log(weightOfSubtance(100))

/*
(Question 12)
Temperature in oC can be converted to oF using this formula:
oF = (oC x 9/5) + 32. Write a function which convert oC to oF 
convertCelsiusToFahrenheit.
*/

function convertCelsiusToFahrenheit (oC, oF = oC * 9/5 + 32) {
   return Math.floor(degree * (9/5) + 32)
}
console.log(convertCelsiusToFahrenheit(1.8))

/*
(Question 13)
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / 
(height x height) in m2. Write a function which calculates bmi. BMI 
is used to broadly define different weight groups in adults 20 years 
old or older.Check if a person is underweight, normal, overweight or 
obese based the information given below
*/

 function bmi (bmi = weight / (height * height) ) {
     let bmi = weigth / height * height
     if 
 }



/*
(Qustion 14)
Write a function called checkSeason, it takes a month parameter and 
returns the season:Autumn, Winter, Spring or Summer.
*/

function checkSeason () {
   if (season == Autumn) {
      console.log('Season is autumn')
   } else if (season == Winter) {
      console.log('Season is winter')
   } else if ( seadon == Spring) {
      console.log('Spring')
   }
}
