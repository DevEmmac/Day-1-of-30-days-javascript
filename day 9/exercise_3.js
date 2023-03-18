// EXERCISE: LEVEL 3

/*
(Question 1)
Use the countries information, in the data folder. Sort countries
by name, by capital, by population
*/

const countriesSort=count.map((count)=>count.sort())
console.log(countriesSort)


/*
(Question 2)
Find the 10 most spoken languages:
*/

function mostSpokenLanguage (arr,num) {
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
mostSpokenLanguage(countries, 2)

/*
(Question 3)
Use countries_data.js file create a function which create the ten
most populated countries
*/

function tenMostPopulatedCountries (arr, num) {
    arr.sort((a, b) => b.population - a.population)
   const mostPopulated = arr.map(country => `${country.name}, ${country.population}`)
   console.log(mostPopulated.slice(0, num))
}
tenMostPopulatedCountries(countries, 10)

/*
(Question 4)
Try to develop a program which calculate measure of central tendency 
of a sample(mean, median, mode) and measure of variability(range, 
variance, standard deviation). In addition to those measures 
find the min, max, count, percentile, and frequency distribution
of the sample. You can create an object called statistics and 
create all the functions which do statistical calculations as 
method for the statistics object. Check the output below.
*/

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

function measureCentralTendency () {
    let count = 0, sum = 0, min = 0, max = 0, range = 0, mean = 0;
    let frequencyDis = 0;
        for(let i = 0; i < ages.length; i++){
            count++
            sum += ages[i]

        }
        min = Math.min(...ages)
        max = Math.max(...ages)
        range = max - min
        mean = Math.round(sum / ages.length)

        function median (ages) {
            if(ages.length === 0) throw new Error('No input');
            ages.sort((a, b) => a - b)
            let half = Math.floor(ages.length / 2);
            if(ages.length % 2)
            return ages[half];
            return (age[half - 1] + ages[half] / 2)
        }

        function mode (ages) {
            const mode ={};
            let max = 0, count = 0;
            for(let i = 0; i < ages.length; i++){
                const item = ages[i];
                if(mode[item]){
                    mode[item]++;
                }else{
                    mode[item] = 1;
                }
                if(count < mode[item]){
                    max = item;
                    count = mode[item];
                }
            }
                    return `(${max}, ${count})`;
        }

        function variance (ages = []) {
            if(!ages.length){
               return 0;
            };
            const sum = ages.reduce((acc, val) => acc + val);
            const { length: num } = ages;
            const median = sum / num;
            let variance = 0;
            ages.forEach(num => {
               variance += ((num - median) * (num - median));
            });
            variance /= num;
            return parseFloat(variance).toFixed(1);
        }
        function standardDeviation (arr, usePopulation = false) {
            const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
            return parseFloat(Math.sqrt(
              arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
                (arr.length - (usePopulation ? 0 : 1))).toFixed(2)
            );
          };

          
          
     console.log(`Count: ${count}\nSum: ${sum}\nMin: ${min}\nMax: ${max}\nRange: ${range}\nMean: ${mean}\nMedian: ${median(ages)}\nMode: ${mode(ages)}\nVariance: ${variance(ages)}\nStandard Deviation: ${standardDeviation(ages)}`)
         return count, sum, min, max, range, mean;
    }

measureCentralTendency()