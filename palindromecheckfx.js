function palindrome(str) {
  var inputStrCopy = str.replaceAll(/[\W_]/g, "");
  //clean string with regex
  inputStrCopy = inputStrCopy.toLowerCase();
    console.log(inputStrCopy);
  for (let i=0; i < inputStrCopy.length; i++) {
    if (inputStrCopy[i]!=inputStrCopy[inputStrCopy.length-1-i]) { //checks position 0 to last value, then 1 to 2nd last, etc.
      return false;
    }
  }
  return true;
}
