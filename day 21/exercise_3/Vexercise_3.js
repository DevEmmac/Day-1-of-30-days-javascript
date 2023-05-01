// EXERCISE: LEVEL 3


// DOM: Mini project 1

/*

1. Develop the following application, use the following HTML elements to get started with.
You will get the same code on the starter folder. Apply all the style and functionality using 
JavaScrip only.

* The year color is changing every 1 second
* The date and time background color is changing every on seconds
* Completed challenge has background green
* Ongoing challenge has background yellow
* Coming challenges have background red

*/

let wrap = document.querySelector('.wrapper')
    wrap.style.display = 'flex'
    wrap.style.alignItems = 'center'
    wrap.style.flexDirection = 'column'


let head1 = document.querySelector('h1')
  head1.style.fontSize = '50px'
  head1.style.fontFamily = 'Arial'
  head1.style.fontweigth = 'bold'

let year1 = document.querySelector('.year')
   year1.style.fontSize = '100px'

let head2 = document.querySelector('h2')
  head2.style.fontSize = '35px'
  head2.style.textDecoration = 'underline'
  head2.style.fontFamily = 'Outfit'
  head2.style.fontWeight = '300'


let months = ['January', 'February', 'March', 'April', 'May', 'JUne', 'July', 'August', 'September', 'October', 'November', 'December']
let showDateTime = () => {
    let now = new Date()
    let year = now.getFullYear()
    let month = months[now.getMonth()]
    let date = now.getDate() < 10? '0'+now.getDate() : now.getDate()
    let hours = now.getHours() < 10?'0'+now.getHours() : now.getHours()
    let minutes = now.getMinutes() < 10? '0'+now.getMinutes() : now.getMinutes()
    let seconds = now.getSeconds() < 10? '0'+now.getSeconds():now.getSeconds()
    
    return `${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`
}
let dateAndtime = document.querySelector('.dateAndtime')
dateAndtime.style.fontSize = '30px'
dateAndtime.style.width = '300px'
dateAndtime.style.border = 'transparent'
dateAndtime.style.padding = '7px 35px 7px 35px'
dateAndtime.textContent = showDateTime()
  
function bgColorChanger () {
    randomA = Math.floor(Math.random() * 255)
    randomB = Math.floor(Math.random() * 255)
    randomC = Math.floor(Math.random() * 255)
    color = `rgb(${randomA},${randomB},${randomC})`
    dateAndtime.style.backgroundColor = color
    year1.style.color = color
}

setInterval (() => {bgColorChanger()
},1000)

let ul = document.querySelector('ul')
ul.style.marginTop = '25px'


let done = document.querySelector('.Done')
done.style.fontSize = '30px'
done.style.backgroundColor = 'green'
done.style.border = 'transparent'
done.style.width = '800px'
done.style.listStyle = 'none'
done.style.padding = '30px 0 30px 23px'
done.style.marginBottom = '5px'
done.style.fontFamily = 'Outfit'


let ongoing = document.querySelector('.ongoing')
ongoing.style.fontSize = '30px'
ongoing.style.backgroundColor = 'yellow'
ongoing.style.border = 'transparent'
ongoing.style.width = '800px'
ongoing.style.listStyle = 'none'
ongoing.style.padding = '30px 0 30px 23px'
ongoing.style.marginBottom = '5px'
ongoing.style.fontFamily = 'Outfit'

let coming = document.querySelectorAll('.coming')
    coming.forEach((comes, i) => {
    comes.style.fontSize = '30px'
    comes.style.backgroundColor = 'red'
    comes.style.border = 'transparent'
    comes.style.width = '800px'
    comes.style.listStyle = 'none'
    comes.style.padding = '30px 0 30px 23px'
    comes.style.marginBottom = '5px'
    comes.style.fontFamily = 'Outfit'
})


