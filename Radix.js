// Radix sort only use for integer, and not invole comarison between elements

// ---- Helper function: getDigit (num, i) --------
// eg : getDigit (1981, 2)  floor(1981/(10^2)) => 19 % 10 => 9 (Math.abs(num) covers the negative number to positive) 
const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10
}

// ---- Helper function: digitCount (num) returns the number of digits in number --------
const digitCount = (num) => {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// ---- Helper function: mostDigits (numArray), Given and array of numbers, returns the number of digits from the largest numbers in the list --------
const mostDigits = (array) =>{
    let maxDigits = 0
    for (let i = 0; i < array.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(array[i]))
    }
    return maxDigits
}

// ----- Radix Sort Function -----
// Define a function that accepts list of numbers
// Figure out how many digits the largest nubmer has
// Loop from k=0 up to this largest number of digits
// For each iteration of the loop:
//   * Create 10 buckets for each digit (0 to 9)
//   * place each number in the corresponding bucket based on its kth digit
// Replace our existing array with values in our buckets, starting with 0 and going up to 9
// return list at the end

const radixSort = (array) => {
    let maxDigitCount = mostDigits(array)

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, ()=>[])
        for (let i = 0; i < array.length; i++) {
            let digit = getDigit(array[i],k)
            digitBuckets[digit].push(array[i])
        }
        array = [].concat(...digitBuckets)
    }
    return array
   
}

const test_radixSort = radixSort([23,12321,235,345,1,78])
console.log (test_radixSort)

// Time Complexity (worst/average case: O(nk)  n for length of array, k for number of digits(average))
