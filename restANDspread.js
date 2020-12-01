/* 
Opdracht 603: Rest Parameter and Spread Operator

Je gaat 2 functies schrijven

Functie 1:

Schrijf een simpele functie die meerdere cijfers bij elkaar optelt

De functie accepteert meerdere argumenten

Gebruik de rest parameter om ervoor te zorgen dat je functie alle argumenten als een array behandelt.

Solution:

const optellen = function(...args) {
        return args.reduce((acc,item) => {
                return acc + item;
        })
}

console.log(optellen(1,2,3,4,5,6)); // verwachte uitkomst: 21
 */

function sum(...numbers) {
  //   return numbers.reduce(function (accumulator, current) {
  //     return accumulator + current;
  //   });

  // arrow syntax
  return numbers.reduce((accumulator, current) => accumulator + current);
}

console.log(sum(1, 2, 3, 4, 5, 6));

/* Functie 2:

Schrijf een simpele functie die meerdere cijfers bij elkaar optelt

De functie accepteert 1 argument, namelijk een array van cijfers

Gebruik de spread operator om ervoor te zorgen dat je functie alle items in de array bij elkaar optelt.

Solution:

const optellen = function(num1, num2, num3) {
  return num1 + num2 + num3;
}

const cijfers = [1, 2, 3];

console.log(optellen(...cijfers));
/ verwachte uitkomst: 6
 */

function sum2(num1, num2, num3) {
  return num1 + num2 + num3;
}
let num = [1, 2, 3];

console.log(sum2(...num));
