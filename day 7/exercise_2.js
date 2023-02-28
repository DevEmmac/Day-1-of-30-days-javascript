// EXERCISES: LEVEL 2

/*
(Qestion 1)
Linear equation is calculated as follows: ax + by + c = 0. Write 
a function which calculates value of a linear equation, 
solveLinEquation.
*/

  function solveLinEquation (a, x, b, y, c) {
       let linearEquation = (a*x) + (b*y) + c;
       return linearEquation;
  }
  console.log(solveLinEquation(2,2,5,3,3))


/*
(Question 2)
Quadratic equation is calculated as follows: ax2 + bx + c = 0.
Write a function which calculates value or values of a quadratic
equation, solveQuadEquation.
*/
  
function solveQuadratic (a, b, c) {
    const discriminant = (b ** 2) - 4 * a * c;
    let root1;
    let root2;
    if (discriminant > 0) {
        root1 = Math.round((-b + Math.sqrt(discriminant)) / (2 * a));
        root2 = Math.round((-b - Math.sqrt(discriminant)) / (2 * a));
        console.log('The roots of the Quadratic equation are ' + root1 + ' and' + ' '+ root2);
    } else if (discriminant == 0) {
        root1 = root2 = Math.round(-b / (2 * a));
        console.log('The roots of the Quadractic equation are ' + root1 + ' and ' + ''+ root2);
    } else {
       let realPart = (-b / (2 * a)).toFixed(2);
       let imgPart = (Math.sqrt(-discriminant)) / (2 * a).toFixed(2);
       root1 = Math.round(realPart + imgPart);
       root2 = Math.round(realPart - imgPart);
       console.log('The roots of the Quadractic equation are ' + root1 + 'i and' + root2 + 'i');
    }
    return root1, root2
   }
   
   console.log(solveQuadratic()) // {0}
   console.log(solveQuadratic(1, 4, 4)) // {-2}
   console.log(solveQuadratic(1, -1, -2)) // {2, -1}
   console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
   console.log(solveQuadratic(1, 0, -4)) //{2, -2}
   console.log(solveQuadratic(1, -1, 0)) //{1, 0}
   