// EXERCISE: LEVEL 3


/*
(Question 1)
How many languages are there in the countries object file.
*/

const country = new Set(countries)
console.log(country.size)

/*
(Question 2)
Use the countries data to find the 10 most spoken languages:
*/

function  mostSpokenLanguage (arr, num) {
    const countLanguages = new Map();
    arr.forEach(country => {
        country.languages.forEach(lang => {
            if(!countLanguages.has(lang)){
            countLanguages.set(lang, 1);
        }
        else countLanguages.set(lang, countLanguages.get(lang) + 1);
    })
    
})
function Comparator(a, b) {
    if (b[1] < a[1]) return -1;
    if (b[1] > a[1]) return 1;
    return 0;
  }

const sorted = [...countLanguages.entries()].sort(Comparator);
for (let i = 0; i < sorted.length; i++){
     [lang, count] = sorted[i];  
}
console.log(sorted.slice(0,num))
return sorted
}
mostSpokenLanguage(countries, 10)
