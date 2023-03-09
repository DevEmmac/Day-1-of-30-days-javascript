// EXERCISES: Level 2

   /*
    (Question 1)
    Write a script that prompt the user to enter base and height 
    of the triangle and calculate an area of a triangle 
    (area = 0.5 x b x h).
   */
    const a = 0.5;
    const b = prompt('Enter base: ');     // 20
    const h = prompt('Enter height: ');   // 10
    const area = a * b * h;
    console.log(`The area of the triangle is ${area}`);       // 100

 
  /*
    (Question 2) 
    Write a script that prompt the user to enter side a,
    side b, and side c of the triangle and and calculate the 
    perimeter of triangle (perimeter = a + b + c)
  */

   const sideA = parseInt(prompt('Enter side a: '));      // 5
   const sideB = parseInt(prompt('Enter side b: '));      // 4
   const sideC = parseInt(prompt('Enter side c: '));       // 3
   const perimeter = sideA + sideB + sideC;
   console.log(`The perimeter of the triangle is ${perimeter}`);   // 12

   /*
    (question 3)
   Get length and width using prompt and calculate an area of 
   rectangle (area = length x width and the perimeter of 
   rectangle (perimeter = 2 x (length + width))
   */

   const length = parsInt(prompt('length is: '));      // 5
   const width = parseInt(prompt('width is: '));       // 7
   const areaOfRectangle = (length * width);
   const perimeterOfRectangle = 2 * (lenght + width);
   console.log(`area of rectangle is ${areaOfRectangle}, perimeter of a rectangle is ${perimeterOfRectangle}.`)   // area ia 35,perimeter is 24 

   
   /*
    (Question 4)
    Get radius using prompt and calculate the area of a circle 
    (area = pi x r x r) and circumference of a circle(c = 2 x pi x r)
     where pi = 3.14.
   */

   const pi = prompt('pi is: ');               // 3.14
   const radius = prompt('radius is: ');       // 100
   const aOfc = pi * radius * radius;
   const c = 2 * pi * radius;
   console.log(`area of a circle is ${aOfc}, circumference od a circle is ${c}`);     // area of a circle is 31400,circumerence is 628 
   

   /*
    (Question 5)
    Calculate the slope, x-intercept and y-intercept of y = 2x -2
   */
    
        /*
        x-intercept;
        y-intercept;
        y = 2x -2;

        for the x-intercept,set y = 0;
        y = 2x -2;
        0 = 2x -2;
        2x = 2;
        x = 2/2;
        x = 1;
        the x intercept is at(1,0);
         
        for the y-intercept,set x=0;
        y = 2x -2;
        y = 2(0) -2;
        y = -2;
        the y intercept is at (0,-2);
        */

   /*
    (Question 6)
    Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
   */

   /*
    (Question 7)
    Compare the slope of above two questions.
   */
   
   /*
    (Question 8)
    Calculate the value of y (y = x2 + 6x + 9). Try to use 
    different x values and figure out at what x value y is 0.
   */

   /*
    (Question 9)
    Writ a script that prompt a user to enter hours and rate per hour. 
    Calculate pay of the person?
   */
     
      const user = prompt('Enter hours: ');               // 40
      const rate = prompt('Enter rate per hour: ');       // 28
      const pay = user * rate;
      console.log(`Your weekly earning is ${pay}`);          // 1120
   
   /*
   (Question 10)
    If the length of your name is greater than 7 say, 
    your name is long else say your name is short.
   */

    let myName = 'Emmanuel' > 7;
    myName ? console.log('My name is long') : console.log('my name is short');

   /*
   (Question 11)
   Compare your first name length and your 
   family name length and you should get this output.
   */

   const firstNameis = 'Emmanuel';
   const familyName = 'Olayiwola';
   console.log(`My first name, ${firstNameis} is shorter than my family name, ${familyName}`);

   /*
   (Question 12)
   Declare two variables myAge and yourAge and assign them 
   initial values and myAge and yourAge.
   */

   const myAge = 35;
   const yourAge = 26;
   const yearsOlder = myAge - yourAge;
   console.log(`i am ${yearsOlder} years older than you.`);      //I am 9 years older than you.

   /*
   (Question 13)
    Using prompt get the year the user was born and if the user is 18 or above allow the user to 
    drive if not tell the user to wait a certain amount of years.
   */

    let above = prompt('Enter birth year: ');                                  // 1995
    let toDrive = 25;
    toDrive >= 18
         ? console.log(`You are ${toDrive}. You are old enough to drive`)       //  You are 25. You are old enough to drive       
         : console.log(`you are ${toDrive}. You will be allowed to drive 3 years`)
   let below = prompt('Enter birth year; ');                                   // 2005            
    toDrive = 15;
    toDrive >= 18
         ? console.log(`You are ${toDrive}. You are old enough to drive`)      //  You are 15. You will be allowed to drive after 3 years.
         : console.log(`You are ${toDrive}. you will be allowed to drive after 3 years.`)

   /*
    (Question 14)
    Write a script that prompt the user to enter number of 
    years. Calculate the number of seconds a person 
    can live. Assume some one lives just hundred years
   */
  
    const years = prompt('Enter number of years you live: ');    // 100
    const hundreds = 100;
    const adayInseconds = 86400;
    const ayear = 365;
    const userYears = hundreds * adayInseconds * ayear;         
    console.log(`You lived ${userYears} seconds`)                // You lived 315360000 seconds
    

   /*
     (Question 15)
     Create a human readable time format using the Date time object

     YYYY-MM-DD HH:mm
     DD-MM-YYYY HH:mm
     DD/MM/YYYY HH:mm
   */
      
     const now = new Date();
     const yearr = now.getFullYear();
     const day = now.getDay();
     const month = now.getMonth();
     const hour = now.getHours();
     const minute = now.getMinutes();
     console.log(`${year}-${month}-${day} ${hour}:${minute}`);  // 2023-1-3 11:56
     console.log(`${day}-${month}-${year} ${hour}:${minute}`);  // 3-1-2023 11:56
     console.log(`${day}/${month}/${year} ${hour}:${minute}`);  // 3/1/2023 11:56
   