// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.

const insertionSort = (arr) => {
    // Start (i) as the second element in the array
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr [i]
        // Assign (j) as the one element before (i)
        let j = i - 1
        // compare the value of (j) and (i), if (j) greater than (i) then swap, iterate through the sorted portion all the way to the left ( j>=0 )
        while (j >= 0 && arr[j] > currentVal) {
            arr[j+1] = arr [j]     // swap
            j--
        }
        // insert the right place
        arr[j+1] = currentVal
    }
    return arr
}


const test_insertionSort = insertionSort ([1,12,23,5,46,17,8,39,50])
console.log (test_insertionSort)