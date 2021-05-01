// Start looping from with a variable called (i) from the end of the array towards the beginning
// Start an inner loop with a variable called (j) from the beginning until (i-1)
// If arr[j] is greater than arr[j+1], swap those two values.
// Return the sorted array

const bubbleSort = (arr) => {
    //inplentmenting noSwap as a flag, we can save time by checking if last loop swap or not. 
    // If last loop doens't swap, that means the rest of the array are already sorted, so we're done.
    let noSwap

    // Starting from the end rather than begin of the array because we garanteed the right side to the (i) are sorted,so we only iterate the left over array     
    for (let i = arr.length; i > 0; i--) {
        noSwap = true
         // for inner loop, start from the beginning towards to the (i-1)
        for (let j = 0; j < i-1; j++) {
            // compare each adjacent element
            if (arr[j] > arr[j+1]) {
                // swap ("bubble") the larger one to the right 
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                // change the flag of noSwap so indicates we have a swap for this loop
                noSwap = false
            }       
        }
        // if there's no swap from the last loop, then we're done and don't need to continue the algorithem.
        if (noSwap) break
    }
    return arr
}

const test_bubbleSort = bubbleSort([1,-3,6,132,45,0,56,7])
console.log (test_bubbleSort)

// Time complexity: O(n^2)
// However, with noSwap flag, bubble sort is efficency for the array almost sorted, 