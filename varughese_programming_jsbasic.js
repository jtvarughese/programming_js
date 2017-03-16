// Question 1
// concatenating two variables
var n=10
var q=20
console.log(n + q);

// concatenating two strings
var string1="prince"
var string2="and the revolution"
console.log(string1 + string2);

//Question 2
// first array
var baseball = ["yankees", "cubs"];
//second array
var basketball = ["knicks", "bulls"];
// third array containing both arrays above
var sports = [baseball, basketball]
var sports = [ ["yankees", "cubs"], ["knicks","bulls"] ];

console.log(sports[0][1]);
//output should be cubs

// Question 3
var num = prompt("enter a number")

if (num<100) {
  alert("this number is less than 100")
} else {
  alert("this number" + number + "is greater than 100")
}

// Question 5

var favBand = prompt("enter favorite band")

  if (favBand=="nirvana") {
    alert("You have a good ear for music")
  }
  else {
    alert("You should get cultured")
  }

// Question 6
var boy = prompt("Enter your name")
function someName(name) {
  return(name)
}
alert(someName(boy))

// Question 7
function noArg() {
console.log("Hi")
}
noArg();

// Question 8
function doorPrize(doorNumber) {
   if(doorNumber == 1) {
  alert("You win a goat!")
 } else if(doorNumber == 2) {
  alert("You win a microwave!")
 } else if(doorNumber == 3) {
  alert("You win a brand new car!")
 } else {
  alert("No soup for you!")
 }
}
