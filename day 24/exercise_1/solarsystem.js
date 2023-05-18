let input = document.querySelector('input')
let selector = document.querySelector('select')
let button = document.querySelector('button')
let text = document.querySelector('.text')

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
            text.textContent = `The weight of the object on ${value.toUpperCase()}`
            weight = document.createElement('span')
            text.append(weight)
            text.style.color = 'white'
            text.style.background = 'rgba(255, 255, 255, 0.2)'
            text.style.height = '13rem'
            text.style.width = '35rem'
            text.style.display = 'grid'
            text.style.margin = 'auto 3.5rem'
            text.style.alignItems = 'center'
            text.style.placeItems = 'center'
            text.style.fontWeight = '700'
            text.style.fontSize = '1.5rem'
            weight.textContent = `${(mass * p.gravity).toFixed(2)} N`
            weight.style.background = 'rgba(255, 255, 255, 0.3)'
            weight.style.borderRadius = '50%'
            weight.style.padding = '3rem 2rem'
            weight.style.marginBottom = '1rem'
            weight.style.fontWeight = '1000'
        }
    })

}

button.addEventListener('click', e => {
    if (!mass) {
        text.textContent = "Mass is required"
        text.style.color = 'white'
        text.style.background = 'rgba(255, 255, 255, 0.2)'
        text.style.height = '3rem'
        text.style.width = '25rem'
        text.style.display = 'flex'
        text.style.justifyContent = 'center'
        text.style.alignItems = 'center'
        text.style.fontWeight = '800'
        document.querySelector('img')
            .setAttribute('src', `./ images / ${" "}.png`)
        return
    }

    if (!value) {
        text.textContent = "You did not choose a planet yet"
        text.style.color = 'white'
        text.style.background = 'rgba(255, 255, 255, 0.2)'
        text.style.height = '3rem'
        text.style.width = '25rem'
        text.style.display = 'flex'
        text.style.justifyContent = 'center'
        text.style.alignItems = 'center'
        text.style.fontWeight = '800'
        document.querySelector('img')
            .setAttribute('src', `./ images / ${""}.png`)
        return

    }
    result()

})
