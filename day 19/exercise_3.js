// EXERCISE: LEVEL 3

/*
Create a personAccount out function. It has firstname, lastname, 
incomes, expenses inner variables. It has totalIncome, totalExpense,
 accountInfo,addIncome, addExpense and accountBalance inner 
 functions. Incomes is     }
    }, 2000);a set of incomes and its description and
  expenses is also a set of expenses and its description.
*/
 

function personAccount () {
  const firstName = 'Olayiwola'
  const lastName = 'Emmanuel'
  let incomes = [100, 300, 550]
  let expenses = [50]
  let totalIncome = 0
  let totalExpense = 0

  function totalIncom () {
    incomes.forEach((income) => {
      totalIncome += income
      return totalIncome
    })
  }

  function totalExpens() {
      expenses.forEach((expense) => {
          totalExpense += expense
          return totalExpense
      })
  }

  function accountInfo () {
      const personAcctInfo = `full Name: ${firstName} ${lastName}
      Total Income: ${totalIncome}
      Total Expenses: ${totalExpense}
      Balance: ${accountBalance()}`
      return personAcctInfo
  }
  function addIncome (incomes) {
      incomes.push(incomes)
      return incomes
  }
  function addExpense(expense) {
      expenses.push(expense)
      return expenses
  }
  function accountBalance () {
      let myBalance = `${totalIncome - totalExpense}`
      return myBalance
  }
  return totalIncom(), totalExpens(), accountBalance(), accountInfo()
}
console.log(personAccount())