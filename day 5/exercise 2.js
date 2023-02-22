// EXERCISE 2


/*
(Question 2)
 First remove all the punctuations and change the string
  to array and count the number of words in the array
 */

  let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  let words = text.split();
  console.log(words);                 //   ['I',          'love',
                                      //    'teaching',   'and',
                                      //      'empowering', 'people.',
                                      //  'I',          'teach',
                                      //      'HTML,',      'CSS,',
                                      //      'JS,',        'React,',
                                      //      'Python.'] 
  
  console.log(words.length)                // 13


  /*
   (Question 3)
   In the following shopping cart add, remove, edit items
  */
    // (1) add 'Meat' in the beginning of your shopping cart if it has not been already added
     
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
    shoppingCart.unshift('Meat');
    console.log(shoppingCart);           // ['Meat','Milk','Coffee','Tea','Honey']


    // (2) add Sugar at the end of you shopping cart if it has not been already added

    const shopping_Cart = ['Milk', 'Coffee', 'Tea', 'Honey'];
     shopping_Cart.push('Suagr');
     console.log(shopping_Cart)      // ['milk', 'Coffe', 'Tea', 'Honey', 'Sugar']

    
     // (3)  remove 'Honey' if you are allergic to honey
    
    const shopCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
    shopCart.pop('Honey');
    console.log(shopCart);     // ['Milk', 'Coffee', 'Tea']

    
    // (4)  modify Tea to 'Green Tea'
    
    const shoppingTea = ['Milk', 'Coffee', 'Tea', 'Honey'];
    shoppingTea.splice(2,1,'Grea Tea')
    console.log(shoppingTea);         // [ 'Milk', 'Coffee', 'Grea Tea', 'Honey' ]


/*
 (Question 4)
 In countries array check if 'Ethiopia' exists in the array
  if it exists print 'ETHIOPIA'. If it does not exist add to 
  the countries list.
 */
  
     const countries =  ['Albania',
                        'Bolivia',
                        'Canada',
                        'Denmark',
                        'Ethiopia',
                        'Finland',
                        'Germany',
                        'Hungary',
                        'Ireland',
                        'Japan',
                        'Kenya']
 if (countries.includes('Ethiopia')) {
      console.log('ETHIOPIA');
 } else {
    console.log('does not exist add to the countries list');
 }

 /*
  (Question 5)
   In the webTechs array check if Sass exists in the array
    and if it exists print 'Sass is a CSS preprocess'. 
    If it does not exist add Sass to the array and print the 
    array.
  */
     
    const webTechs = [   'HTML',
                        'CSS',
                        'JavaScript',
                        'React',
                        'Redux',
                        'Node',
                        'MongoDB'
                    ]
   webTechs.push('Sass');
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else { 
    console.log('If not add Sass')
}


/*
(Question 6)
  Concatenate the following two variables and store it in a 
  fullStack variable.
*/

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);   // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
