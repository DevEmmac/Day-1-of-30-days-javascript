const main = document.querySelector('.main-container')
const mini = document.querySelector('.mini-container')

const font_family = ['Raleway Dots', 'aldrich', 'Montserrat', 'Nunito', 'Oswald', 'lato', 'Raleway', 'Roboto', 'ubuntu']
console.log(mini)
const challenge = '30 days of JavaScript Challenge 20223 asabeneh yetayeh'.split("")
 
// const challenge = ['30', 'days', 'Of', 'JavaScript', 'Challenge', '2020', 'asabeneh', 'yetayeh']
console.log(challenge)

const randomGenerator = () => {
  const str = [1,2,3,4,5,6,7,8,9,0,'a','b', 'c','d','e', 'f'] 
  let hex = ''
  for (let i = 0; i < 6; i++) {    
  let index = Math.floor(Math.random() * str.length)
  hex += str[index]
  }
  return '#' + hex
  }
  
  
  mini.innerHTML = challenge.map((value) => 
  value===' '? `<span>&nbsp;</span>` :
  `<span>${value}</span>
  `).join('')
  
  const span = document.querySelectorAll('span')
  console.log(span)
  
  span.forEach( letter => 
   {setInterval(()=>{
  
      letter.style.color = randomGenerator()
  }, 4000)} )
  
  
  let count = 0
  
  setInterval( () => {
  mini.style.fontFamily = font_family[count]
  count >= (font_family.length) - 1 ? count = 0 : 
  count++
  
  }, 4000 )



const colored2 = () => {
    let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    let color = `rgb(${random1},${random2},${random3})`
    mini.style.backgroundColor = color
    
}
setInterval(colored2, 3500)
