// EXERCISE: LEVEL 2

/* Question 1
Change stye of each paragraph using JavaScript(eg. color, background,
border, font-size, font-family)
*/

const forAllParagraph = documnet.querySelectorAll('p')
forAllParagraph.forEach((paragraph, i) => {
    paragraph.style.fontSize = '30px'
    paragraph.styel.fontFamily = 'Arial'
    paragraph.style.Border = '10px'
    if (i % 2 === 0) {
        paragraph.style.color = 'blue'
        paragraph.style.backgroundColor = 'grey'
    } else {
        paragraph.styel.color = 'green'
        paragraph.style.backgroundColor = 'brown'
    }
});


/*
Question 2 
Select all paragraphs and loop through each elements and give the
first and third paragraph a color of green, and the second and the
fourth paragraph a red color
*/ 

const allParagraph = document.querySelectorAll('p')
allParagraph.forEach((paragraph, i) => {
    /*
    if (i % 2 === 0) {
        paragraph[0].style.color = 'green'
        paragraph[2].style.color = 'green'
    } else {
        paragraph[1].style.color = 'red'
        paragraph[3].style.color = 'red'
    }
    */
})

/*
Question 3
Set text content, id and class to each paragraph
*/

const textForEachParagraph = documnet.querySelectorAll('p')
textForEachParagraph.forEach((paragraph, i) => {
    /*  if (i % 2 === 0 ) { 
    paragraph.textContent = 'first-paragraph'
    paragraph.setAttribute('class', 'first-text')
    paragraph.setAttribute('id', 'text1')
    } else {
    paragraph.textContent = 'text-setting'
    paragraph.setAttribute('class', 'second-text')
    paragraph.setAttribute('id', 'text2')
    } 
    */
   console.log(paragraph, i)
})