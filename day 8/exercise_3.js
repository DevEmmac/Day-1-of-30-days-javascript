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
]

a. function called signUp which allows user to add to the collection.
 If user exists, inform the user that he has already an account.

 function signUp () {
    
 }