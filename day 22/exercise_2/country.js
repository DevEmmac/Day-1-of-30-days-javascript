// EXERCISE: LEVEL 22

/* Use the countries array to display all the countries.See the design */

import {countriesArray} from "./countries.js"
console.log(countriesArray)

let countriesWrapper = document.querySelector('.countriesWrapper')
countriesWrapper.style.display = 'flex'
countriesWrapper.style.flexDirection = 'column'
countriesWrapper.style.alignItems = 'center'
countriesWrapper.style.justifyContent = 'center'

let heads = document.querySelector('.heads')
heads.style.display = 'flex'
heads.style.flexDirection = 'column'
heads.style.alignItems = 'center'


let h1 = document.querySelector('h1')
h1.style.fontSize = '5rem'
h1.style.fontFamily = 'Sans-serif'
h1.style.fontWeight = 'bold'
h1.style.letterSpacing = '10px'


let h2 = document.querySelector('h2')
h2.style.fontSize = '40px'
h2.style.fontFamily = 'Sans-serif'
h2.style.fontWeight = 'bold'
h2.style.marginTop = '-30px'

let h3 = document.querySelector('h3')
h3.style.fontSize = '25px'
h3.style.fontFamily = 'Sans-serif'
h3.style.fontWeight = '300'
h3.style.marginTop = '-33px'

let p = document.querySelector('p')
p.style.fontSize = '25px'
p.style.fontFamily = 'Sans-serif'
p.style.marginTop = '-27px'


let container = document.querySelector('.countriesContainer')
container.style.display = 'grid'
container.style.gridTemplateColumns = 'repeat(6, 1fr)'
container.style.gridGap = '5px'
container.style.padding = '5px'
container.style.margin = '0 auto'
container.style.padding = '15px auto'
container.style.maxWidth = '70%'


for(let i = 0; i<=countriesArray.length; i++){
    let countries = document.createElement('div')
    countries.textContent = countriesArray[i]
    countries.style.fontSize = '22px'
    countries.style.padding = '50px 0'
    countries.style.textAlign = 'center'
    countries.style.boxShadow = '0 3px 10px  rgba(0, 0, 0, 0.1)'
    container.appendChild(countries)
}