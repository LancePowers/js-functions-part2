function oldestPerson(namesAges) {
  var oldest = 0;
  var oldestname = " ";
  for (var i = 0; i < namesAges.length; i++) {
    if (namesAges[i].age > oldest){
       oldestname = namesAges[i].name;
       oldest = namesAges[i].age;
    }


  }
 return oldestname;
}

var namesAges = [
 {name: "Chuck", age:22},
 {name: "Brian", age:46},
 {name: "j.j.", age:112}
];
var test = namesAges[0];
var result = oldestPerson(namesAges);
//console.log(result);

// longest word in a string function
function longestWord(string) {
 var longestString = ""; //sets a var to empty string
 var longest = 0; //set variable to 0 to compare lengths
 var arr = string.split(" "); //set a variable to create an array

 //var arr2 = arr.split("");
 for (var i = 0; i < arr.length; i++) { //loop
   if (arr[i].length > longest){ //if index length is greater than the longest (starts at 0)
     var noPunct = arr[i].length;
     for (var j = 0; j < arr[i].length; j++) {
       arr[i].charAt(j)
     }
     longest = arr[i].length;//resets longest
     longestString = arr[i];
   //compare each element and find longest one
   }
 }

 return longestString;
}

console.log(longestWord("we are pair hhhhhhhhhhhhhhhhhhh programming!!!!!!!!!!!"));

function isLetter(char){
  var alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
  var lowCase = char.toLowerCase();
  console.log(lowCase);
  
}
// Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.

function factorial(facNum){
  var facNum = prompt("Enter a number to get its factorial:");
  var output = 1;
  for (var i = facNum; i > 0; i--) {
    output *= i;
  }
  return output;
}
console.log(factorial());

function palindrome(){
  var str = prompt("Enter text to be palindromated:")
  function palinate(str){
    var output = "";
    var length = str.length;
    //console.log(strArr.length);
    for (var i = 0; i <= str.length; i++) {
      output += str.charAt(length);
      length--;
    }
    //console.log(output);
    return output;
  }
  function noSpace(str){
    var newArray = str.split(" ");
    newString = newArray.join("");
    return newString;
  }
  var palinStr = (palinate(str));
  var strNs = noSpace(str);
  var palinStrNs = noSpace(palinStr);
  console.log(palinStr);
  if(strNs === palinStrNs){
    return true;
  } else {
    return false;
  }
}
console.log(palindrome());


// Bonus: Write a function called palinate that takes a string as an argument and returns the string in reversed order.
//Return true if the string is the same as the reversed string, otherwise return false.
