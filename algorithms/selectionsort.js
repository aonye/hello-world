function selectionSort(arr) {

  function swap(arr, index1, index2){
    var temp = arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
  }

  var nullArr = arr.slice();
  for (let i=0; i<arr.length;i++){
    var arrCopy = arr.slice(i,arr.length);
    var min = Math.min.apply(null,arrCopy); //interferes with null values

    var minIndex = nullArr.indexOf(min); //search a diff clone of the array for index
    swap(arr,i,minIndex);
    swap(nullArr,i,minIndex); //swap both for consistency
    nullArr[i]=false; //replace index for arrcopy2, so it doesnt cause indexOf errors
  }
  return arr;
}
