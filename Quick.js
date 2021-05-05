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
const pivot = (arr, left, right) => {
    left = 0
    right = arr.length+1

    
    // pick the pivot value from the beginning of the array
    let swapIdx = left
    let pivot = arr[swapIdx]

    for (let i= left+1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx ++
            swap(arr, swapIdx, i)           
        }      
    }
    swap(arr, left, swapIdx)
    console.log('finished one round', arr) 
    return swapIdx
}



// const arrayForSwap = [1,2,3,4,5]
// swap(arrayForSwap, 1,3)
// console.log (arrayForSwap) 

const test_pivot = pivot([26,23,27,44,17,47,39,42,43,1])
console.log (test_pivot)