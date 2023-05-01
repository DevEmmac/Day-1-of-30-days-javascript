// EXERCISE

/* Question 1
Create an index.html file and put four p elements as above: 
Get the first paragraph by using document.querySelector(tagname)
and tag name */


    let firstParagraph = document.querySelector('p')
    console.log(firstParagraph)


/* Question 2
 Get each of the the paragraph using document.querySelector('#id') 
 and by their id
*/

/* let getFirstParagraph = doucumnet.querySelector('#first-paragraph')
   let getSecondParagraph = document.querySelector('#second-paragraph')
   let getThirdParagraph = document.querySelector('#third-paragraph')
   let getFourthParagraph = document.querySelector('#fourth-paragraph')
    
   console.log(getFirstParagraph)
   console.log(getSecondParagraph)
   console.log(getThirdParagraph)
   console.log(getFourthParagraph)
  */

/* 
Question 3
Get all the p as nodeList using document.querySelectorAll(tagname) and by 
their tag name 
*/
/*
const getAllP = document.querySelectorAll('p')
getAllP.forEach(paragraph => console.log(paragraph))
*/


/*
Question 4
Loop through the nodeList and get the text content of each paragraph
*/
/*
const allP = document.querySelectorAll('p')
console.log(allp.length)
for (i = 0; i < allP.length; i ++) {
    console.log(allP[i])
}
*/
/* 
Question 5
Set a text content to paragraph the fourth paragraph,Fourth Paragraph
*/
/*
const paragraph = documnet.querySelectorAll('p')
paragraph[3].textContent = 'Fourth paragraph'

*/
/*
Question 6
Set id and class attribute for all the paragraphs using different
attribute setting methods
*/
/*
const forAllParagraph = documnet.querySelectorAll('p')
forAllParagraph[2].className = 'paragraph'
forAllParagraph[2].id = 'third-paragraph'
forAllParagraph[3].setAttribute('class', 'paragraph')
forAllParagraph[3].setAttribute('id', 'fourth-paragraph')
*/