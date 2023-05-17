//document.body.style.width = '100%'
//document.body.style.backgroundImage = 'galaxy.gif'

let input = document.querySelector('input')
let selector = document.querySelector('select')
let button = document.querySelector('button')
let textEl = document.querySelector('.text')

const planetsGravity = [
    {
        planet: 'moon',
        gravity: 1.6,
    },
    {
        planet: 'mercury',
        gravity: 3.7,
    },
    {
        planet: 'venus',
        gravity: 8.87,
    },
    {
        planet: 'earth',
        gravity: 9.8,
    },
    {
        planet: 'mars',
        gravity: 3.7,
    },
    {
        planet: 'jupiter',
        gravity: 25,
    },
    {
        planet: 'saturn',
        gravity: 10.44,
    },
    {
        planet: 'uranus',
        gravity: 8.87,
    },
    {
        planet: 'neptune',
        gravity: 11.15,
    },
    {
        planet: 'pluto',
        gravity: 0.58,
    },
]

selector.innerHTML += planetsGravity.map(planets => `
<option value = '${planets.planet}'>${planets.planet.toUpperCase()}</option>`)

let value;
let mass;
let weight;

selector.addEventListener('change', (e) => {
    value = e.target.value
})

input.addEventListener('change', (e) => {
    mass = e.target.value
})

input.style.color = 'black'

function result() {
    document.querySelector('img')
        .setAttribute('src', `./images/${value}.png`)
    planetsGravity.map((p) => {
        if (p.planet == value) {
            textEl.textContent = `The weight of the object on ${value.toUpperCase()}`
            weight = document.createElement('span')
            textEl.append(weight)
            textEl.style.color = 'white'
            textEl.style.background = 'rgba(255, 255, 255, 0.2)'
            textEl.style.height = '10rem'
            textEl.style.width = '25rem'
            textEl.style.display = 'grid'
            textEl.style.alignItems = 'center'
            textEl.style.placeItems = 'center'
            textEl.style.fontWeight = '800'
            textEl.style.marginLeft = '2rem'
            weight.textContent = `${(mass * p.gravity).toFixed(2)} N`
            weight.style.background = 'rgba(255, 255, 255, 0.3)'
            weight.style.borderRadius = '50%'
            weight.style.padding = '2.5rem 1.5rem'
            weight.style.fontWeight = '1000'
        }
    })

}

button.addEventListener('click', e => {
    if (!mass) {
        textEl.textContent = "Mass is required"
        textEl.style.color = 'white'
        textEl.style.background = 'rgba(255, 255, 255, 0.2)'
        textEl.style.height = '3rem'
        textEl.style.width = '25rem'
        textEl.style.display = 'flex'
        textEl.style.justifyContent = 'center'
        textEl.style.alignItems = 'center'
        textEl.style.fontWeight = '800'
        document.querySelector('img')
            .setAttribute('src', `./ images / ${" "}.png`)
        return
    }

    if (!value) {
        textEl.textContent = "You did not choose a planet yet"
        textEl.style.color = 'white'
        textEl.style.background = 'rgba(255, 255, 255, 0.2)'
        textEl.style.height = '3rem'
        textEl.style.width = '25rem'
        textEl.style.display = 'flex'
        textEl.style.justifyContent = 'center'
        textEl.style.alignItems = 'center'
        textEl.style.fontWeight = '800'
        document.querySelector('img')
            .setAttribute('src', `./ images / ${""}.png`)
        return

    }
    result()

})

let generateColor = () => {
    let Alphanumeric = '0123456789abcdef'
    let emptyStr = ''
    let index
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * Alphanumeric.length)
        index = Alphanumeric[index]
        emptyStr = emptyStr + index
    }
    return '#' + emptyStr
}

let owner = document.querySelector('.owner')

setInterval(() => {
    owner.style.color = generateColor()

}, 1000)