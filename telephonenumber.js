//Learning function to filter telephone numbers according to criteria, with and without an area code and then returning true/false if valid.

function telephoneCheck(str) {
    var matchStr = str.match(/((^[\d]{3}|\([\d]{3}\))\.?\s?\-?[\d]{3}\.?\s?\-?[\d]{4})|(^[\d]{10})|(^[\d]{1}(\s[\d]{3}\s?|[\d]{3}|\([\d]{3}\))\-?\s?\.?[\d]{3}\-?\s?\.?[\d]{4})/g)
    //console.log(matchStr);
    if (matchStr == null) //if the string is invalid, return false
    {
      return false;
    }
    //negative check, negative country code passes regex
    if (str[0]=='-')
    {
      return false;
    }
    var cleanStr = str.replaceAll(/[^\w]/g,"");
    //console.log(cleanStr);
    //the string must be 10 or 11 digits
    if (cleanStr[0]==1 && cleanStr.length==11)
    //country code is provided (11 digits) and equal to US
    {
      return true;
    }
    else if (cleanStr.length == 10) {
    return true;
    }
    else {
      return false;
    }
}
