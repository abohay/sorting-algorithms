function selectionSort(array) {
  // change code below this line
  var counter = 0;
  while(counter != array.length){
    var replacer = array[counter];
    var replacerIndex = counter;
    for(var x = counter + 1; x<array.length ; x++){
      if(array[x] < replacer){
        replacer = array[x];
        replacerIndex = x;
      }
    }
    var replaced = array[replacerIndex];
    array[replacerIndex] = array[counter];
    array[counter]=replaced;
    counter++;
  }
  return array;
}

// test array:
selectionSort([10,9,8,7,6,5,4,3,2,1,8,9,7,123,534,5683,2325,823,123]);
