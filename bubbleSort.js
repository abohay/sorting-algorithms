function bubbleSort(array) {

  var counter = -1;
  
  while(counter !== 0)
  {
    
    counter = 0;
    
    //loop through the array to check if there's unsorted numbers
    for(var i = 0 ; i < array.length-1 ; i++)
    {
      if(array[i] > array[i+1])
      {
        
        var replacer = array[i+1];
        array[i+1] = array[i]; 
        array[i] = replacer;
        
        // so the counter will increase if it sorted a number
        counter ++;
      }
    }
  }

  // returning the sorted array
  return array;
}
bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
