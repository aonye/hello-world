function rot13(str) {
  //convert string to array to use hexadecimals/ascii table
  var strArr = [];
  for (let i=0; i<str.length; i++) {
    strArr.push(str.charCodeAt([i]));
    //console.log(strArr);
    if (strArr[i]>=65 && strArr[i]<=90) { //sort out capital A-Z
      //convert cypher code by adding 13 to existing value
      //if it's >77 (N), must subtract by alphabet (25) plus one
      if(strArr[i]>77) {
        strArr[i]=strArr[i]+13-25-1;
      }
      else {
        strArr[i]=strArr[i]+13;
      }
    }
    //if it's not A-Z, original hexa value is fine, don't need to convert
    strArr[i]=String.fromCharCode(strArr[i]);
  }
  str = strArr.join("");
  //console.log(str);
  return str;
}

//use regex, ignore punctuation.

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!"); //FREE PIZZA!
rot13("SERR YBIR?"); //should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); //should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
