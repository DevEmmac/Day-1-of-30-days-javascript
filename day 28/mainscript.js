
const boardinfo = document.querySelector('.board')
const form = document.querySelector('form')
const infoRequired = document.querySelector('p')


// const leaderboard = document.querySelector('.Leaderboard')
// const form = document.querySelector('form')
// const errorDisplay = document.querySelector('p')


let players = [
    {
        firstName: 'martha',
        lastName: 'yohanes',
        country: 'usa',
        score: 85,
        date: new Date()
    }, 

    {
        firstName: 'david',
        lastName: 'smith',
        country: 'london',
        score: 80,
        date: new Date()
    },

    {
        firstName: 'john',
        lastName: 'smith',
        country: 'united kingdom',
        score: 84,
        date: new Date()
    }
]

const renderDisplay = () => {
    boardinfo.style.color = 'green'
    boardinfo.style.fontSize = '1.2rem'
    boardinfo.innerHTML = players.sort((a,b) => b.score - a.score )
    .map( (player, playerindex) => 
     `<div class="leaders">
     <div class="name-container">
         <span class="full-name">${player.firstName + ' ' + player.lastName}</span>
         <span class="date">${player.date.toLocaleString()}</span>
     </div>
    
         <span class="countries">${player.country}</span>
         <span class="scores">${player.score}</span>
    
     <div class="btns">
        <span class="score" data-action="delete" data-index="${playerindex}"><img src="./delete.svg" class="red" srcset=""></span>
        <span class="score" data-action="add" data-index="${playerindex}">+5</span>
        <span class="score" data-action="minus" data-index="${playerindex}">-5</span>
       </div>
 </div> 
     `
 ).join('')

}

renderDisplay()

boardinfo.addEventListener('click', (e) => {
    
    const {action} = event.target.dataset

    if (!action) return

    const index = Number(event.target.dataset.index)

    if (action === 'delete') {
        players = players.filter( (_, playerindex) => playerindex !== index )
    } 
    
    if (action === 'add') {
        players = players.map( (player, playerindex) => {
            
            if (playerindex === index) player.score += 5
            return player
        })
    }
    
    if (action === 'minus'){
        players = players.map( (player, playerindex) => {
            if (index === playerindex) player.score -=5 
            return player
        })
    }

    renderDisplay()
})

form.addEventListener('submit', (e) => {

    e.preventDefault()

    let {fname, lname, country, score} = e.target

    if (!fname.value || !lname.value || !country.value || !score.value) {

        infoRequired.textContent = 'All fields are required'
        infoRequired.style.color = 'red'
        infoRequired.style.fontSize = '1.5rem'
        setTimeout(() => {
            infoRequired.textContent = ''
        }, 2000)
        return

    } else {
        
        players.push(
            {
            firstName: fname.value,
            lastName: lname.value,
            country: country.value,
            score: score.value,
            date: new Date()
            }
        )
    }
    renderDisplay()

    fname.value = ''
    lname.value = ''
    country.value = ''
    score.value = ''

})
