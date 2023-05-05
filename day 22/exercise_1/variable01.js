// EXERCISE: LEVEL 1
/* 
Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
A. Even numbers background is green
B. Odd numbers background is yellow
C. Prime numbers background is red
*/

let container = document.querySelector('.container')
container.style.display = 'flex'
container.style.flexDirection = 'column'
container.style.alignItems = 'center'

let h1 = document.querySelector('h1')
h1.style.fontSize = '60px'
h1.style.fontFamily = 'arial'
h1.style.fontWeight = 'bold'
h1.style.marginBottom = '-30px'

let h2 = document.querySelector('h2')
h2.style.fontSize = '45px'
h2.style.fontFamily = 'outfit'
h2.style.fontWeight = '300'
h2.style.textDecoration = 'underline'

let p = document.querySelector('p')
p.style.fontSize = '37px'
p.style.fontFamily = 'outfit'
p.style.textDecoration = 'underline'
p.style.marginTop = '-35px'

let containerGrid = document.querySelector('.gridcontainer')
containerGrid.style.display = 'grid'
containerGrid.style.gridTemplateColumns = 'repeat(6, 1fr)'
containerGrid.style.padding = '5px'
containerGrid.style.gridGap = '5px'
function isPrime(num) {
    if(num < 2) return false;
  
    for (let k = 2; k < num; k++){
      if( num % k == 0){
        return false;
      }
    }
    return true;
  }


    for (let i = 0; i <= 101; i++) {
        let containerChild = document.createElement('div')
        containerChild.textContent = i
        if (isPrime(i)){
                containerChild.style.backgroundColor = 'red'
            }else if (i%2 ===0){
                containerChild.style.backgroundColor = 'green'
            }else {
                containerChild.style.backgroundColor = 'yellow'
            }
        containerChild.style.padding= '10px 20px'
        containerChild.style.textAlign = 'center'
        containerChild.style.color = 'white'
        containerChild.style.fontSize = '30px'
        containerGrid.appendChild(containerChild)
    }


