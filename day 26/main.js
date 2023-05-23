import countries from './countries.js'

let firstbutton = document.querySelector('#firstbutton')
let secondbutton = document.querySelector('#secondbutton')
let thirdbutton = document.querySelector('#thirdbutton')
let input = document.querySelector('input')
let btn = document.querySelectorAll('button')


//const country = countries.map((country) => country.toUpperCase())
//const countryy = countries.map((country) => country.toLowerCase())
const reverseCountry = countries.reverse().map((country) => country.toUpperCase())
let countrylist = document.querySelector('#countries')
let mapImage = 'url("./mapImages/map_image.jpg")'

let eachCountry
let country = countries.map((n) => {
    eachCountry = document.createElement('div')
    eachCountry.style.display = 'grid'
    eachCountry.textContent = n
    eachCountry.style.padding = '1rem'
    eachCountry.style.width = '13rem'
    eachCountry.style.backgroundImage = 'url("./mapImages/map_image.jpg")'
    eachCountry.style.backgroundSize = "cover"
    eachCountry.style.height = '15rem'
    eachCountry.style.marginBottom = '2rem'
    eachCountry.style.border = '2px solid gray'
    eachCountry.style.borderRadius = '1rem'
    eachCountry.style.textTransform = 'Uppercase'
    eachCountry.style.textAlign = 'center'
    eachCountry.style.alignContent = 'center'
    eachCountry.style.color = 'black'
    eachCountry.style.fontSize = '1.3rem'
    eachCountry.style.fontWeight = '1000'
    eachCountry.style.backgroundBlendMode = 'black'
    countrylist.append(eachCountry)
     

})
countrylist.style.display = 'grid'
countrylist.style.placeItems = 'center'
countrylist.style.gridTemplateColumns = 'repeat(6, 0.12fr)'
countrylist.style.justifyContent = 'center'


const includeWord = () => {
    countrylist.innerHTML = ''
    let includeWord = input.value
    let count = 0
    for (let i = 0; i < countries.length; i++) {

        if (country[i].includes(includeWord.toLowerCase())) {
            eachCountry.textContent = country[i]
            count++
            countrylist.append(eachCountry)
        }
        //statement.textContent = `Countries containing ${includeWord} are ${count}`
    }
}

const startWord = () => {
    div.innerHTML = ''
    let startWord = input.value
    let count = 0
    for (let i = 0; i < countries.length; i++) {
       
        if (country[i].startsWith(startWord.toLowerCase())) {
            eachCountry.textContent = country[i]
            count++
            countrylist.append(eachCountry)
        }
       // statement.textContent = `Countries that starts with ${startWord} are ${count}`
    }
}




const ascendingOrder = () => {
    div.innerHTML = ''
    for (let i = 0; i < countries.length; i++) {
        eachCountry.textContent = country[i]
        countrylist.append(eachCountry)
    }
}

const decendingSort = () => {
    div.innerHTML = ''
    for (let i = 0; i < reverseCountry.length; i++) {
        eachCountry.textContent = reverseCountry[i]
        countrylist.append(eachCountry)
    }
}


    //adding function to button

input.addEventListener('input', () => {
    let check = document.getElementById('buttons').value
      if (check === "1") {
                startWord()
            } else if (check === "2") {
                includeWord()
            }
     })
    thirdbutton.addEventListener('click', decendingSort)
    thirdbutton.addEventListener('dblclick', ascendingOrder)