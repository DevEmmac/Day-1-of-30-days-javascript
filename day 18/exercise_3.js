// EXERCISE: LEVEL 3

/*
(Qustion 1)
Read the cats api and find the average weight of cat in metric 
unit.
*/
const averageWeight = async () => {
    try {
        const response = await fetch(catsAPI)
        const catsInfo = await response.json()
        catsInfo.forEach((cat) => {
            catName = ''
            catName += `${cat.name} : ${cat.weight.metric}`
            console.log(catName)
        });
    } catch(err) {
        console.log(err)
    }
}

averageWeight()

/*
(Question 2)
Read the countries api and find out the 10 largest countries
*/

const tenLargestCountries = async () {
    try {
        const response = await fetch(countriesAPI)
        const findOut = await response.json()
        countries.sort(function(a,b) {
            if (b.area < a.area) return -1
            if (b.area > a.area) return 1
            return 0
        })
        countryy = []
        countries.forEach((country) => {
            country.push(`${country.name} : ${country.area} `)
        })
        console.log(country.slice(0,10))

    } catch(err) {
        console.error(err);
    }
}

tenLargestCountries()

/*
(Question 3)
Read the countries api and count total number of languages in
the world used as officials.
*/

const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const lang = (data.map(({ languages }) => languages)).flat().map(({ name }) => name)
        console.log(lang.reduce((a, b) => {
            if (a.indexOf(b) === -1) {
                a.push(b)
            }
            return a
        }, []).length)
    })