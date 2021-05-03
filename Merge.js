// ------- Merge Function ------
// Create an empty array, take a look at the smallest values in each input array
// While there are still values we haven't looked at ...
//....* if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
//....* if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
//....* once we exhaust one array, push in all remaining values from the other array


const merge = (arr1, arr2) => {
    let i = 0
    let j = 0
    let mergedArr = []

    while (i < arr1.length && j < arr2.length) {
        arr1[i] <= arr2[j] ?
            (mergedArr.push(arr1[i]), i++) :
            (mergedArr.push(arr2[j]), j++)       
        }
    while (i<arr1.length) (mergedArr.push(arr1[i]), i++)
    while (j<arr2.length) (mergedArr.push(arr2[j]), j++)    

    return mergedArr 
}
// // ------- MergeSort Function (Recursion) ------
// // Break up the array into halves until you have arrays that are empty or have one element
// // Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// // Once the array has been merged back together, return the merged(and sorted) array.

const mergeSort = (arr) => {
    // base case
    if (arr.length <= 1) return arr
    
    // setup the midpoint
    let mid = Math.floor(arr.length/2)
   
    // recursively using mergeSort on both left and right side until they hit the base case.
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    // use the merge function 
    return merge(left, right)
    } 

// Time complexity : O(NlogN) 
// O(logN) when break down the array to a sigle array(length of 1)
// When merge back to a sorted array, we need to check every element, so it's O(n) 

// Space Complexity : O(n), takes up more places than Bubble sort.

const test_merge = merge([],[2,14,99,100])
console.log (test_merge)

const test_mergeSort = mergeSort([12,4,99,8,37,19])
console.log(test_mergeSort).left
