// Sort the first element as the smallest value you've seen so far
// Compare this item to the next item in the array until you find a smaller number
// if a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// if the "minimum" is not the value (index) you initially began with, swap the two values
// Repeat this with the next element until the array is sorted

const selectionSort = (arr) =>{
    // create a swap function for later use 
    const swap = (arr, idx1, idx2) => [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ]

    for (let i = 0; i < arr.length; i++) {
        // start iterate throgh the array from left (i), and hold i as smallest value
        let lowest = i;
        // iterate the rest of the array and compare it with value of (i)
        for (let j = i+1; j < arr.length; j++) {
            // if found another value smaller than value of (i), re-assign lowest to that value
            if (arr[lowest] > arr[j])
            lowest = j
        }
        // at last, we don't need everytime swap the sorted portion. so we only swap the arr when lowest is not equal to its index, (In other word, swap only when lowest ever re-assigned from the second loop)
        if (i !== lowest) swap(arr, i, lowest)
    }

    return arr
}

const test_selectionSort = selectionSort([34,22,10,19,17])
console.log (test_selectionSort)

// Time Complexity : O(n^2)