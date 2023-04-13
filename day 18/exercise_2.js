// EXERCISE: LEVEL 2


/*
(Question 2)
Print out all the cat names in to catNames variable.
*/

const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
   .then(response = response.json())
   .then(data => {
       console.log(data)
   })
   .catch(error => console.error(error))

   const fetchData = async () => {
    try {
        const response = await fetch(catsAPI)
        const catNames = await response.json()
        console.log(catNames)
    } catch (err) {
        console.error(err)
    }
   }
   console.log('===== async and await')
   fetchData()
