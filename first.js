// alert("alert from first.js")
// let a = 1;
// let b = 2;
// console.log( "a+b" , a+b);
// console.log( "a-b" , a-b );

// let mode = "dark";
// if (mode == "dark"){
//     console.log("dark");

// }else{
//     console.log("light");
// }

// let age = 20;
// if (age >= 18) {
//     console.log("adult");
// } else {
//     console.log("child");
// }

// let num = prompt("enter your number")
// if (num % 5 === 0){
//     console.log("true");
// }else{
//     console.log("false");
// }
// let num = 25;
// let input;
// do {
//     input = prompt("enter your number");
// } while (input != num);
// console.log("u gussed correct num");

// let heros = ["spiderman" , "ironman" , "thor"]
// for (let i = 0; i < heros.length; i++){
//     console.log(heros[i]);
// }   

let companies = ["bloomberg", "Microsoft", "Uber", " Google", "IBM", "Netflix"];
// companies.shift();
companies.splice(2,1,"Ola");
companies.push("Amazon");

console.log(companies);