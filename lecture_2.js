/*
let's now  get html elements and set javascript 
variables data in them
*/

// you need to first get html element so use selector to select html tags

let Name = "Sanaullah";
let Age = 25;
let Subject ="JavaScript Programming";

document.getElementById('name').textContent=Name;
document.getElementById('age').textContent=Age;
document.getElementById('subject').textContent=Subject;


//type conversion of variablle 

/* 
 string into number
 number into string
 boolean into number etc
*/

let num =20;
let num1 = 2;
num =String(num)
num+=10
console.log(num)

let text= 'sanaullah';
text= Number(text)// find out what is problem why it can't convert string into number ?
console.log(text)



