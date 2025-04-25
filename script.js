// Datatyper:
//
// String - "" - tekst
// Char - character- en enkel bokstav
// interger - tall
// boolean - true/false
// null - nullverdi
// undefined - ukjent
// object - samling av informasjon som omhandler en ting
// array- liste over ting
//
//
// Variabler:
// const - er konstant, kan ikke endres i etterkant
// let - ikke konstant, kan endres i etterkant
//
// string datatype:
const myName = "Camilla";
// Logger til konsollen hvor man kan sjekke at outputen er riktig og at man får det resultatet man forventer
console.log(myName);
// integer datatype:
let age = 36;
console.log(age);
// object datatype:
let person = {
  navn: "Ole",
  alder: 25,
  by: "Bergen",
  haircolor: "black",
  car: "toyota",
  siblings: 3,
  house: true,
  pets: "cat",
  children: 3,
};
//Bruke de ulike delene av objektet:
let message = "God morgen, ";
let personName = person.navn;
let finalMessage = message + personName;
console.log(finalMessage);

console.log(person);
console.log(person.siblings);

// array datatype:
let frukt = ["eple", "pære", "banan"];
// Hente ut hele eller deler av arrayet:
console.log(frukt);
console.log(frukt[2]);

// char datatype- character
const letter = "A";

// Operators
// Arithmetic operators- matematikk

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

// Comparison operators

let x = 10;
let y = 20;

console.log(x > y); // større enn
console.log(x < y); // mindre enn
console.log(x == y); // sjekker om det er samme type eller verdi
console.log(x === y); // Strictly equal to
console.log(x != y); // is not equal to

console.log(x <= y); // mindre eller lik
console.log(x >= y); // større eller lik

// Logical operators og / eller operators

let erVoksen = true;
let barneSkole = false;

console.log(erVoksen && !barneSkole);
console.log(erVoksen || barneSkole);

// Logical not operator:
userName = "Per";
hasCar = true;

console.log(!hasCar);

// Conditionals;
// if, if-else, if-else if-else

const newAge = 17;

if (newAge >= 18) {
  console.log("Velkommen inn!");
}

if (newAge < 18) {
  console.log("Du får ikke komme inn");
} else {
  console.log("Du får komme inn likevel");
}

let newName = "Kristin";
let numberOfCats = 3;

if (numberOfCats >= 20 && newName === "Maria") {
  console.log("You have too many cats");
} else if (numberOfCats <= 20 && newName === "Kristin") {
  console.log("Right person, not enough cats");
} else {
  console.log("Hvor er Kristin og kattene?");
}

let user = {
  userName: "Mads",
  userAge: 19,
  userCity: "Oslo",
};

if (user.userName === "Per") {
  console.log("Velkommen Per");
} else if (user.userAge <= 18) {
  console.log("Du er ikke gammel nok");
} else if (user.userName === "Mads" && user.userCity === "Bergen") {
  console.log("Velkommen, Mads fra Oslo");
} else {
  console.log("Du får ikke komme inn");
}

//ternary - en kortere og enklere måte å skrive en if-else loop på.
// Brukes kun for å korte ned kode!
let anotherName = "Ida";
let personAge = 15;
let newMessage =
  personAge >= 18
    ? "Du er voksen"
    : personAge === 12
    ? "Du er tolv"
    : personAge === 20
    ? "Du er 20"
    : "Du er barn";
console.log(newMessage);
