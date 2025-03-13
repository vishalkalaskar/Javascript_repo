console.log("hi this js");
//const - once assign value not change.
const accountId =1233434
//let,var ,default variable can change.
let accountEmail = "myemailId@gmail.com"
var accountPassword = "123434"
accountCity = "jaipur"
let accountState;

//accountId=12121212 //not allowed
accountEmail="hc.hc@gmail.com"
accountPassword="11111111"
accountCity="mumbai"
//Prefer not to use var becoz of issue in block scope and functional scope.
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])