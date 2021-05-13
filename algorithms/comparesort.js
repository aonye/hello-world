function bubbleSort(arr) {

  function swap(arr, index1, index2){
    var temp = arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
  }

  for (let i=0; i<arr.length; i++){
    if(arr[i]>arr[i+1]){
      swap(arr, i, i+1);
      i=0;
    }
  }
  return arr;
}
