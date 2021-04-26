function convertToRoman(num) {
  //Rule of roman numerals, one before
  var romanNum = [
    "M", //1000
    "CM", //900
    "D", //500
    "CD", //400
    "C", //100
    "XC", //90
    "L", //50
    "XL", //40
    "X", //10
    "IX", //9
    "V", //5
    "IV", //4
    "I" //1
  ];
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var returnStr = "";
  //console.log(numbers.length);
  for (let i=0; i<numbers.length; i++){
    while(num>=numbers[i]) {
        num-=numbers[i];
        returnStr+=romanNum[i];
    }
  }
  return returnStr;
}

console.log(convertToRoman(36));
console.log(convertToRoman(3999));
