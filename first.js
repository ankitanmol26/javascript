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

// let companies = ["bloomberg", "Microsoft", "Uber", " Google", "IBM", "Netflix"];
// // companies.shift();
// companies.splice(2,1,"Ola");
// companies.push("Amazon");

// console.log(companies);
function add(a,b){
    console.log(a+b);
}

const mul =(a,b) =>{
    return a*b;
}

// function countVowels(string) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
//     for (let i = 0; i < string.length; i++) {
//         if (vowels.includes(string[i])) {
//             count++;
//         }
//     }
//     return count;
// }

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//        if(
//         char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
//         char === "A" || char === "E" || char === "I" || char === "O" || char === "U"
//        ){
 
// }//         count++;
    
//     }           
// }   
// console.log(count);


// const countVowels = (str)
// let nums = [1,2,3,4,5]
// nums.forEach((num) =>{
//     console.log(num*num); 


// })

// console.dir(document.getElementsByClassName("myclass"));
// console.dir(document.querySelector(".myclass"));

// let element = document.querySelector(".myclass");
// console.dir(element);

// let h2 = document.querySelector("h2");
// h2.innerText = "Hello JavaScript from anmol";

// let boxes = document.querySelectorAll(".box");
// boxes.innerText = "Hello JavaScript from anmol";

let button = document.createElement("button");
button.innerText = "Click me";
button.style.backgroundColor = "red";
button.style.color = "white";
document.querySelector("body").prepend(button);