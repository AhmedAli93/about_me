'use strict';


var name = prompt('What is your name?');
console.log(name);

alert('Hi there ' + name + ', I\'m going to ask you yes/no questions.');

var work = prompt('Do you work for a living');
var work1 = work.toUpperCase();
console.log(work);

if(work1 ==='NO'|| work1 ==='N')
{
var school = prompt('Are you going to school');
var school1 = school.toUpperCase();
console.log(school);}

if(school1 === 'NO' || school1 === 'N'){
  alert('You are very lazy');
}

if(work1 === 'YES' || work1 === 'Y'){
var coding = prompt('Have you learned how to write code?');
var coding1 = coding.toUpperCase();
console.log(coding);}

if(coding1 === 'YES' || coding1 ==='Y'){
  alert('Wow! I have also learned how too code also.');
}
