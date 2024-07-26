//Task 01:
/*Write a custom function power ( a, b ), to calculate the value of a raised to b.*/

function power(a, b){
    return a**b;
}

//Task 02:
/*Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.*/

var userYear = prompt("Enter a year to find out if it's leap or not")
function leapYear(year){
    if(year % 400 === 0){
        return true;
    }
    if(year % 100 === 0){
        return false;
    }
    if(year % 4 === 0){
        return true;
    }
    return false;
}
document.write(leapYear(userYear));

//Task 03:
/*If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions*/

function calculateS(a, b, c) {
    return (a + b + c)/2;
}
function calculateArea(a, b, c){
    var S = calculateS(a,b,c);

    var area = (S*(S - a)*(S - b)*(S - c));
    return area;
}
var a = 3;
var b = 4;
var c = 6;
var areaOfTriangle = calculateArea(a, b, c);
document.write(`The area of triangle is ${areaOfTriangle}`);

//Task 04:
/*Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.*/

function calculateAverage(totalMarks, numberOfSubjects) {
    return totalMarks / numberOfSubjects;
  }
function calculatePercentage(totalMarks, numberOfSubjects) {
    var maxMarks = numberOfSubjects * 100;
    return (totalMarks / maxMarks) * 100;
}
function mainFunction() {
    var numberOfSubjects = 3; 
    var totalMarks = 0;
    for (var i = 0; i < numberOfSubjects; i++) {
      var mark = parseFloat(prompt('Enter marks for subject ' + (i + 1) + ':'));
      totalMarks += mark;
    }
    var average = calculateAverage(totalMarks, numberOfSubjects);
    var percentage = calculatePercentage(totalMarks, numberOfSubjects);
    document.write('Total Marks: ' + totalMarks);
    document.write('<br>Average: ' + average.toFixed(2));
    document.write('<br>Percentage: ' + percentage.toFixed(2) + '%');
}
mainFunction();
  
//Task 05:
/*You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.*/

function indexOf(string, char){
    for(var i =0; i< string.length; i++){
        if (string[i] === char){
            return i
        }
    }
    return -1;
}
document.write(indexOf("hello", "l"));

//Task 06:
/*Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.*/

function dltVowels(sentence){
    if (typeof sentence !== 'string' || sentence.length > 25) {
        document.write('Input must be a string with no more than 25 characters.');
      }
    var vowels = "aeiouAEIOU";
    var result = "";
    for (var i = 0; i < sentence.length; i++) {
        var char = sentence[i];
        if (vowels.indexOf(char) === -1) {
          result += char;
        }
      }
      return result;
}
document.write(dltVowels("Hi, my name is John Doe"));

//Task 07:
/*Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.*/

function vowelOcurrence(sentence2){
    var count = 0;
    var vowels2 = "aeiouAEIOU";
    for (var i = 0; i < sentence2.length - 1; i++) {
        var currentChar = sentence2[i];
        var nextChar = sentence2[i + 1];
        if (vowels2.indexOf(currentChar) !== -1 && vowels2.indexOf(nextChar) !== -1) {
          switch (currentChar + nextChar) {
            case 'ae':
            case 'ai':
            case 'ao':
            case 'au':
            case 'ea':
            case 'ei':
            case 'eo':
            case 'eu':
            case 'ia':
            case 'ie':
            case 'io':
            case 'iu':
            case 'oa':
            case 'oe':
            case 'oi':
            case 'ou':
            case 'ua':
            case 'ue':
            case 'ui':
            case 'uo':
              count++;
              break;
            default:
              break;
          }
        }
      }
      return count;
}
document.write(vowelOcurrence("If you're good at something, never do it for free."));

//Task 08:
/*The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.*/

function kmTometer(distance){
    return distance * 1000
}
document.write(kmTometer(23));

function kmToFeet(dis2){
    return dis2 * 3280.84;
}
document.write(kmToFeet(43));

function kmToinches(dis3){
    return dis3 * 39370.1;
}
document.write(kmToinches(32));

function kmTocentim(dis4){
    return dis4 * 100000;
}
document.write(kmTocentim(38));

//Task 09:
/*Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.*/

function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12.00; 
    if (hoursWorked <= regularHours) {
      return 0; 
    }
    var overtimeHours = hoursWorked - regularHours;
    return overtimeHours * overtimeRate;
}
function headFunction() {
    var hoursWorked = parseInt(prompt('Enter the number of hours worked by the employee:'));
    if (isNaN(hoursWorked) || hoursWorked < 0) {
      alert('Please enter a valid number of hours worked.');
      return;
    }
    var overtimePay = calculateOvertimePay(hoursWorked);
    document.write('Overtime Pay: Rs. ' + overtimePay.toFixed(2));
}
headFunction();   

//Task 10:
/*A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the
keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.*/

function calculateNotes(amount) {
    var denomination100 = 100;
    var denomination50 = 50;
    var denomination10 = 10;

    var notes100 = Math.floor(amount / denomination100);
    amount %= denomination100; 
  
    var notes50 = Math.floor(amount / denomination50);
    amount %= denomination50; 
  
    var notes10 = Math.floor(amount / denomination10);
    amount %= denomination10; 
    return [notes100, notes50, notes10];
}
function mainFunction2() {
    var amountHundreds = parseInt(prompt('Enter the amount to be withdrawn (in hundreds):'));
    var amount = amountHundreds;
    var [notes100, notes50, notes10] = calculateNotes(amount);
    document.write('Currency Notes: <br>' + '100 Rs Notes: ' + notes100 + '<br>' + '50 Rs Notes: ' + notes50 + '<br>' +'10 Rs Notes: ' + notes10);
}

mainFunction2();
