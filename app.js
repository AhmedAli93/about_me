'use strict';


var name = prompt('What is your name?');
console.log(name);

alert('Hi there ' + name + ', I\'m going to ask you yes/no questions.');

var work = prompt('Do you work for a living');
var work1 = work.toUpperCase();
console.log(work);
if(work1 ==='NO')
{
var school = prompt('Do you go to school');
var school1 = school.toUpperCase();
console.log(school);}

if(school1 === 'NO'){
  alert('You are very lazy');
}

if(work1 === 'YES'){
var coding = prompt('Do you like coding');
var coding1 = coding.toUpperCase();
console.log(coding);}

if(coding1 === 'YES'){
  alert('Wow! I also too.');
}
