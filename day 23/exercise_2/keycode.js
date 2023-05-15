
document.body.style.display = 'flex'
document.body.style.flexDirection = 'column'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'
document.body.style.fontSize = '60px'

let container = document.createElement('div')
let keynumber = document.createElement('div')
let youPressed = document.createElement('span')
let keyword = document.createElement('span')

document.body.append(container)
container.append(youPressed)
container.append(keyword)
document.body.append(keynumber)


youPressed.textContent = 'Press any keyboard key'
youPressed.style.fontFamily = 'Helvetica'
youPressed.style.fontWeight = 'bold'
youPressed.style.fontSize = '2rem'


container.style.padding = '1rem 6rem'
container.style.margin = '25rem auto 0'
container.style.boxShadow = '2px 2px 2px 3px rgba(0, 0, 0, 0.2)'


document.body.addEventListener('keydown', (e) => {
    let { key, keyCode} = e

    youPressed.textContent = 'You Pressed '
    youPressed.style.fontSize = '2rem'


    keyword.style.fontSize = '2rem'
    keyword.textContent = key
    keyword.style.color = 'green'
    keyword.style.textShadow = '1px 1px 3px #000000'


    keynumber.textContent = keyCode
    keynumber.style.color = 'green'
    keynumber.style.fontSize = '100px'
    keynumber.style.boxShadow = '2px 2px 2px 3px rgba(0, 0, 0, 0.2)'
    keynumber.style.marginTop = '2rem'
    keynumber.style.padding = '2.5rem 1.5rem'
    keynumber.style.borderRadius = '10px'
 })
 youPressed.style.textShadow = '4px 4px 5px #d7d5d5'
