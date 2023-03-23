// EXERCISE: LEVEL 2


/*
(Question 1)
Destructure and assign the elements of constants array to e, pi, 
gravity, humanBodyTemp, waterBoilingTemp.
*/

const constants = [2.72, 3.14, 9.81, 37, 100]
let [e,pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e,pi, gravity, humanBodyTemp, waterBoilingTemp)

/*
(Question 2)
Destructure and assign the elements of countries array to fin, est,
 sw, den, nor
*/

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = countries
console.log(fin,est, sw, den, nor)

/*
(Question 3)
Destructure the rectangle object by its properties or keys.
*/

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }

  let {width, height, area, perimeter} = rectangle
  console.log( width, height, area, perimeter)