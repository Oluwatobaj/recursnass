function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      // Store the current element to be inserted into the sorted portion
      const currentElement = arr[i];
      let j = i - 1;
  
      // Move elements of the sorted portion that are greater than the current element
      // to the right, creating space for the current element
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Place the current element in its correct position in the sorted portion
      arr[j + 1] = currentElement;
    }
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [12, 11, 13, 5, 6];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray); // Output: [5, 6, 11, 12, 13]
  