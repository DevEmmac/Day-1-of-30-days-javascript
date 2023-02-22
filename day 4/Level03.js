// Exercises: level 3

/*
 Write a program which tells the number of days in a month.
*/
   
let month = prompt('Enter a month: ').toLowerCase();
let umonth = month.charAt(0).toUpperCase() + month.slice(1);
if (month === 'September'.toLowerCase() || month === 'April'.toLowerCase() || month === 'June'.toLowerCase() || month === 'November'.toLowerCase()) {
    console.log(`${umonth} has 30 days`);
} else if (month === 'January'.toLowerCase() || month === 'March'.toLowerCase() || month === 'May'.toLowerCase() || month === 'July'.toLowerCase() || month === 'August'.toLowerCase()) {
    console.log(`${umonth} has 31 days.`);
} else if (month === 'Febuary'.toLowerCase()) {
    console.log(`${umonth} has 28 days.`);
} else {
    console.log('Invalid Month entered');
}

/*
write a program which tells the number of days in a month, now consider leap year.
 */

let months = prompt('Enter a month: ').toLowerCase();
let umonths = months.charAt(0).toUpperCase() + months.slice(1);
if (months === 'September'.toLowerCase() || month === 'April'.toLowerCase() || month === 'June'.toLowerCase() || month === 'November'.toLowerCase()) {
    console.log(`${umonth} has 30 days`);
} else if (months === 'January'.toLowerCase() || months === 'March'.toLowerCase() || month === 'May'.toLowerCase() || month === 'July'.toLowerCase() || month === 'August'.toLowerCase()) {
    console.log(`${umonth} has 31 days.`);
} else if (months === 'Febuary'.toLowerCase()) {
    console.log(`${umonth} has 28 days and has 29 days in each leap year.`);
} else {
    console.log('Invalid Month entered');
}
