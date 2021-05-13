function sym(...args) {
  let arrOfArgs = [...args];
  var arr1 = [];
  var uniqueArr = [];

  for (let i = 0; i < arrOfArgs.length; i++) {
    if (i+1<arrOfArgs.length) {//bounds check
      if (i>0){//need to pass in previous arr, if past first iteration
        arr1 = mutualValues(arr1, arrOfArgs[i+1]);
      }
      else {
        arr1.push(mutualValues(arrOfArgs[i], arrOfArgs[i+1]));
        arr1 = arr1.flat();
      }
    }
  }

  //check for uniqueness
  for (let i = 0; i < arr1.length; i++) {
    if (uniqueArr.indexOf(arr1[i])==-1){
      uniqueArr.push(arr1[i]);
    }
  }
  console.log(uniqueArr);
  return uniqueArr;
}

function mutualValues(arr1,arr2) {
  var returnArr = [];
  var found = false;
  for (let i = 0; i<arr1.length; i++){ //forward loop comparison
    for (let j = 0; j<arr2.length;j++){
      //console.log(arr1[i], arr2[j]);
      if (arr1[i]==arr2[j]){
        found=true;
        break;
      }
    }
    if (found==false){
      returnArr.push(arr1[i]);
    }
    else {
      found = false;
    }
  }

  for (let i = 0; i<arr2.length; i++){ //reverse loop
    for (let j = 0; j<arr1.length;j++){
      //console.log(arr2[i], arr1[j]);
      if (arr2[i]==arr1[j]){
        found=true;
        break;
      }
    }
    if (found==false){
      returnArr.push(arr2[i]);
    }
    else {
      found = false;
    }
  }
  returnArr.sort();
  return returnArr;
}
