console.log("hi this js");
//const - once assign value not change.
const accountId =1233434
//let,var ,default variable can change.
let accountEmail = "myemailId@gmail.com";
var accountPassword = "123434";
accountCity = "jaipur";
let accountState;

//accountId=12121212 //not allowed
accountEmail="hc.hc@gmail.com";
accountPassword="11111111";
accountCity="mumbai";
//Prefer not to use var becoz of issue in block scope and functional scope.
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

//DATA Types

let name ="vishal"; //string
let age =10; //integer,bigint 
let isLoggedIn = false  //boolean true/false
 //null -> standalone value
 //undefine -> value not yet assign
 //symbol ->unique
 //object 
 console.log(typeof(undefined)); //undefined
 console.log(typeof(null)); //return type Object.

 //Datatype conversion confusion
 let score ="33";

 console.log(typeof score);
 console.log(typeof(score));

 let valueInNumber = Number(score);
 console.log(typeof valueInNumber);
 console.log(valueInNumber);

 //NaN ->not a numbers
 //"33"-> 33
//"33abc"->NaN
//true ->1 ; false ->0

