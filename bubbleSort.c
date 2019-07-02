#include <stdio.h>
#include <cs50.h>

int main(void)
{

  int array[] = {1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92};
  int counter = -1;


  while (counter != 0)
  {

    counter = 0;

    //loop through the array to check if there's unsorted numbers
    for (int i = 0; i < sizeof(array) / sizeof(array[0])-1; i++)
    {

      if (array[i] > array[i + 1])
      {

        int replacer = array[i + 1];
        array[i+1] = array[i];
        array[i] = replacer;

        // so the counter will increase if it sorted a number
        counter ++;
      }
    }
  }

  // printing the sorted array
  for (int y = 0 ;y < sizeof(array)/sizeof(array[0]); y++)
  {

    printf("%i ",array[y]);

  }

}
