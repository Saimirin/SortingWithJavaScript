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

    while (i < arr1.length || j < arr2.length) {
        arr1[i] <= arr2[j] ?
        (mergedArr.push(arr1[i]), i++) : 
        (mergedArr.push(arr2[j]), j++)         
    }

    return mergedArr
}

const test_merge = merge([],[2,14,99,100])
console.log (test_merge)