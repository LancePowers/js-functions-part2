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
