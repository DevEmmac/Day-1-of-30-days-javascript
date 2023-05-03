// EXERCISE: LEVEL 1
/* 
Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
A. Even numbers background is green
B. Odd numbers background is yellow
C. Prime numbers background is red
*/

const container = document.querySelector('.container')
container.style.display = 'flex'
container.style.flexDirection = 'column'
container.style.alignItems = 'center'

const h1 = document.querySelector('h1')
h1.style.fontSize = '60px'
h1.style.fontFamily = 'arial'
h1.style.fontWeight = 'bold'
h1.style.marginBottom = '-30px'

const h2 = document.querySelector('h2')
h2.style.fontSize = '45px'
h2.style.fontFamily = 'outfit'
h2.style.fontWeight = '300'
h2.style.textDecoration = 'underline'

const p = document.querySelector('p')
p.style.fontSize = '37px'
p.style.fontFamily = 'outfit'
p.style.textDecoration = 'underline'
p.style.marginTop = '-35px'

const containerGrid = document.querySelector('.gridcontainer')
containerGrid.style.display = 'inline-grid'
containerGrid.style.gridTemplateColumns = 'repeat(12, 1fr)'
containerGrid.style.gridTemplateRows = 'repeat(2, 50px)'
containerGrid.style.gridGap = '5px'
containerGrid.style.padding = '5px'
containerGrid.style.border = '2px solid green'
containerGrid.style.height = '50px'
