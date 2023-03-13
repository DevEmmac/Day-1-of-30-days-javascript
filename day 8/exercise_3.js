// EXERCISE: LEVEL3

/*
(Question 1)
Create an object literal called personAccount. It has firstName,lastName,
incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is a set of 
incomes and its description.
*/

const personAccount = {firstName: 'Emmanuel',
                        lastName: 'Olasunkanmi',
                        income: {
                            tech: 5000,
                        },
                        expenses: {
                            foodStuff: 3000,
                            water: 1000,
                            carfuel: 500,
                        },
                        totalIncome: '12000',
                        totalExpense: '9000',

                        accountInfo: function () {
                         const fullName = `${this.firstName} ${this.lastName}`;
                         const personAcctInfo = `Account Name: ${fullName}\nTotal Income:${this.totalIncome},\nTotal Expenses: ${this.totalExpense}`;
                         console.log(personAcctInfo);
                         return personAcctInfo;
                        },
                        addIncome: function () {
                            let incomeSum = 0;
                            for (const element of Object.values(this.income)) {
                                incomeSum += element;
                            }
                            console.log(incomeSum);
                            return incomeSum;
                        },
                        addExpense: function () {
                           let expensesSum = 0;
                           for (const element of Object.values(this.expenses)) {
                             expensesSum += element;
                           }
                           console.log(expensesSum);
                           return expensesSum;
                        },
                        accountBalance: function () {
                            let accountBalance = 0;
                            accountBalance = this.addIncome() - this.addExpense();
                            console.log(accountBalance);
                            return accountBalance;
                        }

 }
personAccount.accountInfo();
personAccount.addIncome();
personAccount.addExpense();
personAccount.accountBalance();


/*
(Question 2)
**** Questions:2, 3 and 4 are based on the following two 
arrays:users and products ()
*/
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

/*
a. function called signUp which allows user to add to the
collection.If user exists, inform the user that he has an account 
already.
 */

function signUp (name,useremail,password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i]['username'] === name || users[i]['email'] === useremail) {
      return console.log('Username already exist');
    }
  } 
    {
      const date = new Date();
      users.push({
        _id: Math.random().toString(16).slice(2,8),
        username: name,
        email: useremail,
        password: password,
        createdAt: new Date().toLocaleString(),
       isLoggedIn: false,
      });
        
    }
    console.log(users);
    return users;
}

signUp('Olayiwola','eolasunkanmi@gmail.com', '12345');

/*
b. Create a function called signIn which allows user to sign in to
the application
*/

 function signIn (username, password) {
  for (let i = 0; i < users.length; i++) {
      if (users[i].username.toLowerCase() === username.toLowerCase() && users[0].password === password) {
          return users[i];
      } else {
          return "wrong username or password";
      }
   }
  } 
  signIn('Olayiwola', '12345');

  /*
  The products array has three elements and each of them has six 
  properties. b. Create a function called averageRating which 
  calculate the average rating of a product
  */
   
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ];

  /*
  a. Create a function called rateProduct which rates the product.
  */
   
   function rateProduct (product, userId, rating) {
       for(const element in products) {
        if (products[element]['name'] === product) {
            products[element]['ratings'].push({userId: userId, rate: rating});
        }
       }
       console.log(products);
       return products;
   }
   rateProduct('TV', 'Emmanuel', 6);

/*
b. Create a function called averageRating which calculate the 
average rating of a product
*/

  function averageRating () {

  }


/*
(Qustion 4)
Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
*/

 
function likeproduct (product, name) {
  for (let element in products) {
      if (products[element]['name'] === product && products[element]['likes'] !== name) {
          products[element]['likes'].push(name);
          console.log(products)
          break;
      } if (products[element]['name'] !== product) {
          console.log("product doesn't exist" );
          return 0;
      }
  }
  return products;
}
likeproduct('mobile phone', 'Asab' );