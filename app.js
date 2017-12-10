'use strict';


var name = prompt('What is your name?');
console.log(name);

alert('Hi there ' + name + ', I\'m going to ask you yes/no questions.');

var work = prompt('Do you work for a living');
var workUpper = work.toUpperCase();
console.log(work);

if(workUpper ==='NO'|| workUpper ==='N'){
alert('You must no like money.')
}

if(workUpper ==='YES'|| workUpper ==='Y'){
alert('You should start saving your money.')
}


var school = prompt('Are you going to school');
var schoolUpper = school.toUpperCase();
console.log(school);


if(schoolUpper === 'NO' || schoolUpper === 'N'){
  alert('You are very lazy.');
}

if(schoolUpper === 'YES' || schoolUpper === 'Y'){
  alert('Good luck I graduted!');
}


var coding = prompt('Have you learned how to write code?');
var codingUpper = coding.toUpperCase();
console.log(coding);

if(codingUpper === 'YES' || codingUpper ==='Y'){
  alert('Wow! I have also learned how too code also.');
}
if(codingUpper === 'NO' || codingUpper ==='N'){
  alert('You should start learning how to code its awsome!');
}

var drive = prompt('Can your drive a car?');
var driveUpper = drive.toUpperCase();
console.log(drive);

if(driveUpper === 'YES' || driveUpper ==='Y'){
  alert('You must be 18years or older.');
}
if(driveUpper === 'NO' || driveUpper ==='N'){
  alert('You must be under the age of 18.');
}
