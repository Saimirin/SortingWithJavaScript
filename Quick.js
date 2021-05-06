// ------ Pivot Helper Function -----
// Accept 3 arguments: arra, startIndex, endIndex (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot froom the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
//      * if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// Swap the starting element (i.e. the pivot) with the pivot index


// create a swap function
const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
} 

// Pivot function
const pivot = (arr, start=0, end=arr.length-1) => {

    // pick the pivot value from the beginning of the array
    let swapIdx = start
    let pivot = arr[start]

    for (let i= start+1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx ++
            swap(arr, swapIdx, i)           
        }      
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

// ------- QuickSort function ------
// Call the pivot helper on the array
// When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index,
// and the subarray to the right of that index
// Your base case occurs when you consider a subarray with less than 2 elements

const quickSort = (arr, left = 0, right = arr.length-1) => {

    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        // left
        quickSort(arr, left, pivotIndex-1)
        // right
        quickSort(arr, pivotIndex+1, right)
    }
    
    return arr
}



const test_pivot = pivot([26,23,27,44,17,47,39,42,43,1])
console.log (test_pivot)

const test_quickSort = quickSort([26,23,27,44,17,47,39,42,43,1])
console.log (test_quickSort)