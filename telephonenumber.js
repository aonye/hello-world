function telephoneCheck(str) {
  //check if the entry is valid (either 10 or 11 digits)
  var cleanStr = str.replace('[^\w-]',"");
  console.log(cleanStr);
  return true;
}

telephoneCheck("555-555-5555");
telephoneCheck("-1 (757) 622-7382");
