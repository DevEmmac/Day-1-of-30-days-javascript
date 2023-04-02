x// EXERCISE 3

/*
(Quesion 1)
Let's try to develop a program which calculate measure of central 
tendency of a sample(mean, median, mode) and measure of variability
(range, variance, standard deviation). In addition to those measures 
find the min, max, count, percentile, and frequency distribution 
of the sample. You can create a class called Statistics and create
all the functions which do statistical calculations as method 
for the Statistics class. Check the output below.
*/

class Statistics {
    constructor(arr) {
        this.arr = arr;
    }

    get length() {
        return this.arr.length;
    }

    count() {
        return this.length;
    }

    sum() {
        let sum = 0;
        this.arr.forEach((num) => {
            sum += num
        })
        return sum;
    }

    mean() {
        let sum = 0;
        this.arr.forEach((num) => {
            sum += num
        })
        return Math.ceil(sum / this.length)
    }

    min() {
        let minNum = this.arr[0]
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] < minNum) {
                minNum = this.arr[i]
            }
        }
        return minNum;
    }

    max() {
        let maxNum = this.arr[0]
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] > maxNum) {
                maxNum = this.arr[i]
            }
        }
        return maxNum
    }

    range() {
        return this.max() - this.min();
    }

    median() {
        let sorted = this.arr.sort()
        let index = sorted.length / 2
        index = Math.floor(index);
        return sorted[index];
    }

    mode() {
        const mode ={};
        let max = 0, count = 0;
        for(let i = 0; i < this.arr.length; i++){
            const item = this.arr[i];
            if(mode[item]){
                mode[item]++;
            }else{
                mode[item] = 1;
            }
            if(count < mode[item]){
                max = item;
                count = mode[item];
            }
        }
                return `(${max}, ${count})`;    }

    variance() {
        if(!this.arr.length){
            return 0;
         };
         const sum = this.arr.reduce((acc, val) => acc + val);
         const { length: num } = this.arr;
         const median = sum / num;
         let variance = 0;
         this.arr.forEach(num => {
            variance += ((num - median) * (num - median));
         });
         variance /= num;
         return parseFloat(variance).toFixed(1);
    }

    standardDeviation = (usePopulation = false) => {
        const mean = this.arr.reduce((acc, val) => acc + val, 0) / this.arr.length;
        return parseFloat(Math.sqrt(
          this.arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
            (this.arr.length - (usePopulation ? 0 : 1))).toFixed(2)
        );
      };
    frequencyDistribution() {
        let obj = {};
        for (let i = 0; i < this.arr.length; i++) {
          let element = this.arr[i];
          if (obj[element] !== undefined) {
            obj[element] += 1;
          }
          else {
            obj[element] === 1;
          }
        }
        return obj
      }
        


    describe() {
        return `
        Count: ${this.count()}\n
        Sum: ${this.sum()}\n 
        Min: ${this.min()}\n
        Max: ${this.max()}\n
        Range: ${this.range()}\n
        Mean: ${this.mean()}\n
        Median: ${this.median()}\n
        Mode: ${this.mode()}\n
        Variance: ${this.variance()}\n
        Standard Deviation: ${this.standardDeviation()}\n
        Frequency Distribution: ${this.frequencyDistribution()}`
    }
}

let numbers = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);
console.log(numbers.describe())


/*
Question 2: Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, 
totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and 
expenses is also a set of expenses and its description.
*/

// Answer

class PersonAccount {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = [];
        this.expenses = [];
    }

    totalIncome() {
        let totalIncom = 0;
        this.incomes.forEach(income => totalIncom += income)
        return totalIncom
    }
    totalExpenses() {
        let totalExpenses = 0;
        this.expenses.forEach(expense => totalExpenses += expense)
        return totalExpenses;
    }

    accountInfo() {
        return `
        Full-Name: ${this.firstName} ${this.lastName}
        total-Income: ${this.totalIncome()}
        total-Expenses: ${this.totalExpenses()}
        `
    }

    set addIncome(amount) {
        this.incomes.push(amount)
    }

    set addExpenses(cost) {
        this.expenses.push(cost)
    }
}

let myAccount = new PersonAccount("Habib", "Salau")
console.log(myAccount.accountInfo())