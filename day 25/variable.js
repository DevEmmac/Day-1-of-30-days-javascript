import countriesData from "./countries_data.js"

let button = document.querySelectorAll('button')
let graphWrapper = document.querySelector('.graph-wrapper')
let graphTitle = document.querySelector('.graph-title')
let paragraph = document.querySelectorAll('p')

paragraph.forEach(p => {
    if (p.classList.contains('subtitle')) {
        p.textContent = 'Currently, we have '
    }

    if (p.classList.contains('feedback')) {
        p.textContent = `${countriesData.length} countries.`
    }
})

const populationFunction = () => {
    let worldPopulation = countriesData.reduce((acc, { population }) => { return acc + population }, 0)
    let sortingPopulation = countriesData.sort((a, b) => b.population - a.population).slice(0, 10)

    graphWrapper.innerHTML = `
    <span>World</span>
    <span class = 'range'; style = 'width :100%'></span>
    <span>${worldPopulation.toLocaleString()}</span>
    `

    sortingPopulation.forEach(country => {

        graphWrapper.innerHTML += `<span>${country.name}</span>

        <span class='range' style = 'width:${Number(country.population * 100 / worldPopulation)}%'></span>
        
        <span>${(country.population).toLocaleString()}</span>
        `

    })
    graphTitle.textContent = '10 Most populated countries in the world'
}

const languageFunction = () => {
    graphWrapper.innerHTML = ''
    const mostLanguagesSort = Object.entries(countriesData.flatMap(({ languages }) => languages).reduce((acc, cur) => {
        acc[cur] ? acc[cur] += 1 : acc[cur] = 1;
        return acc
    }, {})).sort((a, b) => b[1] - a[1]).slice(0, 10)

    mostLanguagesSort.forEach(language => {
        graphWrapper.innerHTML += `
        <span>${language[0]}</span>
        <span class = 'range' style='width:${Number(language[1])}%'></span>
        <span>${language[1]}</span>`
    })
    graphTitle.textContent = '10 Most Spoken languages in the world'
}

button.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let onPress = e.currentTarget.classList
        onPress.contains('population') ? populationFunction() :
            onPress.contains('languages') ? languageFunction() :
                false
    })
})

languageFunction()